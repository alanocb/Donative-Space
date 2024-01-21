![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/9693ae19-77b2-4d1e-8cae-c7640ce1d691)


# Projeto Desenvolvimento de Software - Donative Space

## Milestone 3

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/3eab4429-85cb-4d8c-b2ae-3a400a4fc4f2)


- Alano Baptista – 20190818
- Luquenia Galiano - 20210451

## Índice
1. [Nome do Projeto: Donative Space](#nome-do-projeto-donative-space)
2. [Ideia](#ideia)
3. [Objetivos](#objetivos)
4. [Público-Alvo](#público-alvo)
5. [Ferramentas Comparáveis](#ferramentas-comparáveis)
6. [Guiões de Teste Possíveis](#guiões-de-teste-possíveis)
7. [Casos de Uso](#casos-de-uso)
8. [Diagrama de Classes](#diagrama-de-classes)
9. [Arquitetura Atual do Sistema](#arquitetura-atual-do-sistema)
10. [Manual do Utilizador](#manual-do-utilizador)
11. [Componentes de Segurança](#componentes-de-segurança)

---

## Nome do Projeto: Donative Space
"Donative Space" é uma representação simbólica do espaço virtual que estamos a construir. Este espaço é dedicado à doação e generosidade, onde organizações sem fins lucrativos podem encontrar apoio e visibilidade. É um ambiente digital que pretende conectar doadores, voluntários e organizações em uma comunidade unida pela solidariedade. Através do "Donative Space", estamos a construir um local onde as necessidades urgentes recebem as respostas que merecem.

## Ideia Principal
A essência do nosso projeto consiste na criação de uma plataforma digital dedicada a organizações sem fins lucrativos, cujo propósito fundamental é simplificar a divulgação de eventos beneficentes e das necessidades específicas que enfrentam, abrangendo áreas como voluntariado, doações de alimentos, vestuário, entre outros. Esta inovadora ferramenta busca proporcionar maior visibilidade e acesso para essas organizações, contribuindo para a construção de uma comunidade sólida em torno do voluntariado e apoio social. O objetivo é criar um espaço onde a solidariedade floresça, conectando doadores e voluntários às causas que mais necessitam, ampliando assim o impacto positivo dessas organizações na sociedade.

## Objetivos
### Facilitar a Divulgação de Eventos de Caridade e Necessidades Específicas
O objetivo principal é criar uma plataforma que permita às organizações sem fins lucrativos compartilhar informações sobre eventos de caridade e as necessidades que possuem, como voluntariado e donativos.

### Proporcionar Maior Visibilidade para Organizações sem Fins Lucrativos
A plataforma visa aumentar a visibilidade das atividades e necessidades das organizações, tornando-as mais acessíveis para voluntários e doadores.

### Criar uma Comunidade em Torno do Voluntariado e Apoio Social
A plataforma busca despertar o engajamento e a participação ativa de voluntários, doadores e organizações, promovendo uma cultura de solidariedade e apoio social.

## Público-Alvo
- **Idade:** Jovens adultos e adultos, geralmente entre os 20 e 65 anos. Este grupo tende a ter maior interesse e capacidade para se envolver em atividades voluntárias e doações.
- **Localização Geográfica:** Portugal, com um foco específico nos distritos de Lisboa e Setúbal.
- **Interesses:** Pessoas interessadas em atividades de caridade, voluntariado, causas sociais e contribuições para a comunidade.

## Ferramentas Comparáveis
1. **Voluntariado.pt:**
   - Um portal de voluntariado em Portugal que conecta organizações com voluntários. Eles podem ser considerados como um serviço semelhante no sentido de promover o voluntariado.
2. **Dar e Receber:**
   - Uma plataforma que promove a partilha de bens e serviços entre a comunidade.
3. **Banco Alimentar:**
   - Esta é uma organização sem fins lucrativos, dedicada à recolha e distribuição de alimentos para pessoas em situação de carência.
  
## Implementações

### Notícias:

Implementação de uma seção de notícias para manter os usuários atualizados sobre eventos, realizações e novidades.
Destaque para a simplicidade de criação e gestão de notícias por organizações parceiras.

### Calendário de Campanhas:

Inclusão de um calendário interativo que exibe as datas de todas as campanhas em andamento.
Enfatize como isso proporciona uma visão consolidada dos eventos planejados.

### Formulários de Doação e Voluntariado:

Adição de formulários intuitivos para doações físicas e inscrição voluntária.
Implementação de um calendário específico para campanhas com vagas de voluntariado, simplificando o processo de registo.

### Perfil do Usuário:

Desenvolvimento de um perfil do usuário personalizado.
Seções específicas para visualizar histórico de doações, registos de voluntariado e um calendário personalizado de participação em campanhas.

### Funcionalidades para Organizações:

Capacidade para organizações criarem e gerenciarem suas próprias campanhas e compartilharem notícias relevantes.
Destaque para a autonomia que as organizações têm na contribuição ativa para a plataforma.


## Guiões de Teste Possíveis

**Caso de Uso 1:** Usuário registado fazer uma doação
- Ator Principal: Usuário
  - Ao entrar no website faz o seu login.
  - Clica em doar.
  - Preenche os campos obrigatórios no formulário de doação física, como nome, email, contato seleciona o tipo de doação e para que organização pretende doar, escreve uma breve observação e seleciona o local de recolha.
  - Poderá ir ao seu perfil para ver na tabela que a sua doação já foi registada.

**Caso de Uso 2:** Usuário registado faz o seu registo para voluntariar
- Ator Principal: Usuário
  - Ao entrar no website faz o seu login.
  - Clica em doar.
  - Preenche os campos obrigatórios no formulário de voluntariado, como nome, email, contato e seleciona que campanha quer participar.
  - Poderá ir ao seu perfil para ver na tabela que já fez o seu registo.
  - Pode visualizar na sua tabela quando irá se realizar.

**Caso de Uso 3:** Organização publicar uma campanha
- Ator Principal: Organização
  - Ao entrar no website faz o seu login.
  - Na Navbar clica em criar campanhas.
  - Preenche os campos obrigatórios no formulário, como o titulo, um texto sobre o que será, as necessidades para a campanha o numero de voluntários e a data de início e fim e uma imagem para a campanha.
  - Poderá visualizar que a campanha foi publicada.

## Casos de Uso da Aplicação
**Ator Principal: Doador**

**Caso de Uso 1:** Navegar e Pesquisar Campanhas
Objetivo: Explorar e descobrir campanhas de caridade disponíveis na plataforma.
- O doador entra na página inicial da "Donativo Space".
- O sistema exibe uma seleção de campanhas em andamento e populares.
- O doador pode refinar a pesquisa por categorias específicas de doação, localização ou causa.
- A visualização detalhada da campanha inclui informações sucintas para uma escolha informada.

**Caso de Uso 2:** Visualizar Detalhes da Campanha
Objetivo: Obter informações detalhadas sobre uma campanha específica.
- O doador seleciona uma campanha de interesse.
- O sistema apresenta detalhes como descrição, metas, prazos e necessidades específicas.
- O doador pode escolher entre doar, se voluntariar ou simplesmente seguir a campanha para atualizações.

**Caso de Uso 3:** Realizar uma Doação Física
Objetivo: Contribuir para uma campanha fazendo uma doação física.
- O doador opta por doar fisicamente após selecionar uma campanha.
- Um formulário intuitivo solicita detalhes do donativo, garantindo uma contribuição alinhada com as necessidades.
- A confirmação da doação é seguida pelo acúmulo de pontos, incentivando futuras participações e doações.

**Ator Principal: Organização Sem Fins Lucrativos**

**Caso de Uso 4:** Criar uma Nova Campanha
Objetivo: Publicar e divulgar uma nova campanha na plataforma.
- A organização sem fins lucrativos faz login no painel de administração.
- Seleciona a opção "Criar Nova Campanha" e preenche os detalhes necessários.
- O sistema permite a inclusão de informações visuais atrativas, como flyers ou imagens relacionadas.
- Após a revisão e confirmação, a campanha é publicada para a comunidade.

**Caso de Uso 5:** Gerenciar Doações Recebidas
Objetivo: Acompanhar e gerenciar as doações recebidas para uma campanha específica.
- A organização sem fins lucrativos acessa o painel de administração.
- Navega até a seção "Doações Recebidas", onde uma lista detalhada é apresentada.
- Detalhes de cada doação, incluindo doador e quantidade, são acessíveis para gestão e agradecimentos personalizados.

**Ator Principal: Voluntário**

**Caso de Uso 6:** Encontrar Oportunidades de Voluntariado
Objetivo: Descobrir e explorar oportunidades de voluntariado disponíveis.
- O voluntário acessa a página inicial da "Donativo Space".
- O sistema destaca campanhas que precisam de voluntários, permitindo uma escolha alinhada com interesses e disponibilidade.
- Informações básicas sobre cada oportunidade facilitam a seleção.

**Caso de Uso 7:** Inscrever-se como voluntário
Objetivo: Formalizar a intenção de participar como voluntário em uma campanha específica.
- O voluntário escolhe uma oportunidade de voluntariado.
- Detalhes como datas, requisitos e descrição da atividade são apresentados.
- O voluntário expressa interesse e fornece informações necessárias.
- A confirmação da inscrição é seguida por informações de contato para a organização sem fins lucrativos.

## Diagrama de Classes

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/257629e5-0c89-420c-8751-4d0737490a7c)


1. **Admin, Doador e Organização (Usuários):**
   - Admin, Doador, e Organização são diferentes tipos de usuários que compartilham características comuns, como nome, email, senha, entre outros. 
   - Eles podem autenticar-se no sistema usando suas credenciais.

2. **Campanha:**
   - Uma Campanha é criada por uma Organização.
   - A Campanha pode ser associada a uma Categoria, indicando o tipo geral da campanha (por exemplo, saúde, educação).
   - A Campanha pode ter doações físicas associadas (DonativoFisico) feitas por uma Organização.

3. **Categorias:**
   - Categoria e Subcategoria são usadas para classificar as campanhas.
   - Por exemplo, uma campanha de saúde pode pertencer à categoria "Saúde" e à subcategoria "Vacinação".
   - Isso ajuda na organização e navegação das campanhas.

4. **Doações Físicas:**
   - DonativoFisico representa doações físicas feitas por uma Organização.
   - As doações físicas são associadas a uma Categoria, especificando o tipo de doação.
   - Cada doação física pode ter uma quantidade, data de recolha, e outras informações associadas.

5. **Voluntários:**
   - Voluntario representa usuários que se voluntariam para Campanhas.
   - Um Voluntario pode estar associado a uma Campanha específica e a um Doador.
   - Isso permite que os usuários expressem interesse em ajudar em atividades específicas relacionadas a campanhas.

6. **Noticias:**
   - Noticias são criadas por uma Organização.
   - As notícias podem estar associadas a uma Organização específica.
   - Isso permite que as organizações comuniquem informações relevantes, atualizações ou eventos para os usuários.

7. **Org:**
   - Org (Informações da Organização):
      - Org representa informações básicas sobre uma organização. É utilizado para autenticação da organização no sistema.

## Fluxo Geral:

1. **Autenticação:**
   - Admin, doador, ou Organização autentica-se no sistema usando suas credenciais.

2. **Criação de Campanha:**
   - Uma Organização cria uma Campanha associada a uma Categoria.

3. **Doações Físicas:**
   - A Campanha recebe doações físicas (DonativoFisico) associadas a uma Categoria e Organização.

4. **Voluntariado:**
   - Voluntários se voluntariam para Campanhas.

5. **Noticias:**
   - Organizações podem criar noticias associadas à organização.

## Arquitetura Atual do Sistema:

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/aa03c862-d041-414c-aaad-ac9fe8f1b887)


**Docker Container (App e API):**
   - Contém a aplicação e a API, replicada 3, em um ambiente Dockerizado, fornecendo uma abordagem eficiente e escalável para a execução de serviços.

**Nginx:**
   - Funciona como um balanceador de carga, distribuindo o tráfego de entrada entre as instâncias da aplicação e da API. Isso melhora a disponibilidade e a escalabilidade do sistema.

**Base de Dados PostgreSQL:**

**Master DB:**
   - Contém a cópia principal dos dados.
   - Responsável por operações de leitura e escrita.
   - Atua como o ponto central para as atualizações e modificações nos dados.
   - Garante a consistência e integridade dos dados.

**Slave DB:**
   - Mantém uma cópia sincronizada dos dados da Master DB.
   - Usado para operações de leitura, aliviando a carga na Master DB.
   - Fornece redundância e tolerância a falhas, permitindo que a aplicação continue a operar mesmo se a Master DB falhar.
   - Configuração de replicação contínua para manter os dados atualizados em tempo real.


## Manual do Utilizador: "Donative Space"

Bem-vindo ao Donative Space, a plataforma que conecta doadores, voluntários e organizações sem fins lucrativos. Este manual fornecerá informações detalhadas sobre como utilizar as funcionalidades da aplicação para uma experiência eficaz e significativa.

### Página Inicial
**Explorar Opções**

**Passo 1:** Na página inicial, os usuários podem visualizar campanhas, organizações e notícias.

**Passo 2:** Clique nas opções correspondentes na barra de menu para explorar.


### Registo e Login
**Registo de Usuário:**

**Passo 1:** Acesse a página inicial do Donative Space.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/77ab1916-57e9-4a59-91b5-f2e3c19d5e19)

**Passo 2:** Clique em "Login/Registo" e preencha os campos obrigatórios: nome, email, password e confirmar password.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/285191cc-6d50-4797-817b-1b5b79b9b5ba)

### Login Usuário
**Passo 1:** Na página inicial, clique em "Login".

**Passo 2:** Insira seu nome e senha.

**Passo 3:** Pressione "Sign in" para acessar sua conta.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/9042dbbd-da35-4ac0-a287-7037a326e616)


### Perfil do Usuário
**Visão Geral**

**Passo 1:** Após o login, acesse seu perfil para visualizar dados pessoais.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/a732066a-9f29-4c7c-9dac-b0d69b201c86)

### Calendário de Voluntariado
**Passo 1:** No perfil, consulte o calendário para ver as campanhas nas quais se voluntariou.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/fb949a5d-c6ed-4629-aa49-3bab563310f9)

### Formulário de Donativo
**Passo 1:** No perfil, acesse o formulário de donativo para efetuar um donativo físico.

**Passo 2:** Complete os campos: nome, email, telefone, tipo de doação, selecione a Organização, observações e local de recolha.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/e04bc119-0de6-4ba4-92f8-0ae35195cf95)

### Histórico de Donativos
**Passo 1:** Veja os donativos já realizados.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/7a5bc099-f9c2-4f73-b0ed-eeb5a7114dce)

### Logout
**Passo 1:** Na barra de menu clique no ícone de perfil.

**Passo 2:** Clique em "Logout" quando desejar sair com segurança da sua conta.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/99e1ff58-15a6-4696-8edb-8af6f138ce04)

### Registo de Organização
**Passo 1:** Organizações devem clicar em " Login/Registo" na página inicial, aderir ao link fornecido para o login/registo que tem a mesma estrutura ao formulário de registo do Usuário/Doador.

**Passo 2:** Preencher as informações necessárias, incluindo nome, email e senha.

### Login Organização
**Passo 1:** Na página inicial, clique em "Login".

**Passo 2:** Insira seu nome e senha

**Passo 3:** Pressione "Sign in" para acessar sua conta.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/9e389bd7-8dd3-42d7-8ef7-dc87ae17e32d)

