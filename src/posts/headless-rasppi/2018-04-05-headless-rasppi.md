---
title:  "headless rasp pi"
tags: ["raspberry pi", "linux"]
---

### SSH
Create an empty file named <code>ssh</code> _without an extension_ in the root of the <code>BOOT</code> partition

### WiFi

Also in the root of the <code>BOOT</code> partition:
Create a file named <code>**wpa_supplicant.conf**</code> with the following contents:

```bash
country=DE
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
	ssid="Finger_Weg_OBEN"
	scan_ssid=1
	psk="1123581321345589"
	key_mgmt=WPA-PSK
}
``` 
