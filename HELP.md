# Comando básico NestJS

- Criar módulo nets g resource users

# Clearn architecture

## infrastructure
Qualquer serviço externo que não seja parte integrante da solução do cliente, ou seja, que não esteja diretamente relacionado com as regras de negócio da aplicação.

Exemplos:
 - Tecnologia usada na infraestrutura como o Nestjs.
 - Serviço de autenteicação de terceiros com Google e Facebook.
 - Serviço de email externo como SendGrid ou Amazon SES.
 - Sistema de pagamento como PayPal, Stripe e PagSeguro.
 - Serviço de armazenamento em Nuvem como Amazon S3.
 - Sistema de mensageria como Whatszap.

## domain
Tudo que é essencial, sem influências externas, ou seja, as regras de negócio da aplicação.

### entities
A camada essencial da aplicação, o núcleo da sua existência, construído com código puro.
Igualmente as "Use Cases" que normalmente lida com as regras de negócio.


# Clearn architecture - exceções
Regras que foram quebradas conscientemente.

*1 - Para cada caso, pode ser criado uma camada com contrato e sua implementação,
permitindo assim a substituição facilmente.

- Utilização do UUID na camada que contêm a regra de negócio
- Validação das propriedades das entidades utilizando classValidator (*1 Aplicado)
