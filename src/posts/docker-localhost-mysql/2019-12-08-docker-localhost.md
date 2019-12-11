---
title:  "Docker + Localhost MySQL"
tags: ["servers", "linux", "mysql", "docker"]
---

I was having the hardest time getting docker containers to connect to the hosts instance of mysql. 

I finally found a great solution, so I wanted to post it here for myself and others in the future:

Enable `route_localnet` for docker0 interface:

`$ sysctl -w net.ipv4.conf.docker0.route_localnet=1`

Add this rules to iptables:

`$ iptables -t nat -I PREROUTING -i docker0 -d 172.17.0.1 -p tcp --dport 3306 -j DNAT --to 127.0.0.1:3306`

`$ iptables -t filter -I INPUT -i docker0 -d 127.0.0.1 -p tcp --dport 3306 -j ACCEPT`

Create mysql user with access from '%' that mean - from anyone, excluding localhost:

`CREATE USER 'user'@'%' IDENTIFIED BY 'password';`

Change in your docker run command or docker-compose, etc the mysql-server address to 172.17.0.1
