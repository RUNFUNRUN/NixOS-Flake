# NixOS-Flake

This flake is forked by [https://github.com/nomadics9/NixOS-Flake](https://github.com/nomadics9/NixOS-Flake)

## How to install?

- Install NixOS

[https://channels.nixos.org/nixos-23.05/latest-nixos-gnome-x86_64-linux.iso](https://channels.nixos.org/nixos-23.05/latest-nixos-gnome-x86_64-linux.iso)

recommend: GNOME desktop

**Attention**

If you want to use Dark mode(ex chrome), now set the dark mode in GNOME settings.
Hyprland does not have a section for dark theme. (probably)

- Install git and vim

```
nix-env -i git vim
```

- Clone

```
git clone https://github.com/RUNFUNRUN/NixOS-Flake.git
```

- cd to cloned dir

```
cd NixOS-Flake
```

- Copy hardware-configuration.nix from /etc/nixos/hardware-configuration.nix

```
sudo cp /etc/nixos/hardware-configuration.nix .
```

- Copy .config and wallpaper

```
cp -r .config ~/
cp -r wallpapers ~/Desktop
```
 
You can add your favorite wallpapers.(`~/Desktop/wallpapers/`)

- Change username to your user in `flake.nix` and `modules/shell.nix`

- Change `boot.loader.efi.efiSysMountPoint` in `configuration.nix`

Set the following directories under /boot in the following locations.

```
/boot $ ls            
 EFI   loader  'System Volume Information'
```
It may also be `/boot/efi`.

- Change timezone in `configuration.nix`

Line 52.

- Switch the flake

```
sudo nixos-rebuild switch --flake .#YOURUSERNAME
```

The alias allows you to execute `switch` from next time.

- reboot

```
reboot
```

SUPER + F1 for all keybinds!

Configure the .config as you wish.

In particular, we recommend changing Hyprland's monitor settings.

Also, there is an input method setting in `configuration.nix`.

## Additional

### oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- plugins

```
# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

### LunarVim

[Installation](https://www.lunarvim.org/docs/installation)

### `.zshrc` example

```
export PATH="$HOME/.local/bin":$PATH
export ZSH="$HOME/.oh-my-zsh"

eval "$(github-copilot-cli alias -- "$0")"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh
```
