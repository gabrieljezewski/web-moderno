<h1>Desafio Técnico N2</h1>
<h3>Objetivo do projeto:</h3>
<p>Configurar um ambiente para hospedar uma aplicação web, em um VPS que possui apenas o sistema instalado, seguindo o padrão do host utilizado. Entrentanto algumas configurações foram alteradas para simular dificuldades
comuns que podem ocorrer em sistemas operacionais, sendo necessário analisar as falhas e aplicar as correções que julgar necessárias.</p>

## Instruções para a prova

- [ ] Utilize o domínio .kinghost.net disponível em seu cadastro interno para que responda pelo VPS.
- [x] Item 2 - Altere o hostname da máquina para (SEUNOMESOBRENOME) de forma persistente, e ajuste o fuso horário do servidor para o horário de São Paulo.
- [ ] Item 3 - Configure a seguinte estrutura para servir aplicações web com linguagem PHP:
  - Instale o webserver Nginx;
  - Crie um vhost para o site que corresponde ao seu domínio: (SEUNOMESOBRENOME).kinghost.net;
  - O diretório do site deverá ser /home/(SEUNOMESOBRENOME)/www
- [ ] Item 4 - Instale o PHP e o PHP-FPM.
  - A pool deverá ser configurada para ser utilizada com o usuário (SEUNOMESOBRENOME);
  - Configure uma pool chamada (SEUNOMESOBRENOME).kinghost.net que escute via unix socket no seguinte endereço: /var/run/php-fpm/(SEUNOMESOBRENOME).sock;
  - Configurar a pool para trabalhar com processos por demanda;
  - A pool deve conter a configuração de 2 processos;
  - Crie um arquivo chamado phpinfo.php;
- [ ] Item 5 - Instale um serviço de FTP (proftpd).
  - Crie um usuário principal que poderá ser acessado na porta 21;
  - Crie um usuário adicional chamado (SEUNOMESOBRENOME)add que acesse o diretório (/home/(SEUNOMESOBRENOME)/www);
- [ ] Item 6 - Implemente uma rotina de backup para ser executada todos os dias às 23 horas armazenando a cópia do conteúdo no diretório /backup.
- [ ] Item 7 - Instale o utilitário rsync e WP-CLI, de forma que possa ser utilizado com o comando ‘wp’.
- [ ] Instale um software para gerenciamento de banco de dados (MySQL ou MariaDB).
  - Crie um banco de dados e um usuário no padrão (SEUNOMESOBRENOME);
  - Resgate o conteúdo disponível no host (-h desafion2.online -b wordpress -u dump2me -p U8qe6Q}?5w) e importe na sua base;
- [ ] Item 8 - Utilize o rsync para realizar a migração do WordPress disponível neste local:
  - Usuário - migra, Host - desafion2.online, Caminho - : (Ex- migra@desafion2.online:);
- [ ] Item 9 - Você deve utilizar a chave ssh que foi disponibilizada no email do desafio para que consiga realizar o rsync.
- [ ] Item 10 - Restaure o WordPress e ajuste a conexão com o banco de dados.
  - Ajuste as falhas presente na cms;
  - A página inicial  e /wp-admin deve estar acessível através do seu domínio .kinghost.net;
  - Instalar o plugin WP Mail SMTP e realizar um teste de envio para testandosuaconta.n2@gmail.com;

## Resolução
<h1>Item 2:</h1>
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

<p>Deste modo, pensei em renomear o arquivo, retirar permissões, atribuir chattr a ele mas sem sucesso. Deste modo, percebi que ele identifiquei que ele fazia a mudança deste script para o arquivo /root/.bash_profile, e nele adicionei o seguint script que funcionou:</p>

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

<h1>Item 3:</h1>
<p>Executei os comandos abaixo para instalar o Nginx, iniciar o serviço e verificar o status.</p>

```bash
$ sudo yum install nginx
$ sudo systemctl start nginx
$ sudo systemctl status nginx
```

<p>Listei as portas liberadas, vi que não estava a pota 80, então liberei a mesma.</p>

```bas
$ firewall-cmd --list-ports
$ firewall-cmd --permanent --zone=public --add-port=80/tcp
```

<p>Para criar um vhost apontado para gabrieljezewski.kinghost.net, criei o arquivo gabrieljezewski.conf dentro de /etc/nginx/conf.d/ e inseri o seguite script:</p>

```bas
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
<p>Após isso, acessei meu painel da KingHost onde possuo o domínio gabrieljezewski.kinghost.net, e no ícone gerenciar DNS percebi que as entradas @ e www estavam incorretas, apontadas para web01-king.kinghost.net. Alterei elas para o ip da vps 177.153.58.61</p>
