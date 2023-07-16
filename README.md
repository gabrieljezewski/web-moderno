<h1>Desafio Técnico N2</h1>
<h3>Objetivo do projeto:</h3>
<p>Configurar um ambiente para hospedar uma aplicação web, em um VPS que possui apenas o sistema instalado, seguindo o padrão do host utilizado. Entrentanto algumas configurações foram alteradas para simular dificuldades
comuns que podem ocorrer em sistemas operacionais, sendo necessário analisar as falhas e aplicar as correções que julgar necessárias.</p>
<br>

## Instruções para a prova
- [x] Item 1 - Utilize o domínio .kinghost.net disponível em seu cadastro interno para que responda pelo VPS.
- [x] Item 2 - Altere o hostname da máquina para (SEUNOMESOBRENOME) de forma persistente, e ajuste o fuso horário do servidor para o horário de São Paulo.
- [x] Item 3 - Configure a seguinte estrutura para servir aplicações web com linguagem PHP:
  - Instale o webserver Nginx;
  - Crie um vhost para o site que corresponde ao seu domínio: (SEUNOMESOBRENOME).kinghost.net;
  - O diretório do site deverá ser /home/(SEUNOMESOBRENOME)/www
  - Instale o PHP e o PHP-FPM.
  - A pool deverá ser configurada para ser utilizada com o usuário (SEUNOMESOBRENOME);
  - Configure uma pool chamada (SEUNOMESOBRENOME).kinghost.net que escute via unix socket no seguinte endereço: /var/run/php-fpm/(SEUNOMESOBRENOME).sock;
  - Configurar a pool para trabalhar com processos por demanda;
  - A pool deve conter a configuração de 2 processos;
  - Crie um arquivo chamado phpinfo.php;
- [x] Item 4 - Instale um serviço de FTP (proftpd).
  - Crie um usuário principal que poderá ser acessado na porta 21;
  - Crie um usuário adicional chamado (SEUNOMESOBRENOME)add que acesse o diretório (/home/(SEUNOMESOBRENOME)/www);
- [x] Item 5 - Implemente uma rotina de backup para ser executada todos os dias às 23 horas armazenando a cópia do conteúdo no diretório /backup.
- [x] Item 6 - Instale o utilitário rsync e WP-CLI, de forma que possa ser utilizado com o comando ‘wp’.
- [ ] Item 7 - Instale um software para gerenciamento de banco de dados (MySQL ou MariaDB).
  - Crie um banco de dados e um usuário no padrão (SEUNOMESOBRENOME);
  - Resgate o conteúdo disponível no host (-h desafion2.online -b wordpress -u dump2me -p U8qe6Q}?5w) e importe na sua base;
- [ ] Item 8 - Utilize o rsync para realizar a migração do WordPress disponível neste local:
  - Usuário - migra, Host - desafion2.online, Caminho - : (Ex- migra@desafion2.online:);
  - Você deve utilizar a chave ssh que foi disponibilizada no email do desafio para que consiga realizar o rsync.
  - Restaure o WordPress e ajuste a conexão com o banco de dados.
  - Ajuste as falhas presente na cms;
  - A página inicial  e /wp-admin deve estar acessível através do seu domínio .kinghost.net;
  - Instalar o plugin WP Mail SMTP e realizar um teste de envio para testandosuaconta.n2@gmail.com;
  
<br>

## Resolução:
<h2>Item 1:</h2>
<p>Acessei meu painel de controle da KingHost onde possuo o domínio gabrieljezewski.kinghost.net, e no ícone gerenciar DNS alterei as entradas @ e www que estavam incorretas, apontadas para web01-king.kinghost.net. Alterei elas para o ip da vps 177.153.58.61</p>

<br>
<h2>Item 2:</h2>
<p>Primeiramente atualizei os pacotes do sistema com o comando yum install. Após isso executei o comando abaixo para alterar o hostname de forma persistente.
</p>

```bash
$ sudo hostnamectl set-hostname gabrieljezewski
```