### Perfil da Organização
**Criar Nova Campanha**

**Passo 1:** Após o login, acesse o perfil da organização.

**Passo 2:** Na barra de menu selecione "Criar Nova Campanha" e preencha os detalhes necessários: nome, observação, necessidade, voluntários, data de início, data de término e imagem.

**Passo 3:** Clique no botão criar campanha.

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/e119f38b-6eb6-4e75-9536-ad89d2462bdc)

### Criar Nova Notícia
**Passo 1:** No perfil da organização, clique em "Criar Nova Notícia".

**Passo 2:** Preencha os campos: título, descrição, texto, imagem e data.

**Passo 3:** Clique no botão criar Notícia

![image](https://github.com/IADE-PDS/projeto-grupo5/assets/99679262/fa802a0e-f7cd-47f0-844f-24afd525c070)

### Visualizar Campanhas e Notícias
**Passo 1:** No perfil da organização, veja as campanhas e notícias publicadas, basta selecionar a opção que desejar na barra de menu no perfil.

Agora, você está pronto para utilizar o Donative Space de maneira eficaz. Seja parte da mudança positiva e contribua para causas nobres. Se precisar de ajuda adicional, consulte a seção de ajuda ou entre em contato conosco. Agradecemos por se juntar a nós nesta jornada solidária!

## Componentes de Segurança
**Descrição das Componentes de Segurança Implementadas:**

**Tokens de Autenticação:**
- Implementação de tokens de autenticação para usuários e organizações.
- Garantia de que apenas usuários autenticados e autorizados tenham acesso às funcionalidades específicas.

**Métodos com Verificação de Autenticação:**
- Incorporação de verificações de autenticação em métodos, especialmente aqueles relacionados a postagens e obtenção de dados sensíveis.
- Reforço da segurança para garantir que apenas usuários autorizados executem ações críticas.

**Senhas Criptografadas com Salt:**
- Armazenamento seguro de senhas com criptografia robusta e o uso de salt para aumentar a segurança.
- Garantia de que as senhas não sejam armazenadas em texto simples, protegendo os dados dos usuários.

**Medidas Planeadas para Reforçar a Segurança:**
**Prevenção contra SQL Injection:**
- Implementação de validação de entrada e uso de parâmetros preparados para prevenir ataques de SQL Injection nos formulários de login, registo e em toda a estrutura do site.
- Adoção de boas práticas para sanitização e validação de dados.

**Proteção contra Cross-Site Scripting (XSS):**
- Adoção de práticas para proteger contra ataques XSS em todos os pontos de entrada de dados, incluindo formulários e páginas de exibição.
- Implementação de medidas de filtragem e escape para garantir que scripts maliciosos não sejam executados no navegador do usuário.

**Validação de Entrada:**
- Implemente rigorosa validação de entrada em todos os campos de formulários para garantir que apenas dados válidos sejam aceitos.
- Utilize bibliotecas ou frameworks que ofereçam recursos de validação de entrada para facilitar essa implementação.

**Controle de Acesso Baseado em Funções (RBAC):**
- Reforce o sistema de autenticação com um controle de acesso baseado em funções para garantir que os usuários tenham apenas acesso às funcionalidades apropriadas ao seu papel (usuário, organização, administrador, etc.).

**Limitação de Privilégios:**
- Execute o código com os privilégios mínimos necessários para operar, limitando o impacto de qualquer exploração bem-sucedida.
- Considere a implementação de práticas de "princípio do mínimo privilégio" sempre que possível.

