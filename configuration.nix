{ config, pkgs, lib, inputs, modulesPath, ... }:

{
  nix.settings = {
    substituters = ["https://hyprland.cachix.org"];
    trusted-public-keys = ["hyprland.cachix.org-1:a7pgxzMz7+chwVL3/pzj6jIBMioiJM7ypFP8PwtkuGc="];
  };

  imports = [
    ./hardware-configuration.nix 
    ./modules/vm.nix
    ./modules/shell.nix
    ./modules/users.nix
    ./modules/nvidia.nix
  ];

  boot.supportedFilesystems = [ "ntfs" ];
  fonts.fonts = with pkgs; [
    font-awesome
    (nerdfonts.override { fonts = [ "FiraCode" "JetBrainsMono" "Iosevka"]; })
    noto-fonts
    noto-fonts-cjk
    noto-fonts-emoji
    liberation_ttf
    fira-code
    fira-code-symbols
    mplus-outline-fonts.githubRelease
    dina-font
    proggyfonts
  ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;
  boot.loader.efi.efiSysMountPoint = "/boot";
  boot.loader.systemd-boot.configurationLimit = 3;

  networking.hostName = "NixOS";
  networking.networkmanager.enable = true; 
  hardware.bluetooth.enable = true;
  services.blueman.enable = true;

  sound.enable = true;
  hardware.pulseaudio.enable = false;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
  };

  time.timeZone = "Asia/Tokyo";
  i18n.defaultLocale = "en_US.UTF-8";

  services.xserver = {
    layout = "us";
    xkbVariant = "";
  };

  services.xserver.enable = true;
  services.flatpak.enable = true;
  services.locate.enable = true;
  services.printing.enable = true;
  services.xserver.libinput.enable = true;
  services.xserver.libinput.touchpad.tapping = true;
  services.logind.lidSwitchExternalPower = "ignore";
  services.tlp.enable = true;
  services.upower.enable = true;
  powerManagement = {
    enable = true;
    cpuFreqGovernor = "ondemand";
  };

  services.xserver.displayManager.gdm.enable = true;
  services.xserver.displayManager.gdm.wayland = true;

  xdg.portal = {
    enable = true;
    xdgOpenUsePortal = true;
    extraPortals = with pkgs; [
      xdg-desktop-portal-gtk
      xdg-desktop-portal-wlr
    ];
    wlr.enable = true;
  };

  nix.settings.experimental-features = [ "nix-command" "flakes" ];
  environment.systemPackages = with pkgs; [
    vim
    zig
    nix
    wget
    killall
    git
    neofetch
    gh
    zsh
    gtk4
    zip
    unzip
    openssl
    pkg-config
  ];
  programs.zsh.enable = true;
  users.defaultUserShell = pkgs.zsh;

  networking.firewall.enable = false;

  system.stateVersion = "22.11"; 

  # Fcitx5
  i18n.inputMethod = {
    enabled = "fcitx5";
    fcitx5.addons = with pkgs; [
        fcitx5-mozc
        fcitx5-gtk
    ];
  };
  environment = {
    etc."environment".text = ''
      GTK_IM_MODULE=fcitx5
      QT_IM_MODULE=fcitx5
      XMODIFIERS=@im=fcitx5
    '';
  };
}

