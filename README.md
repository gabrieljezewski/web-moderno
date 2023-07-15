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
## Item 2:
```bash
# Primeiramente atualizei os pacotes do sistema com o comando yum install
# Executei o comando abaixo para alterar o hostname de forma persistente
$ sudo hostnamectl set-hostname gabrieljezewski

cd /etc/systemd/system/default.target.wants
grep "hostname" * -Rl
vim default.target.wants/donttouchmeimscared.service
vim /bin/donttouchme.sh
chmod -x donttouchme.sh
# Acessei o arquivo .bash_profile e inseri o código abaixo:
vim /root/.bash_profile
sleep 5
hostnamectl set-hostname gabrieljezewski
chattr +ia .bash_profile

# Para mudar o fuso horário, primeiro listei os que estavam disponíveis.
$ timedatectl list-timezones
# Criei um link simbólico do fuso America/Argentina/Buenos_Aires para /etc/localtime que seria o mais próximo de São Paulo.
$ sudo ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
# Executei os comandos abaixo para sincronizar o horário, e verificar se de fato foi alterado
$ sudo hwclock --systohc
$ timedatectl
```

```bash
# Item 3:
# Executei os comandos abaixo para instalar o Nginx, iniciar o serviço e verificar o status.
$ sudo yum install nginx
$ sudo systemctl start nginx
$ sudo systemctl status nginx
# Listei as portas liberadas, vi que não estava a pota 80, então liberei a mesma.
$ firewall-cmd --list-ports
$ firewall-cmd --permanent --zone=public --add-port=80/tcp
```