<p>Porém ao reiniciar a máquina, voltou com o antigo nome desafio-n2. Deste modo imaginei que este arquivo /etc/hostname esteja sendo reescrito sempre quando reiniciado, sendo assim pesquisei quais poderiam ser os arquivos dentro da estrutura da máquina que são habilitados para serem iniciados em determinados momentos, e encontrei que poderia ser os arquivos *.wants localizados em /etc/systemd/system
Procurei a partir deste diretório utilizando o comando grep para achar o termo hostname e encontrei no default.target.wants/donttouchmeimscared.service, que apontava para o script /bin/donttouchme.sh fazer a troca do nome.
Abaixo segue os comandos em ordem executados:
</p>

```bash
$ cd /etc/systemd/system/default.target.wants
$ grep "hostname" * -Rl
$ vim default.target.wants/donttouchmeimscared.service
$ vim /bin/donttouchme.sh
```

<p>Deste modo, pensei em renomear o arquivo, retirar permissões, atribuir chattr a ele, desativar selinux mas sem sucesso. Deste modo, percebi que ele fazia a mudança deste script para o arquivo /root/.bash_profile, e então nele adicionei o seguint script que funcionou:</p>

```bash
$ # .bash_profile
$ sleep 5
$ hostnamectl set-hostname gabrieljezewski
$ exec bash
$ 
$ # Get the aliases and functions
$ if [ -f ~/.bashrc ]; then
$         . ~/.bashrc
$ fi
$ 
$ # User specific environment and startup programs
$ PATH=$PATH:$HOME/bin
$ export PATH
```

<p>Para mudar o fuso horário, primeiro listei os que estavam disponíveis. Criei um link simbólico do fuso America/Argentina/Buenos_Aires para /etc/localtime que seria o mais próximo de São Paulo. E por fim sincronizei o horário e conferi se de fato foi alterado.</p>

```bash
$ timedatectl list-timezones
$ sudo ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
$ sudo hwclock --systohc
$ timedatectl
```

<p>Executei os comandos abaixo para instalar o Nginx, ativar o serviço e verificar o status.</p>

```bash
$ sudo yum install nginx
$ sudo systemctl enable nginx
$ sudo systemctl start nginx
$ sudo systemctl status nginx
```

<p>Listei as portas liberadas, vi que não estava a pota 80, então liberei a mesma.</p>

```bash
$ firewall-cmd --list-ports
$ firewall-cmd --permanent --zone=public --add-port=80/tcp
```

<p>Para criar um vhost apontado para gabrieljezewski.kinghost.net, criei o arquivo gabrieljezewski.conf dentro de /etc/nginx/conf.d/ e inseri o seguite script:</p>

```bash
$ sudo vim /etc/nginx/conf.d/gabrieljezewski.conf
```

```bash
$ server {
$   listen 80;
$   server_name gabrieljezewski.kinghost.net;
$   
$   root /home/gabrieljezewski/www;
$   index index.html;
$ 
$   location / {
$     try_files $uri $uri/ =404;
$   }
$ }
```

<p>Neste script, configurei o servidor para escutar na porta 80 e associei o nome do servidor "gabrieljezewski.kinghost.net" ao vhost. O diretório raiz está definido como "/home/gabrieljezewski/www"</p>
<p>Após isso, criei o diretório /home/gabrieljezewski/www, verifiquei se as permissões estão corretas, e reiniciei o servidor para testar.</p>

```bash
$ sudo mkdir -p /home/gabrieljezewski/www
$ ls -ld /home/gabrieljezewski/www
$ systemctl restart nginx
```

<br>
<h2>Item 4:</h2>
<p>Para instalação do PHP8 e PHP-FPM, foi necessário isntalar antes o repositório Remi e yum-utils.</p>

```bash
$ sudo yum install epel-release
$ sudo yum install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
$ sudo yum install yum-utils
```

<p>Após isso, ativei o módulo PHP8 do respositório, instalei o php e confirmei a versão instalada.</p>

