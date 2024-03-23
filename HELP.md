## Comando básico NestJS

- Criar módulo nets g resource users

## Clearn architecture

### infrastructure
Qualquer serviço externo que não seja parte integrante da solução do cliente, ou seja, que não esteja diretamente relacionado com as regras de negócio da aplicação.

Exemplos:
 - Tecnologia usada na infraestrutura como o Nestjs.
 - Serviço de autenteicação de terceiros com Google e Facebook.
 - Serviço de email externo como SendGrid ou Amazon SES.
 - Sistema de pagamento como PayPal, Stripe e PagSeguro.
 - Serviço de armazenamento em Nuvem como Amazon S3.
 - Sistema de mensageria como Whatszap.

### domain
Tudo que é essencial, sem influências externas, ou seja, as regras de negócio da aplicação.
