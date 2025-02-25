{
  description = "Hyprland+waybar";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    hyprland.url = "github:hyprwm/Hyprland";
    home-manager.url = "github:nix-community/home-manager";
    home-manager.inputs.nixpkgs.follows = "nixpkgs";
    powercord-overlay.url = "github:LavaDesu/powercord-overlay";  # add this
  };

  outputs = { self, nixpkgs, hyprland, home-manager, powercord-overlay, ... }:  # add powercord-overlay here
  let
    user = "runfunrun";
    system = "x86_64-linux";
  pkgs = import nixpkgs {
    inherit system;
    config.allowUnfree = true;
  };
  in {
    nixosConfigurations = {
      ${user} = nixpkgs.lib.nixosSystem {
        inherit system;
        specialArgs = {inherit user;};
        modules = [ 
          ./configuration.nix 
          hyprland.nixosModules.default
          {
            programs.hyprland.enable = true;
            programs.hyprland.nvidiaPatches=true;
            programs.hyprland.xwayland.enable=true;
          }
          home-manager.nixosModules.home-manager
          {
            home-manager.useGlobalPkgs = true;
            home-manager.useUserPackages = true;
            home-manager.extraSpecialArgs = {inherit user;};
            home-manager.users.${user} = import ./modules/home.nix;
          }
          {
            nixpkgs.overlays = [ powercord-overlay.overlay ];  # add this
            environment.systemPackages = with pkgs; [ 
              google-chrome
              discord 
              obs-studio 
              spotify 
              vscode
            ];
          }
        ];
      };
    };
  };
}