```bash
$ sudo yum module enable php:remi-8.0
$ sudo yum install php
$ php -v
```

<p>Configurei a pool com o meu usuário gabrieljezewski acessando o arquivo www.conf em /etc/php-fpm.d/, e editei as linhas user e group conforme abaixo:</p>

```bash
$ sudo vim /etc/php-fpm.d/www.conf
```
<p>De:</p>

```bash
$ user = apache
$ group = apache
```

<p>Para:</p>

```bash
$ user = gabrieljezewski
$ group = gabrieljezewski
```
<p>E salvei apertando esq :wq</p>

<p>Para configurar uma nova pool gabriel.kinghost.net que escute via unix socket no seguinte endereço: /var/run/php-fpm/(SEUNOMESOBRENOME).sock, criei um arquivo novo com o seguinte script:</p>

```bash
$ sudo vim /etc/php-fpm.d/gabrieljezewski.kinghost.net.conf
```

```bash
$ [gabrieljezewski.kinghost.net]
$ user = gabrieljezewski
$ group = gabrieljezewski
$ listen = /var/run/php-fpm/gabrieljezewski.sock
$ listen.owner = gabrieljezewski
$ listen.group = gabrieljezewski
$ listen.mode = 0660
$ pm = dynamic
$ pm.max_children = 5
$ pm.start_servers = 2
$ pm.min_spare_servers = 1
$ pm.max_spare_servers = 3
```

<p>Feito isso, configurei essa pool para trabalhar com processos por demanda(ondemand) e defini o número de processos para 2.</p>
<p>Acessei o arquivo gabrieljezewski.kinghost.net.conf dentro de /etc/php-fpm.d/ e modifiquei o script alterando duas linhas, conforme abaixo:</p>

```bash
$ vim /etc/php-fpm.d/gabrieljezewski.kinghost.net.conf
```

<p>Para: </p>

```bash
$ pm = dynamic
$ pm.max_children = 5
```

<p>De:</p>

```bash
$ pm = ondemand
$ pm.max_children = 2
```
<p>Salvei o arquivo com o comando esq :wq e reiniciei o servidor com o comando sudo systemctl restart php-fpm</p>

<p>Por fim, criei o arquivo phpinfo.php em /home/gabrieljezewski/www com o script abaixo:</p>

```bash
$ vim /home/gabrieljezewski/www/phpinfo.php
```

```bash
$ <?php
$  phpinfo();
$ ?>
```

<p>Após isso, percebi que o servidor ainda não estava interpretando arquivo php, deste modo foi necessário cofigurar em meu arquivo gabrieljezewski.conf localizado em /etc/nginx/conf.d/ o seguinte trecho abaixo do código já existe:</p>

```bash
$ location ~ \.php$ {
$   fastcgi_pass unix:/run/php-fpm/www.sock;
$   fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
$   include fastcgi_params;
$  }
$ }
```

<p>Feito isso, reiniciei o servidor para surtir efeito.</p>

```bash
$ systemctl restart nginx
```

<br>
<h2>Item 5:</h2>
<p>Instalei o serviço de FTP (proftpd).</p>

```bash
$ sudo yum install proftpd
```

<p>Acessei o arquivo /etc/proftpd.conf e conferi se na linha DefaultRoot estava da seguinte forma: "DefaultRoot ~". Deste modo, permitirá que o usuário principal acesse seu diretório inicial após o login no FTP. E por fim ativei e iniciei o serviço de proftpd.</p>

```bash
$ vim /etc/proftpd.conf
$ systemctl enable proftpd
$ systemctl start proftpd
```

<p>Após isso, liberei a porta 21, atualizei e listei se de fato foi liberada.</p>

```bash
$ sudo firewall-cmd --add-port=21/tcp --permanent
$ sudo firewall-cmd --reload
$ firewall-cmd --list-ports
```

<p>Criei o usuário adicional gabrieljezewskiadd e atribui permissões do user gabrieljezewski a ele:</p>

