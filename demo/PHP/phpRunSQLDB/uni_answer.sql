﻿
CREATE TABLE `student` (
  `id` int(11) NOT NULL COMMENT '使用者編號',
  `college_id` int(11) DEFAULT NULL COMMENT '學院編號',
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '姓名',
  `email` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '電子郵件',
  `password` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密碼',
  `role` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '帳號權限',
  `coop` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '個人帳號權限'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `student` (`id`, `college_id`, `name`, `email`, `password`, `role`, `coop`) VALUES
(1, 8, 'nono', 'av@orzlol.comt.tw', NULL, 'Main contact', NULL),
(2, 8, 'momo', 'av.work@ggameplay.com', '123456', 'Advisor', NULL),
(3, 19, 'kwowo', 'k@orzlol.com.tw', '654321', 'Manager', 'Cooperation'),
(4, 22, 'wow2', 'teddycai@easy.com', '043', 'Manager', 'Cooperation'),
(5, 19, 'wow', 'celica495@ggameplay.com', '123456', 'Advisor', NULL),
(6, 80, 'Agent  Test', 'code@ggameplay.com', '123456', 'Manager', 'Cooperation'),
(7, 87, 'wan', 'wystan@poweracademy.cn', '60971', 'Manager', 'Cooperation'),
(8, 88, 'hrn', 'kst@easy.com', '4242043', 'Manager', 'Cooperation'),
(9, 89, 'UKn', 'sece@ukguardianship.co', '123456', 'Manager', 'End'),
(10, 90, 'Vaiu', 'sailissa@163.com', '123456', 'Manager', 'Cooperation'),
(11, 90, 'V', '3558002064@qq.com', '123456', 'Advisor', NULL),
(12, 80, 'Agisor', 'avr@orzlol.com.tw', '123456', 'Advisor', NULL),
(13, 91, 'echo  Jia', 'scols@poweracademy.cn', 'test123', 'Manager', 'Cooperation'),
(14, 92, 'huan', 'clai@orzlol.com.tw', 'ukTw.987', 'Manager', 'Cooperation'),
(15, 93, 'echo66', 'tet@test', '123456', 'Manager', 'Registration Fail'),
(16, 94, 'joy  xu', '430206@qq.com', '123456', 'Manager', 'Cooperation'),
(17, 95, 'eee', '666@mm', 'd8899', 'Manager', NULL),
(18, 96, 'fgd', 'oce@easy.com', 'AEPbravo168', 'Manager', 'Cooperation'),
(19, 97, 'gra', 'lurong@126.com', 'test123', 'Manager', 'Cooperation'),
(20, 98, 'kan9487', '35264@qq.com', '6666', 'Manager', 'Cooperation'),
(21, 99, 'xdorz', 'df@dfdfdf.com', '123456', 'Manager', 'Cooperation'),
(110, 100, 'ggm', 'sd@sdg.dgfhj', '', 'Manager', 'Registration Fail'),
(111, 101, 'dsa', 'add@dsfhgsfh.dtjd', '', 'Manager', 'Registration Fail'),
(112, 102, 'orz', 'test@tst.com', '', 'Manager', 'Cooperation'),
(113, 103, 'mowo', 'jul@sign.com', '123456', 'Manager', 'Cooperation'),
(114, 104, 'Kon', 'kan@orzlol.com.tw', 'd8899', 'Manager', 'Cooperation'),
(115, 105, 'hiang', 'nng@easy.com', '123456', 'Manager', 'Cooperation'),
(116, 106, 'yan', 'SS@SS', '', 'Manager', 'Registration Fail'),
(117, 107, 'ken', 'DD@DD', '', 'Manager', 'Cooperation'),
(118, 108, 'kan', 'WW@WW', '', 'Manager', 'Cooperation'),
(119, 109, 'gwas', 'nst6@ggameplay.com', '123456', 'Manager', 'Cooperation'),
(120, 110, 'ngs', 'inng@easy.com', '', 'Manager', 'Cooperation'),
(122, 111, 'son', 'sihih@easy.com', '123456', 'Manager', 'Cooperation'),
(123, 112, 'gav', 'taes@ggameplay.com', '1234567', 'Manager', 'Cooperation'),
(143, 113, 'joe', 'Jig@easy.com', '123456', 'Advisor', 'Cooperation'),
(144, 114, 'Ionia', 'keneng@easy.com', '123456', 'Manager', 'Cooperation'),
(145, 115, 'lol', 'imktop@ggameplay.com', '', 'Manager', 'Registration Fail'),
(146, 116, 'age', 'simogent@tyeasy.com', '123456', 'Manager', 'Cooperation'),
(147, 117, 'bug', 'simon_agent@tyeasy.com', 's123456789*', 'Manager', 'Cooperation'),
(148, 118, 'news', 'hao41@ggameplay.com', '123456', 'Manager', 'Cooperation'),
(149, 119, 'hao', 'ha741@tyeasy.com.tw', '', 'Manager', NULL),
(150, 120, 'grey', '41010@gms.ndhu.edu.tw', '123456', 'Manager', 'Cooperation'),
(152, 104, 'celi', 'zxdv@ggameplay.com', '123456', 'Customer Service', NULL),
(196, 112, 'simon', 'gain@easy.com', '123456', 'Advisor', NULL),
(198, 104, 'kan', 'zxcv@tyeasy.com.tw', '123456', 'Main contact', 'Cooperation'),
(221, 116, 'test', 'ss@gm.com', NULL, 'Officer', 'Cooperation'),
(222, 104, 'Lei', '666@T', NULL, 'Officer', 'Cooperation'),
(223, 104, 'Let', 'see@2', NULL, 'Officer', 'Cooperation'),
(224, 104, 'Leh', 's356@gre', NULL, 'Advisor', 'Cooperation');

CREATE TABLE `college` (
  `id` int(11) NOT NULL COMMENT '表編號 ',
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名稱 ',
  `email` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '電子郵件 ',
  `manager` int(11) DEFAULT NULL COMMENT '管理編號',
  `coop_group` enum('Cooperation','Registration Fail','End','Blacklist') COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '群組權限'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `college` (`id`, `name`, `email`, `manager`, `coop_group`) VALUES
(19, 'KKinc. Ltd.', 'kn@orzlol.com.tw', 58, 'Cooperation'),
(21, 'SSEE', 'shly@orzlol.com.tw', 61, NULL),
(22, 'orzlol', 'tei@easy.com', 62, 'Cooperation'),
(80, 'any', '10@163.com', 145, 'Cooperation'),
(86, 'cee', 'cee@tea', 154, NULL),
(87, 'wangwei', 'wyn@powemy.cn', 155, 'Cooperation'),
(88, 'KwO', 'karst@easy.com', 156, 'Cooperation'),
(89, 'Uianship', 'qqtly@ggameplay.co', 157, 'End'),
(90, '123', 'saissa@163.com', 158, 'Cooperation'),
(91, 'GTD', 'scls@powmy.cn', 161, 'Cooperation'),
(92, 'orzlolgc.', 'clre@orzlol.com.tw', 162, 'Cooperation'),
(93, 'test', 'test@test', 163, 'Registration Fail'),
(94, 'Chenc.', '4306@q55q.com', 164, 'Cooperation'),
(95, '66666', 'kan@orzlol.com.tw', 165, NULL),
(96, 'easy Demo', 'ofe@easy.com', 166, 'Cooperation'),
(97, 'Preped', 'lurng@126.com', 167, 'Cooperation'),
(98, 'xdf', '35564@qq.com', 168, 'Cooperation'),
(99, 'Aly', 'avery@orzlol.com.tw', 169, 'Cooperation'),
(100, 'sdfgfsg', 'sfg@sdghs.dh', 170, 'Registration Fail'),
(101, 'dsafasfd', 'aiang@easy.com', 171, 'Registration Fail'),
(102, 'test', 'test@test.com', 172, 'Cooperation'),
(103, 'M3', 'M3@mm', 173, 'Cooperation'),
(104, 'Kan', 'kan@orzlol.com.tw', 174, 'Cooperation'),
(105, 'shianhool', 'Nang@easy.com', 175, 'Cooperation'),
(106, 'Kan', 'SS@owo', 176, 'Registration Fail'),
(107, 'Kan', 'GG@owo', 177, 'Cooperation'),
(108, 'Kan', 'DD@owo', 178, 'Cooperation'),
(109, 'Hizardry', 'nstan16@ggameplay.com', 179, 'Cooperation'),
(110, 'Ninool', 'inang@easy.com', 180, 'Cooperation'),
(111, 'simon', 'simhih@easy.com', 181, 'Cooperation'),
(112, 'come', 'taihennes@ggameplay.com', 182, 'Cooperation'),
(113, 'Jiewowow', 'Jng@easy.com', 183, 'Cooperation'),
(114, 'Ionen', 'kenng@easy.com', 184, 'Cooperation'),
(115, 'LOL', 'imkingtop@ggameplay.com', 185, 'Registration Fail'),
(116, 'simoddngent', 'simoent@yao.com', 186, 'Cooperation'),
(117, 's75', 'simoent@tyeasy.com', 187, 'Cooperation'),
(118, 'news', 'ha1@ggameplay.com', NULL, 'Cooperation'),
(119, 'a2741', 'hao12741@tyeasy.com.tw', 189, NULL),
(120, 'dfdfy', '410@gu.edu.tw', 190, 'Cooperation');

ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `college_id` (`college_id`);

ALTER TABLE `college`
  ADD PRIMARY KEY (`id`),
  ADD KEY `manager` (`manager`);

