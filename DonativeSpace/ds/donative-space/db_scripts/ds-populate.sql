-- Popular a tabela admin
INSERT INTO admin (nome, email, senha, admin_token, created_at, updated_at)
VALUES ('João Silva', 'joao.silva@admin.com', 'senha_admin123', 'token_admin_123', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Maria Oliveira', 'maria.oliveira@admin.com', 'senha_admin456', 'token_admin_456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Carlos Santos', 'carlos.santos@admin.com', 'senha_admin789', 'token_admin_789', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Fernanda Costa', 'fernanda.costa@admin.com', 'senha_admin101', 'token_admin_101', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Roberto Pereira', 'roberto.pereira@admin.com', 'senha_admin112', 'token_admin_112', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Popular a tabela doador
INSERT INTO doador (nome, telefone, email_d, senha_d, points, token, created_at, updated_at)
VALUES ('Ana Oliveira', 987654321, 'ana.oliveira@doador.com', 'senha_doador123', 30, 'token_doador_123', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Lucas Santos', 876543210, 'lucas.santos@doador.com', 'senha_doador456', 20, 'token_doador_456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Isabela Silva', 765432109, 'isabela.silva@doador.com', 'senha_doador789', 40, 'token_doador_789', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Ricardo Costa', 654321098, 'ricardo.costa@doador.com', 'senha_doador101', 25, 'token_doador_101', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Patrícia Pereira', 543210987, 'patricia.pereira@doador.com', 'senha_doador112', 35, 'token_doador_112', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Popular a tabela organizacao
INSERT INTO organizacao (org_name, org_telefone, org_email, org_descricao, org_img, created_at, updated_at)
VALUES ('Associação de Apoio Infantil', 112233445, 'apoio.infantil@example.com', 'Apoio a crianças carentes', 'imagem_apoio_infantil.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Instituto de Ajuda Humanitária', 223344556, 'ajuda.humanitaria@example.com', 'Ajuda a comunidades em situação de vulnerabilidade', 'imagem_ajuda_humanitaria.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Casa de Abrigo para Idosos', 334455667, 'abrigo.idosos@example.com', 'Abrigo e cuidados para idosos desamparados', 'imagem_abrigo_idosos.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Centro de Reciclagem Comunitário', 445566778, 'reciclagem.comunitaria@example.com', 'Promoção da reciclagem e sustentabilidade', 'imagem_reciclagem_comunitaria.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Cruz Vermelha', 123456789, 'contato@cruzvermelha.org', 'Organização humanitária internacional que presta assistência em situações de emergência e promove a saúde e bem-estar.', 'cruz_vermelha_logo.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Popular a tabela campanha
INSERT INTO campanha (nome_evento, data_inicio, data_termino, campanha_observacao, campanha_necessidade, campanha_voluntario, campanha_img, org_id)
VALUES ('Campanha de Natal', '2024-11-01', '2024-12-25', 'Arrecadação de brinquedos e alimentos para crianças carentes', 'Brinquedos, alimentos não perecíveis', 15, 'campanha_natal.jpg', 1),
       ('Ajuda Humanitária para Desabrigados', '2024-03-15', '2024-04-15', 'Doações para ajudar vítimas de desastres naturais', 'Roupas, alimentos, produtos de higiene', 10, 'campanha_ajuda_humanitaria.jpg', 2),
       ('Campanha de Inverno para Idosos', '2024-06-01', '2024-08-31', 'Arrecadação de agasalhos para idosos em abrigos', 'Agasalhos, cobertores', 8, 'campanha_inverno_idosos.jpg', 3),
       ('Reciclagem Solidária', '2024-04-01', '2024-05-31', 'Incentivo à reciclagem com troca por alimentos', 'Materiais recicláveis', 5, 'campanha_reciclagem_solidaria.jpg', 4),
       ('Adoção Responsável de Animais', '2024-02-14', '2024-02-21', 'Promoção da adoção de animais de estimação', 'Adoção de animais', 3, 'campanha_adocao_responsavel.jpg', 5);

-- Popular a tabela categoria
INSERT INTO categoria (categoria_name, created_at, updated_at)
VALUES ('Alimentos', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Vestuário', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Higiene Pessoal', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Recicláveis', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Animais', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Popular a tabela subcategoria
INSERT INTO subcategoria (item, descricao, categoria_id, created_at, updated_at)
VALUES ('Cestas Básicas', 'Alimentos não perecíveis para famílias carentes', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Roupas de Inverno', 'Agasalhos para proteger do frio', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Kits de Higiene', 'Produtos essenciais de higiene pessoal', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Papel e Papelão', 'Materiais recicláveis como papel e papelão', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Adoção de Cães e Gatos', 'Animais de estimação para adoção responsável', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Popular a tabela donativofisico
INSERT INTO donativofisico (don_name, don_email, don_telefone, don_observacao, doador_id, categoria_id, org_id, entrega_id)
VALUES ('Doação de Alimentos', 'lucas.santos@doador.com', '876543210', 'Contribuição para a Campanha de Natal', 2, 1, 1, 1),
       ('Roupas de Inverno', 'isabela.silva@doador.com', '765432109', 'Doação de agasalhos para a Campanha de Inverno para Idosos', 3, 3, 3, 2),
       ('Recicláveis para Troca', 'patricia.pereira@doador.com', '543210987', 'Contribuição para a Campanha Reciclagem Solidária', 5, 4, 4, 4),
       ('Cestas Básicas Solidárias', 'joao.silva@doador.com', '123456789', 'Apoio à Campanha de Ajuda Humanitária para Desabrigados', 1, 1, 2, 5),
       ('Adoção de Animais', 'fernanda.costa@doador.com', '654321098', 'Interesse em adotar um animal de estimação', 4, 5, 5, 3);

-- Popular a tabela voluntario
INSERT INTO voluntario (nome, email, campanha_id, doador_id, telefone, created_at, updated_at)
VALUES ('Laura Voluntária', 'laura.voluntaria@example.com', 1, 1, 987654321, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Gustavo Voluntário', 'gustavo.voluntario@example.com', 2, 2, 876543210, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Mariana Voluntária', 'mariana.voluntaria@example.com', 3, 3, 765432109, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Pedro Voluntário', 'pedro.voluntario@example.com', 4, 4, 654321098, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Juliana Voluntária', 'juliana.voluntaria@example.com', 5, 5, 543210987, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Popular a tabela noticias
INSERT INTO noticias (org_id, noticia_title, noticia_descricao, noticia_texto, noticia_img)
VALUES (1, 'Sucesso na Campanha de Natal', 'Comunidade se une para alegrar o Natal de crianças carentes', 'A Campanha de Natal organizada pela Associação de Apoio Infantil foi um sucesso, graças à generosidade da comunidade que proporcionou momentos especiais para as crianças menos favorecidas.', 'noticia_campanha_natal.jpg'),
       (2, 'Ajuda Humanitária em Ação', 'Doações beneficiam desabrigados após desastre natural', 'O Instituto de Ajuda Humanitária está empenhado em fornecer assistência emergencial para comunidades afetadas por desastres naturais. As doações recebidas têm um impacto significativo na vida daqueles que precisam de ajuda.', 'noticia_ajuda_humanitaria.jpg'),
       (3, 'Inverno mais Aconchegante para Idosos', 'Agasalhos aquecem o inverno dos idosos assistidos', 'A Casa de Abrigo para Idosos agradece às doações recebidas durante a Campanha de Inverno, proporcionando conforto e calor aos idosos abrigados.', 'noticia_inverno_idosos.jpg'),
       (4, 'Reciclagem Solidária Transforma Comunidades', 'Troca de recicláveis por alimentos promove sustentabilidade', 'O Centro de Reciclagem Comunitário incentiva a comunidade a reciclar materiais, contribuindo para o meio ambiente. Em troca, alimentos são fornecidos, promovendo a sustentabilidade e a solidariedade.', 'noticia_reciclagem_solidaria.jpg'),
       (5, 'Adoção Responsável de Animais', 'Novos lares para animais abandonados', 'A Associação de Proteção Animal celebra o sucesso da campanha de adoção, garantindo novos lares amorosos para animais abandonados. A conscientização sobre a adoção responsável é fundamental para o bem-estar dos animais.', 'noticia_adocao_responsavel.jpg');

-- Popular a tabela org
INSERT INTO org (organizacao_nome, organizacao_email, organizacao_senha, organizacao_token, created_at, updated_at)
VALUES ('Instituto Cidadão Solidário', 'ics@example.com', 'ics_password', 'ics_token_123', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Fundação Ação Social', 'fas@example.com', 'fas_password', 'fas_token_456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Projeto Vida Nova', 'pvn@example.com', 'pvn_password', 'pvn_token_789', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('Associação Amor e Esperança', 'aae@example.com', 'aae_password', 'aae_token_101', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
       

-- Popular a tabela entrega
INSERT INTO entrega (entrega_id, entrega_name, entrega_loc)
VALUES (1, 'Centro de Distribuição de Alimentos', 'Rua Principal, Centro'),
       (2, 'Posto de Assistência Social', 'Avenida da Solidariedade, Bairro Nobre'),
       (3, 'Abrigo de Idosos Felizes', 'Travessa da Alegria, Subúrbio'),
       (4, 'Ponto de Coleta de Recicláveis', 'Avenida Sustentável, Zona Verde'),
       (5, 'Casa de Adoção de Animais', 'Rua dos Animais, Bairro dos Bichos');