```bash
$ sudo adduser gabrieljezewskiadd
$ sudo chown -R gabrieljezewskiadd:gabrieljezewski /home/gabrieljezewski/www
```

<p>Configurando o usuário adicional para acessar somente o diretório /home/gabrieljezewski/www</p>
<p>Criei um link simbólico /home/gabrieljezewski/www para a pasta do user gabrieljezewskiadd</p>

```bash
$ ln -s /home/gabrieljezewski/www /home/gabrieljezewskiadd
```

<p>Acessei o arquivo /etc/proftpd.conf e editei a linha "#DefaultRoot ~" para conforme abaixo e salvei pressionando esq :wq</p>

```bash
$ vim /etc/proftpd.conf
```

```bash
$ DefaultRoot /home/gabrieljezewskiadd/www
```

<p>Após isso, executei o comando abaixo para definir a senha deste usuário, quando executado automaticamente é solicitado a senha e confirmar senha.(desafio@n2)</p>

```bash
$ sudo passwd gabrieljezewskiadd
```

<p>Por fim, testei acesso ao user root e gabrieljezewskiadd através do Filezilla, e retornou erro: Conexão expirou após 20 segundos de inatividade.</p>
<p>Verifiquei se havia alguma conexão negada pelo iptables com o comando abaixo, e percebi que tinha um drop na 21.</p>

```bash
$ iptables -L INPUT -n --line-numbers
```

<p>Deste modo, identifiquei que no arquivo crontab tinha uma única linha de drop na porta 21, acessei ele, removi a linha, salvei e consegui o acesso.</p>

```bash
$ crontab -e
```

```bash
$ */1 * * * * for i in {1..6}; do sudo iptables -C INPUT -p tcp -s 0/0 -d 0/0 --dport 21 -j DROP || sudo iptables -A INPUT -p tcp -s 0/0 -d 0/0 --dport 21 -j DROP && sleep 10; done
```

<br>
<h2>Item 6:</h2>
<p>Implementei uma rotina de backup para a aplicação /home/gabrieljezewski/www, que deve ser executada todos os dias ás 23 horas, armazenando a cópia do conteúdo no diretório /backup do servidor.</p>
<p>Criei o arquivo backup.sh em /bin, com o seguinte script.</p>

```bash
$ vim /bin/backup.sh
```

```bash
$ $ #!/bin/sh
$ 
$ backup_dir=/backup
$ app_dir=/home/gabrieljezewski/www
$ dir_date=$(date +%Y-%m-%d)
$ 
$ mkdir -p "$backup_dir"/"$dir_date"
$ cp $app_dir "$backup_dir"/"$dir_date"
```

<p>Para configurar o agendamento do backup com o "cron", precirei abrir o arquivo de tarefas:</p>

```bash
$ sudo crontab -e
```

<p>E adicionei a seguinte linha nele:</p>

```bash
$ 0 23 * * 1-7 /bin/sh backup.sh
```

<p>Lembrando que para salvar a alteração, basta pressionar esq :wq</p>
<p>Deste forma, O backup diário será executado automaticamente todos os dias às 23 horas. O "rsync" irá copiar os arquivos da aplicação (/home/gabrieljezewski/www) para o diretório de backup (/backup/), mantendo-os sincronizados.</p>
<p>Fiz um teste antes para executar de 1 em 1 minuto, com a sintaxe * * * * * /bin/sh backup.sh e funcionou.</p>

<h2>Item 6:</h2>
<p>Instalei rsync</p>

```bash
$ sudo yum install rsync
```

<p>Instalando WP-CLI e configurando o comando wp</p>
<p>Primeiro baixei o arquivo executável "wp" salvando no diretório /usr/local/bin/, e após deixei o arquivo executável:</p>

```bash
$ sudo curl -o /usr/local/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
$ sudo chmod +x /usr/local/bin/wp
```

<p>Por fim, executei o comando abaixo para confirmar se foi instalado corretamente.</p>

```bash
$ wp --info
```

<h2>Item 7:</h2>
<p></p>
