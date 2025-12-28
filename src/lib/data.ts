// Données du site de révision Réseau et Sécurité

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  pdfPath: string;
  topics: string[];
  summary: string[];
  keyTerms: { term: string; definition: string }[];
}

export interface Question {
  id: string;
  chapterId: string;
  examYear: string;
  question: string;
  answer: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  tags: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms: string[];
  chapter: string;
}

export const chapters: Chapter[] = [
  {
    id: 'chap1',
    number: 1,
    title: 'Introduction à la sécurité',
    description: 'Contexte réseau, modèle OSI, types d\'attaques et services de sécurité',
    pdfPath: '/resources/Cours/chap1-fr.pdf',
    topics: ['Modèle OSI', 'Internet', 'Types d\'attaques', 'Services de sécurité'],
    summary: [
      'Le modèle OSI comprend 7 couches : application, présentation, session, transport, réseau, liaison de données et physique',
      'Les caractéristiques principales sont la transparence entre couches et l\'encapsulation',
      'Internet est un réseau ouvert basé sur IP fonctionnant en best-effort',
      'La sécurité est un compromis entre les risques et le coût (financier et performance)',
      'Types d\'attaques : interruption (disponibilité), interception (confidentialité), modification (intégrité), fabrication (authenticité)',
      'Moyens d\'attaques passifs : obtention de messages, analyse du trafic',
      'Moyens d\'attaques actifs : mascarade, rejeu, modification, déni de service',
      'Services de sécurité : confidentialité, intégrité, identification, authentification, non-répudiation, contrôle d\'accès, disponibilité'
    ],
    keyTerms: [
      { term: 'OSI', definition: 'Open Systems Interconnection - modèle de référence à 7 couches' },
      { term: 'Encapsulation', definition: 'Technique d\'ajout d\'en-têtes à chaque couche' },
      { term: 'Best-effort', definition: 'Mode de fonctionnement d\'IP sans garantie de livraison' }
    ]
  },
  {
    id: 'chap2',
    number: 2,
    title: 'Attaques',
    description: 'Failles d\'Internet et classification des attaques',
    pdfPath: '/resources/Cours/chap2-fr.pdf',
    topics: ['Failles technologiques', 'Failles logicielles', 'Failles de configuration', 'Failles de politique'],
    summary: [
      'Failles technologiques ou matérielles : vulnérabilités intrinsèques au matériel',
      'Failles logicielles : bugs, buffer overflows, injections',
      'Failles de configuration : mauvais paramétrage des systèmes',
      'Failles de politique : règles de sécurité inadéquates ou non appliquées'
    ],
    keyTerms: [
      { term: 'Buffer overflow', definition: 'Dépassement de mémoire tampon permettant l\'exécution de code malveillant' },
      { term: 'Injection SQL', definition: 'Attaque exploitant les entrées utilisateur pour exécuter du SQL malveillant' }
    ]
  },
  {
    id: 'chap3',
    number: 3,
    title: 'Sécurité des échanges',
    description: 'Cryptographie symétrique, asymétrique et infrastructures à clés publiques',
    pdfPath: '/resources/Cours/chap3-fr.pdf',
    topics: ['Cryptographie symétrique', 'Cryptographie asymétrique', 'PKI', 'Standards de sécurité'],
    summary: [
      'Chiffrement : méthode pour rendre un message inintelligible par un tiers',
      'Cryptologie = Cryptographie (étude des algorithmes) + Cryptanalyse (déchiffrement sans clé)',
      'La cryptographie apporte : confidentialité, intégrité, authentification et non-répudiation',
      'Cryptographie symétrique : même clé pour chiffrer et déchiffrer (DES, AES)',
      'Cryptographie asymétrique : clé publique (chiffrement) et clé privée (déchiffrement) - RSA',
      'PKI (Public Key Infrastructure) : infrastructure de gestion des certificats numériques'
    ],
    keyTerms: [
      { term: 'Chiffrement symétrique', definition: 'Utilise la même clé pour chiffrer et déchiffrer' },
      { term: 'Chiffrement asymétrique', definition: 'Utilise une paire de clés (publique/privée)' },
      { term: 'PKI', definition: 'Infrastructure à clés publiques pour la gestion des certificats' },
      { term: 'Certificat', definition: 'Document électronique liant une clé publique à une identité' }
    ]
  },
  {
    id: 'chap4',
    number: 4,
    title: 'Architecture réseau',
    description: 'Pare-feu, NAT, DMZ, IDS, VPN et contrôle d\'accès',
    pdfPath: '/resources/Cours/chap4-fr.pdf',
    topics: ['Pare-feu', 'NAT/PAT', 'DMZ', 'IDS/NIDS/HIDS', 'VPN', 'RADIUS', 'PAP/CHAP', 'L2TP', 'PPTP', 'GRE'],
    summary: [
      'NAT (Network Address Translation) : translation d\'adresses pour gérer le nombre limité d\'adresses IP',
      'DMZ (DeMilitarized Zone) : segment réseau isolé pour les services exposés',
      'IDS (Intrusion Detection System) : composant passif pour détecter les intrusions',
      'NIDS surveille le trafic réseau, HIDS surveille les logs et fichiers système',
      'Méthodes de détection : signatures, anomalies, tests d\'intégrité',
      'AAA : Authentication, Authorization, Accounting',
      'RADIUS : protocole d\'authentification centralisée (UDP port 1812)',
      'VPN (Virtual Private Network) : interconnexion sécurisée via un réseau existant',
      'PPTP, L2TP, GRE : protocoles de tunneling pour VPN',
      'PAP : envoi login/password en clair, CHAP : challenge-response avec hash'
    ],
    keyTerms: [
      { term: 'NAT', definition: 'Network Address Translation - translation d\'adresses IP' },
      { term: 'DMZ', definition: 'Zone démilitarisée - segment réseau isolé' },
      { term: 'IDS', definition: 'Intrusion Detection System - détection d\'intrusions' },
      { term: 'RADIUS', definition: 'Remote Authentication Dial-In User Service' },
      { term: 'VPN', definition: 'Virtual Private Network - réseau privé virtuel' },
      { term: 'PPTP', definition: 'Point-to-Point Tunneling Protocol' },
      { term: 'L2TP', definition: 'Layer 2 Tunneling Protocol' },
      { term: 'GRE', definition: 'Generic Routing Encapsulation' }
    ]
  },
  {
    id: 'chap5',
    number: 5,
    title: 'Sécurité de la couche réseau - IPSec',
    description: 'ISAKMP, IKE, SA, AH, ESP et modes d\'IPSec',
    pdfPath: '/resources/Cours/chap5-fr.pdf',
    topics: ['IPSec', 'ISAKMP', 'IKE', 'SA', 'OAKLEY', 'AH', 'ESP', 'Mode transport', 'Mode tunnel'],
    summary: [
      'IPSec : sécurité IP, initialement pour IPv6, maintenant aussi pour IPv4',
      'Fournit authentification, intégrité et chiffrement',
      'Architectures : routeur/routeur (VPN), hôte/hôte, hôte/routeur',
      'ISAKMP : cadre générique pour la gestion des clés et paramètres de sécurité',
      'IKE : protocole pour installer des SA (UDP port 500)',
      'SA (Security Association) : gère les paramètres cryptographiques',
      'Perfect Forward Secrecy (PFS) : clés passées non déductibles si secret découvert',
      'AH (Authentication Header) : authentification, intégrité du paquet complet, anti-rejeu',
      'ESP (Encapsulating Security Payload) : confidentialité + authentification + intégrité + anti-rejeu',
      'Mode transport : sécurisation bout-en-bout, adresses visibles',
      'Mode tunnel : encapsulation complète, données chiffrées'
    ],
    keyTerms: [
      { term: 'IPSec', definition: 'IP Security - protocole de sécurisation au niveau réseau' },
      { term: 'ISAKMP', definition: 'Internet Security Association and Key Management Protocol' },
      { term: 'IKE', definition: 'Internet Key Exchange - négociation des clés' },
      { term: 'SA', definition: 'Security Association - paramètres de sécurité' },
      { term: 'AH', definition: 'Authentication Header - intégrité et authentification' },
      { term: 'ESP', definition: 'Encapsulating Security Payload - chiffrement et intégrité' },
      { term: 'PFS', definition: 'Perfect Forward Secrecy' }
    ]
  },
  {
    id: 'chap6',
    number: 6,
    title: 'Sécurité des couches hautes - TLS et SET',
    description: 'TLS/SSL pour la sécurité web et SET pour le paiement électronique',
    pdfPath: '/resources/Cours/chap6-fr.pdf',
    topics: ['SSL', 'TLS', 'Handshake', 'SET', 'Signature duale'],
    summary: [
      'SSL (Secure Socket Layer) défini par Netscape, normalisé en TLS',
      'TLS se situe entre TCP et l\'application (HTTP, FTP, SMTP, etc.)',
      'Services TLS : authentification serveur, confidentialité, intégrité, non-rejeu',
      'Sous-protocoles SSL : handshake, change cipher, alert, record',
      'Mécanisme : Hello client → Hello serveur + certificat → vérification → échange clé symétrique',
      'SSL vs IPSec : SSL ne modifie pas TCP/IP, supporte NAT, traverse les firewalls',
      'SSH : Secure Shell (port 22), pas d\'authentification par certificat',
      'SET (Secure Electronic Transaction) : protocole de paiement bancaire (Visa/Mastercard)',
      'Signature duale : permet d\'envoyer des parties différentes à des destinataires différents',
      'SET : authentification, confidentialité des instructions de paiement, intégrité, non-répudiation'
    ],
    keyTerms: [
      { term: 'SSL', definition: 'Secure Socket Layer - protocole de sécurité' },
      { term: 'TLS', definition: 'Transport Layer Security - évolution de SSL' },
      { term: 'SET', definition: 'Secure Electronic Transaction' },
      { term: 'Handshake', definition: 'Négociation des paramètres de connexion sécurisée' },
      { term: 'HMAC', definition: 'Hash-based Message Authentication Code' }
    ]
  },
  {
    id: 'chap7',
    number: 7,
    title: 'Outils et études de cas',
    description: 'Attaques d\'Internet, nmap et injections',
    pdfPath: '/resources/Cours/chap7-fr.pdf',
    topics: ['Attaques Internet', 'nmap', 'Injections SQL'],
    summary: [
      'Outils d\'analyse réseau : nmap pour le scan de ports',
      'Injections SQL : exploitation des entrées utilisateur',
      'Injections HTML/XSS : injection de code côté client'
    ],
    keyTerms: [
      { term: 'nmap', definition: 'Outil de scan de ports et découverte réseau' },
      { term: 'XSS', definition: 'Cross-Site Scripting - injection de scripts' }
    ]
  }
];

export const questions: Question[] = [
  // Exam 2018-2019
  {
    id: 'q1',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Comment fonctionne la méthode du mot probable pour cryptanalyser le chiffrement de Vigenère ?',
    answer: 'La méthode du mot probable consiste à deviner un mot qui apparaît probablement dans le texte clair (comme "le", "de", "que" en français). On fait glisser ce mot le long du texte chiffré et on calcule la clé potentielle. Si la clé obtenue produit des caractères cohérents quand on l\'applique à d\'autres parties du texte, on a probablement trouvé une partie de la clé.',
    difficulty: 'moyen',
    tags: ['Vigenère', 'cryptanalyse', 'mot probable']
  },
  {
    id: 'q2',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Que se passe-t-il si le mot probable a une longueur de k+1, avec k la longueur de la clé ? Quelle est la bonne taille du mot probable ?',
    answer: 'Si le mot probable a une longueur k+1 (k = longueur de la clé), on obtient k+1 caractères de la clé, mais comme la clé n\'a que k caractères, on obtient un caractère qui "déborde" sur le prochain cycle. Cela peut aider à vérifier la cohérence. La bonne taille est égale à la longueur de la clé k, car cela permet d\'obtenir exactement toute la clé.',
    difficulty: 'difficile',
    tags: ['Vigenère', 'cryptanalyse']
  },
  {
    id: 'q3',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Comment produit-on la signature S d\'un message M ?',
    answer: 'Pour produire la signature S d\'un message M : 1) On calcule le hash H(M) du message. 2) On chiffre ce hash avec la clé privée de l\'émetteur : S = chiffr(H(M), clé_privée). La signature S est envoyée avec le message M.',
    difficulty: 'facile',
    tags: ['signature', 'hachage', 'clé privée']
  },
  {
    id: 'q4',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Comment vérifie-t-on la signature S d\'un message M ?',
    answer: 'Pour vérifier la signature S : 1) On déchiffre S avec la clé publique de l\'émetteur : H\'(M) = déchiffr(S, clé_publique). 2) On calcule indépendamment H(M). 3) On compare H\'(M) et H(M). Si égaux, la signature est valide.',
    difficulty: 'facile',
    tags: ['signature', 'vérification', 'clé publique']
  },
  {
    id: 'q5',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Supposons qu\'il est possible de créer une collision d\'une fonction de hachage sur un message M. Quel est l\'impact sur le mécanisme de signature ?',
    answer: 'Si on peut trouver M\' tel que H(M\') = H(M), alors la signature S de M est aussi une signature valide pour M\'. Un attaquant peut faire signer un message inoffensif M, puis utiliser cette signature pour authentifier un message malveillant M\' ayant le même hash. C\'est pourquoi les fonctions de hachage cryptographiques doivent être résistantes aux collisions.',
    difficulty: 'difficile',
    tags: ['collision', 'hachage', 'signature']
  },
  {
    id: 'q6',
    chapterId: 'chap4',
    examYear: '2018-2019',
    question: 'Quel est le principal service de sécurité fourni par WEP ?',
    answer: 'Le principal service de sécurité fourni par WEP est la confidentialité des données transmises sur le réseau sans fil, via le chiffrement par flux RC4.',
    difficulty: 'facile',
    tags: ['WEP', 'confidentialité', 'sans-fil']
  },
  {
    id: 'q7',
    chapterId: 'chap4',
    examYear: '2018-2019',
    question: 'Dans WEP, à quoi sert IV (Initialization Vector) ?',
    answer: 'L\'IV (Initialization Vector) dans WEP sert à garantir que la même clé de session K ne sera pas réutilisée. En combinant IV avec la clé primaire Rk via RC4, on obtient une clé K différente pour chaque trame. Cela empêche les attaques par analyse de patterns identiques.',
    difficulty: 'moyen',
    tags: ['WEP', 'IV', 'RC4']
  },
  {
    id: 'q8',
    chapterId: 'chap4',
    examYear: '2018-2019',
    question: 'Dans WEP, à quoi sert ICV (Integrity Check Value) ?',
    answer: 'L\'ICV (Integrity Check Value) est une somme de contrôle CRC32 de 32 bits calculée sur le message M. Elle permet de vérifier l\'intégrité du message : si le message a été modifié pendant la transmission, l\'ICV recalculé ne correspondra pas.',
    difficulty: 'moyen',
    tags: ['WEP', 'ICV', 'intégrité', 'CRC32']
  },
  // Exam 2019-2020
  {
    id: 'q9',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'Comment déterminer la taille de la clé d\'un chiffrement de Vigenère par analyse de fréquence ?',
    answer: 'On utilise l\'indice de coïncidence ou la méthode de Kasiski : 1) Méthode de Kasiski : on cherche des séquences répétées dans le texte chiffré et on calcule le PGCD des distances entre ces répétitions. 2) Indice de coïncidence : on découpe le texte en n colonnes (pour n = taille supposée de la clé) et on calcule l\'IC de chaque colonne. Si la taille est correcte, l\'IC sera proche de celui d\'une langue naturelle (~0.074 pour le français).',
    difficulty: 'difficile',
    tags: ['Vigenère', 'Kasiski', 'indice de coïncidence']
  },
  {
    id: 'q10',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'Supposons que l\'attaquant connaisse la signature de deux messages m1 et m2 avec RSA-sans-hachage. Montrez qu\'il peut produire la signature du message m1.m2.',
    answer: 'Avec RSA-sans-hachage, la signature de m est s = m^d [n]. Si on connaît s1 = m1^d [n] et s2 = m2^d [n], alors : s1 × s2 = m1^d × m2^d [n] = (m1 × m2)^d [n]. Donc s1 × s2 est la signature valide de m1 × m2. C\'est une attaque par homomorphisme.',
    difficulty: 'difficile',
    tags: ['RSA', 'signature', 'attaque']
  },
  {
    id: 'q11',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'En quoi l\'ajout de la fonction de hachage empêche l\'attaque sur RSA-sans-hachage ?',
    answer: 'Avec le hachage, la signature devient s = H(m)^d [n]. Pour obtenir la signature de m3, l\'attaquant devrait trouver m1 et m2 tels que H(m1) × H(m2) = H(m3) [n]. Comme la fonction de hachage est non-linéaire et résistante aux collisions, il est pratiquement impossible de trouver de tels m1 et m2.',
    difficulty: 'moyen',
    tags: ['RSA', 'hachage', 'sécurité']
  },
  {
    id: 'q12',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'Montrez que si deux messages sont signés avec la même valeur aléatoire k dans El Gamal, on peut en déduire la clé privée a.',
    answer: 'Pour deux signatures avec le même k : s1 = k⁻¹(h(m1) - a.r) [p-1] et s2 = k⁻¹(h(m2) - a.r) [p-1]. En soustrayant : s1 - s2 = k⁻¹(h(m1) - h(m2)) [p-1]. Donc k = (h(m1) - h(m2)) / (s1 - s2) [p-1]. Une fois k connu, on peut calculer a = (h(m1) - k.s1) / r [p-1]. C\'est pourquoi k doit être aléatoire et unique pour chaque signature.',
    difficulty: 'difficile',
    tags: ['El Gamal', 'signature', 'clé privée']
  },
  // Exam 2020-2021
  {
    id: 'q13',
    chapterId: 'chap3',
    examYear: '2020-2021',
    question: 'Quelle est la taille d\'une clé 3-DES (version non optimisée) ? Quelle est la complexité pour casser 3-DES en force brute ?',
    answer: '3-DES utilise 3 clés DES indépendantes. Chaque clé DES fait 56 bits (64 bits avec 8 bits de parité). Donc la clé 3-DES fait 3 × 56 = 168 bits. La complexité en force brute est O(2^168).',
    difficulty: 'facile',
    tags: ['3-DES', 'taille de clé', 'force brute']
  },
  {
    id: 'q14',
    chapterId: 'chap3',
    examYear: '2020-2021',
    question: 'Quelle est la complexité pour casser 3-DES avec la technique meet-in-the-middle ?',
    answer: 'Meet-in-the-middle : on chiffre avec k1 depuis le texte clair et on déchiffre avec k3 depuis le texte chiffré. On cherche une correspondance au milieu. Cela réduit la complexité à O(2^112) au lieu de O(2^168), car on doit tester 2^56 pour k1, stocker les résultats, puis tester 2^56 pour k3. Pour k2, on fait pareil, d\'où 2^56 × 2^56 = 2^112.',
    difficulty: 'difficile',
    tags: ['3-DES', 'meet-in-the-middle', 'cryptanalyse']
  },
  {
    id: 'q15',
    chapterId: 'chap3',
    examYear: '2020-2021',
    question: 'Pour 3-DES, montrez que si k1=k2 (ou k2=k3), alors l\'algorithme se casse facilement.',
    answer: 'Si k1 = k2 : f(f(f(M, k1), k1), k3) = f(f(f(M, k1), k1), k3). Or f(f(M, k1), k1) = M (le déchiffrement annule le chiffrement avec la même clé). Donc 3-DES se réduit à f(M, k3), soit un simple DES, cassable en O(2^56).',
    difficulty: 'moyen',
    tags: ['3-DES', 'faiblesse', 'clés identiques']
  },
  {
    id: 'q16',
    chapterId: 'chap4',
    examYear: '2020-2021',
    question: 'Sur Internet, qui peut techniquement surveiller le trafic d\'un utilisateur donné ?',
    answer: 'Peuvent surveiller le trafic : 1) Le FAI (Fournisseur d\'Accès Internet), 2) Les routeurs sur le chemin, 3) L\'administrateur du réseau local, 4) Les points d\'échange Internet (IXP), 5) Les agences gouvernementales avec accès aux infrastructures, 6) Tout attaquant ayant compromis un point du réseau.',
    difficulty: 'facile',
    tags: ['surveillance', 'vie privée', 'TOR']
  },
  {
    id: 'q17',
    chapterId: 'chap4',
    examYear: '2020-2021',
    question: 'Décrivez la procédure de chiffrement/déchiffrement appliquée par la source dans TOR.',
    answer: 'Chiffrement en oignon par la source s pour envoyer à d via (r1, r2, ..., rn=d) : 1) s chiffre le message avec la clé publique de d (ou clé symétrique négociée), 2) Puis chiffre le résultat avec la clé de rn-1, 3) Continue couche par couche jusqu\'à r1. À chaque routeur ri, celui-ci déchiffre sa couche avec sa clé privée, révélant l\'adresse du prochain routeur ri+1. Seul d peut lire le message final.',
    difficulty: 'difficile',
    tags: ['TOR', 'chiffrement en oignon', 'anonymat']
  },
  {
    id: 'q18',
    chapterId: 'chap4',
    examYear: '2020-2021',
    question: 'Qu\'est-ce qu\'un nœud gardien dans TOR ? Pourquoi cette contrainte ?',
    answer: 'Un nœud gardien (guard node) est un routeur TOR de confiance, stable et vérifié. Le premier routeur du chemin voit l\'adresse IP réelle du client. En utilisant toujours le même nœud gardien (choisi aléatoirement mais fixe pendant ~2-3 mois), on limite le risque qu\'un nœud malveillant apprenne l\'IP du client. Sans cette contrainte, un attaquant pourrait multiplier les tentatives jusqu\'à être sélectionné comme premier routeur.',
    difficulty: 'moyen',
    tags: ['TOR', 'guard node', 'anonymat']
  },
  {
    id: 'q19',
    chapterId: 'chap3',
    examYear: '2020-2021',
    question: 'Expliquez le principe de la cryptanalyse différentielle sur une S-box.',
    answer: 'La cryptanalyse différentielle étudie comment une différence dans l\'entrée affecte la différence en sortie d\'une S-box. On génère des paires (I1, I2) avec une différence d\'entrée connue ΔI = I1 ⊕ I2 et on observe la différence de sortie ΔO = O1 ⊕ O2. Certaines combinaisons (ΔI, ΔO) sont plus probables. En accumulant des statistiques, on peut déduire des informations sur la clé.',
    difficulty: 'difficile',
    tags: ['cryptanalyse différentielle', 'S-box', 'DES']
  },
  {
    id: 'q20',
    chapterId: 'chap5',
    examYear: 'général',
    question: 'Quelle est la différence entre le mode transport et le mode tunnel d\'IPSec ?',
    answer: 'Mode transport : sécurise uniquement la charge utile du paquet IP, les adresses source/destination restent visibles. Utilisé pour communications hôte-à-hôte. Mode tunnel : encapsule et sécurise le paquet IP complet dans un nouveau paquet IP. Les adresses originales sont masquées. Utilisé pour VPN routeur-à-routeur.',
    difficulty: 'moyen',
    tags: ['IPSec', 'mode transport', 'mode tunnel']
  },
  {
    id: 'q21',
    chapterId: 'chap5',
    examYear: 'général',
    question: 'Quelle est la différence entre AH et ESP dans IPSec ?',
    answer: 'AH (Authentication Header) : fournit authentification et intégrité du paquet COMPLET (y compris l\'en-tête IP sauf champs variables), plus anti-rejeu. Ne fournit PAS de confidentialité. ESP (Encapsulating Security Payload) : fournit confidentialité (chiffrement), authentification, intégrité et anti-rejeu, mais seulement sur la charge utile (pas l\'en-tête IP externe). AH est incompatible avec NAT car il protège les adresses IP.',
    difficulty: 'moyen',
    tags: ['IPSec', 'AH', 'ESP']
  },
  {
    id: 'q22',
    chapterId: 'chap6',
    examYear: 'général',
    question: 'Décrivez le mécanisme de handshake TLS.',
    answer: '1) Client Hello : le client envoie les algorithmes de chiffrement supportés et un nombre aléatoire. 2) Server Hello : le serveur choisit les algorithmes, envoie son certificat et sa clé publique. 3) Le client vérifie le certificat auprès de la CA. 4) Le client génère une clé de session symétrique (pre-master secret), la chiffre avec la clé publique du serveur et l\'envoie. 5) Le serveur déchiffre avec sa clé privée. 6) Les deux parties dérivent les clés de session et communiquent de manière chiffrée.',
    difficulty: 'moyen',
    tags: ['TLS', 'SSL', 'handshake']
  },
  {
    id: 'q23',
    chapterId: 'chap6',
    examYear: 'général',
    question: 'Expliquez le principe de la signature duale dans SET.',
    answer: 'La signature duale permet à Alice d\'envoyer deux messages M1 et M2 à deux destinataires différents (Bob et Carole) de sorte que : Bob ne peut voir que M1, Carole ne peut voir que M2, mais chacun peut vérifier que sa partie n\'a pas été modifiée. Alice calcule S = signature(H(H(M1)||H(M2))). Elle envoie à Bob : M1 + H(M2) + S, et à Carole : M2 + H(M1) + S. Chacun peut recalculer le hash global et vérifier S.',
    difficulty: 'difficile',
    tags: ['SET', 'signature duale', 'paiement']
  },
  {
    id: 'q24',
    chapterId: 'chap4',
    examYear: 'général',
    question: 'Quelles sont les différences entre PAP et CHAP ?',
    answer: 'PAP (Password Authentication Protocol) : envoie le login et mot de passe en CLAIR sur le réseau. Simple mais non sécurisé. CHAP (Challenge Handshake Authentication Protocol) : utilise un mécanisme challenge-response. Le serveur envoie un nombre aléatoire N, le client répond avec hash(N, secret_partagé). Le mot de passe n\'est jamais transmis. Plus sécurisé, résiste aux attaques par rejeu.',
    difficulty: 'facile',
    tags: ['PAP', 'CHAP', 'authentification']
  },
  {
    id: 'q25',
    chapterId: 'chap4',
    examYear: 'général',
    question: 'Quels sont les avantages et inconvénients de RADIUS ?',
    answer: 'Avantages : authentification centralisée, base unique d\'utilisateurs, support de nombreux protocoles (PPP, WiFi, etc.), comptabilisation pour facturation. Inconvénients : protocole UDP (pas fiable), pas de sécurisation au niveau transport (besoin VPN), pas d\'authentification du serveur RADIUS.',
    difficulty: 'moyen',
    tags: ['RADIUS', 'AAA', 'authentification']
  },
  // Nouvelles questions - Exam 2018-2019
  {
    id: 'q26',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Expliquez le principe de la factorisation dans RSA. Pourquoi est-ce la base de la sécurité de RSA ?',
    answer: 'RSA repose sur la difficulté de factoriser un grand nombre n = p × q (produit de deux nombres premiers). Connaître n ne permet pas de retrouver p et q efficacement. La clé privée d dépend de φ(n) = (p-1)(q-1), donc sans factoriser n, on ne peut pas calculer d. C\'est un problème NP pour les grands nombres.',
    difficulty: 'moyen',
    tags: ['RSA', 'factorisation', 'sécurité']
  },
  {
    id: 'q27',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Comment calcule-t-on les clés publique et privée dans RSA ?',
    answer: '1) Choisir deux grands nombres premiers p et q. 2) Calculer n = p × q. 3) Calculer φ(n) = (p-1)(q-1). 4) Choisir e tel que 1 < e < φ(n) et pgcd(e, φ(n)) = 1. 5) Calculer d = e⁻¹ mod φ(n) (inverse modulaire). Clé publique = (n, e), Clé privée = (n, d).',
    difficulty: 'moyen',
    tags: ['RSA', 'clés', 'génération']
  },
  {
    id: 'q28',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'Expliquez l\'échange de clés Diffie-Hellman. Quels sont ses avantages et faiblesses ?',
    answer: 'Alice et Bob choisissent p (premier) et g (générateur). Alice génère a, calcule A = g^a mod p. Bob génère b, calcule B = g^b mod p. Ils échangent A et B. Le secret partagé est K = B^a = A^b = g^(ab) mod p. Avantage : échange sécurisé sans partager de secret initial. Faiblesse : vulnérable à l\'attaque man-in-the-middle sans authentification.',
    difficulty: 'moyen',
    tags: ['Diffie-Hellman', 'échange de clés', 'cryptographie']
  },
  {
    id: 'q29',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'Qu\'est-ce que le problème du logarithme discret et pourquoi est-il important pour Diffie-Hellman ?',
    answer: 'Le problème du logarithme discret consiste à trouver x tel que g^x = A mod p, connaissant g, A et p. C\'est calculatoirement difficile pour de grands nombres. Diffie-Hellman repose sur cette difficulté : un attaquant voit g, p, A et B mais ne peut pas calculer a ou b pour obtenir le secret K = g^(ab).',
    difficulty: 'difficile',
    tags: ['logarithme discret', 'Diffie-Hellman', 'sécurité']
  },
  {
    id: 'q30',
    chapterId: 'chap5',
    examYear: '2020-2021',
    question: 'Décrivez les deux phases d\'IKE (Internet Key Exchange).',
    answer: 'Phase 1 : Établit un canal sécurisé (ISAKMP SA) entre les deux parties. Négociation des algorithmes, authentification mutuelle, échange Diffie-Hellman pour créer une clé de session. Deux modes : Main mode (6 messages, plus sécurisé) ou Aggressive mode (3 messages, plus rapide). Phase 2 (Quick Mode) : Utilise le canal de Phase 1 pour négocier les SA IPSec (AH/ESP) et les clés de session pour le trafic réel.',
    difficulty: 'difficile',
    tags: ['IKE', 'IPSec', 'négociation']
  },
  {
    id: 'q31',
    chapterId: 'chap5',
    examYear: '2020-2021',
    question: 'Qu\'est-ce qu\'une SA (Security Association) dans IPSec et comment est-elle identifiée ?',
    answer: 'Une SA est un ensemble unidirectionnel de paramètres de sécurité (algorithmes, clés, modes, durée de vie) entre deux entités. Elle est identifiée de manière unique par le triplet : SPI (Security Parameter Index), adresse IP de destination, et protocole (AH ou ESP). Chaque direction de communication nécessite une SA distincte.',
    difficulty: 'moyen',
    tags: ['SA', 'IPSec', 'SPI']
  },
  {
    id: 'q32',
    chapterId: 'chap4',
    examYear: '2018-2019',
    question: 'Quels sont les différents types de pare-feu et leurs caractéristiques ?',
    answer: '1) Filtrage de paquets (stateless) : filtre selon IP/port, simple mais ne suit pas les connexions. 2) Filtrage stateful : maintient l\'état des connexions TCP, plus intelligent. 3) Proxy/Application : analyse le contenu applicatif (HTTP, FTP), plus lent mais plus sécurisé. 4) Next-gen (NGFW) : combine filtrage, IDS, inspection SSL, analyse comportementale.',
    difficulty: 'moyen',
    tags: ['pare-feu', 'filtrage', 'stateful']
  },
  {
    id: 'q33',
    chapterId: 'chap4',
    examYear: '2019-2020',
    question: 'Expliquez le fonctionnement du NAT et du PAT. Pourquoi sont-ils utilisés ?',
    answer: 'NAT (Network Address Translation) : traduit les adresses IP privées en adresses publiques. Permet à plusieurs machines de partager une IP publique. PAT (Port Address Translation) : ajoute la translation de ports. Chaque connexion est identifiée par (IP privée, port source) → (IP publique, port unique). Utilisés pour : pénurie d\'adresses IPv4, sécurité (masquage des IP internes).',
    difficulty: 'facile',
    tags: ['NAT', 'PAT', 'adressage']
  },
  {
    id: 'q34',
    chapterId: 'chap6',
    examYear: '2020-2021',
    question: 'Quelles sont les étapes du handshake TLS 1.2 ?',
    answer: '1) ClientHello : versions, suites de chiffrement, random. 2) ServerHello : suite choisie, random + Certificate (certificat serveur). 3) ClientKeyExchange : pre-master secret chiffré avec clé publique serveur. 4) ChangeCipherSpec : notification de passage au chiffrement. 5) Finished : vérification du handshake (hash des messages). Les deux parties dérivent les clés de session à partir du pre-master secret et des randoms.',
    difficulty: 'difficile',
    tags: ['TLS', 'handshake', 'SSL']
  },
  {
    id: 'q35',
    chapterId: 'chap6',
    examYear: '2019-2020',
    question: 'Quelle est la différence entre SSL/TLS et IPSec ? Dans quels cas utilise-t-on l\'un ou l\'autre ?',
    answer: 'TLS : couche transport (au-dessus de TCP), sécurise application par application, pas de modification réseau, traverse NAT/firewalls, déploiement simple. IPSec : couche réseau (IP), sécurise tout le trafic IP, nécessite configuration réseau, incompatible NAT avec AH. Utiliser TLS pour : web (HTTPS), mail, applications. Utiliser IPSec pour : VPN site-à-site, protection globale du trafic.',
    difficulty: 'moyen',
    tags: ['TLS', 'IPSec', 'comparaison']
  },
  {
    id: 'q36',
    chapterId: 'chap3',
    examYear: '2020-2021',
    question: 'Qu\'est-ce que le mode CBC (Cipher Block Chaining) ? Quel est le rôle de l\'IV ?',
    answer: 'CBC : chaque bloc de texte clair est XORé avec le bloc chiffré précédent avant chiffrement. Cela masque les patterns répétitifs. L\'IV (Initialization Vector) est un bloc aléatoire utilisé pour le premier bloc (pas de bloc précédent). Il doit être imprévisible et unique pour chaque message mais n\'a pas besoin d\'être secret.',
    difficulty: 'moyen',
    tags: ['CBC', 'IV', 'mode de chiffrement']
  },
  {
    id: 'q37',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Pourquoi utilise-t-on une fonction de hachage avant de signer un message ?',
    answer: '1) Performance : signer un hash de 256 bits est beaucoup plus rapide que signer un message de plusieurs Mo. 2) Taille fixe : la signature a toujours la même taille quelle que soit la taille du message. 3) Sécurité : empêche les attaques par homomorphisme (comme RSA sans hash où S(m1)×S(m2) = S(m1×m2)).',
    difficulty: 'facile',
    tags: ['hachage', 'signature', 'performance']
  },
  {
    id: 'q38',
    chapterId: 'chap1',
    examYear: 'général',
    question: 'Quels sont les quatre types d\'attaques selon la classification par effet ?',
    answer: '1) Interruption : atteinte à la disponibilité (DoS, destruction). 2) Interception : atteinte à la confidentialité (écoute passive, vol de données). 3) Modification : atteinte à l\'intégrité (altération de données en transit). 4) Fabrication : atteinte à l\'authenticité (usurpation d\'identité, faux messages).',
    difficulty: 'facile',
    tags: ['attaques', 'classification', 'sécurité']
  },
  {
    id: 'q39',
    chapterId: 'chap2',
    examYear: 'général',
    question: 'Qu\'est-ce qu\'une attaque par rejeu et comment s\'en protéger ?',
    answer: 'Attaque par rejeu : un attaquant capture un message légitime et le retransmet plus tard pour reproduire son effet (ex: rejouer une authentification). Protection : 1) Timestamps : refuser les messages trop anciens. 2) Nonces : nombres utilisés une seule fois. 3) Numéros de séquence : détecter les doublons. 4) Fenêtre anti-rejeu (IPSec) : rejeter les paquets hors fenêtre.',
    difficulty: 'moyen',
    tags: ['rejeu', 'attaque', 'nonce']
  },
  {
    id: 'q40',
    chapterId: 'chap4',
    examYear: '2020-2021',
    question: 'Expliquez la différence entre NIDS et HIDS.',
    answer: 'NIDS (Network IDS) : analyse le trafic réseau en temps réel, placé sur un segment réseau, détecte les attaques basées sur le réseau (scans, exploits). HIDS (Host IDS) : installé sur une machine, surveille les logs, fichiers système, appels système, détecte les modifications suspectes et malwares. Complémentaires : NIDS voit le trafic, HIDS voit l\'activité locale.',
    difficulty: 'facile',
    tags: ['NIDS', 'HIDS', 'IDS']
  },
  {
    id: 'q41',
    chapterId: 'chap5',
    examYear: '2019-2020',
    question: 'Pourquoi AH est-il incompatible avec NAT ?',
    answer: 'AH calcule un hash d\'intégrité sur le paquet IP COMPLET, y compris les adresses IP source/destination. Quand le paquet traverse un NAT, l\'adresse IP est modifiée. Le récepteur recalcule le hash et obtient une valeur différente → le paquet est rejeté. Solution : utiliser ESP en mode tunnel ou NAT-T (NAT Traversal) qui encapsule ESP dans UDP.',
    difficulty: 'moyen',
    tags: ['AH', 'NAT', 'incompatibilité']
  },
  {
    id: 'q42',
    chapterId: 'chap6',
    examYear: '2018-2019',
    question: 'Dans SET, pourquoi a-t-on besoin de la signature duale ?',
    answer: 'SET implique 3 parties : client, marchand, banque. Le client veut que : le marchand voie la commande mais PAS les infos de paiement, la banque voie le paiement mais PAS les détails de la commande. La signature duale permet de lier les deux parties (commande + paiement) de manière vérifiable tout en les gardant séparées. Chaque destinataire peut vérifier l\'intégrité sans voir l\'autre partie.',
    difficulty: 'difficile',
    tags: ['SET', 'signature duale', 'paiement']
  },
  {
    id: 'q43',
    chapterId: 'chap3',
    examYear: '2020-2021',
    question: 'Qu\'est-ce que la résistance aux collisions d\'une fonction de hachage ?',
    answer: 'Résistance aux collisions : il doit être calculatoirement impossible de trouver deux messages M1 ≠ M2 tels que H(M1) = H(M2). C\'est plus fort que la résistance à la seconde préimage (trouver M2 connaissant M1). Si une fonction n\'est pas résistante aux collisions, un attaquant peut substituer un message par un autre avec la même signature.',
    difficulty: 'moyen',
    tags: ['hachage', 'collision', 'résistance']
  },
  {
    id: 'q44',
    chapterId: 'chap4',
    examYear: '2019-2020',
    question: 'Décrivez le protocole PPTP et ses faiblesses.',
    answer: 'PPTP (Point-to-Point Tunneling Protocol) : encapsule PPP dans GRE, utilise TCP port 1723 pour le contrôle. Faiblesses : 1) MS-CHAPv1/v2 vulnérables (hashes faibles). 2) Chiffrement MPPE basé sur le mot de passe. 3) Pas d\'authentification mutuelle. 4) Pas de Perfect Forward Secrecy. Recommandation : utiliser L2TP/IPSec ou OpenVPN à la place.',
    difficulty: 'moyen',
    tags: ['PPTP', 'VPN', 'faiblesses']
  },
  {
    id: 'q45',
    chapterId: 'chap5',
    examYear: '2020-2021',
    question: 'Qu\'est-ce que Perfect Forward Secrecy (PFS) et comment l\'implémente-t-on ?',
    answer: 'PFS garantit que si une clé à long terme est compromise, les sessions passées restent protégées. Chaque session utilise des clés éphémères générées par Diffie-Hellman. Même avec la clé privée permanente, impossible de déchiffrer les anciennes communications. Implémentation : utiliser un nouvel échange DH pour chaque session (IKE phase 1 avec groupe DH, TLS avec DHE/ECDHE).',
    difficulty: 'difficile',
    tags: ['PFS', 'Diffie-Hellman', 'sécurité']
  },
  {
    id: 'q46',
    chapterId: 'chap7',
    examYear: '2018-2019',
    question: 'Comment fonctionne une injection SQL et comment s\'en protéger ?',
    answer: 'L\'attaquant insère du code SQL dans les entrées utilisateur (formulaires, URL). Exemple : login = "admin\' OR 1=1 --". Si la requête est construite par concaténation, le SQL malveillant est exécuté. Protection : 1) Requêtes préparées (paramètres liés). 2) Validation et échappement des entrées. 3) Principe du moindre privilège pour le compte DB. 4) WAF (Web Application Firewall).',
    difficulty: 'moyen',
    tags: ['injection SQL', 'sécurité web', 'protection']
  },
  {
    id: 'q47',
    chapterId: 'chap3',
    examYear: '2019-2020',
    question: 'Expliquez la différence entre chiffrement de flux et chiffrement par bloc.',
    answer: 'Chiffrement par bloc : traite les données par blocs de taille fixe (64, 128 bits), même clé pour chaque bloc, nécessite un mode d\'opération (CBC, CTR). Exemples : AES, DES. Chiffrement de flux : génère un flux pseudo-aléatoire (keystream) XORé bit à bit avec les données, traitement continu. Exemple : RC4, ChaCha20. Flux plus rapide pour streaming, bloc plus courant pour fichiers.',
    difficulty: 'moyen',
    tags: ['chiffrement flux', 'chiffrement bloc', 'comparaison']
  },
  {
    id: 'q48',
    chapterId: 'chap4',
    examYear: '2020-2021',
    question: 'Qu\'est-ce qu\'une DMZ et comment est-elle architecturée ?',
    answer: 'DMZ (DeMilitarized Zone) : segment réseau entre le réseau interne et Internet, isolé par des pare-feux. Architecture typique : Internet → Pare-feu externe → DMZ → Pare-feu interne → LAN. La DMZ héberge les serveurs accessibles depuis Internet (web, mail, DNS). Si un serveur DMZ est compromis, l\'attaquant n\'a pas accès direct au LAN.',
    difficulty: 'facile',
    tags: ['DMZ', 'architecture', 'pare-feu']
  },
  {
    id: 'q49',
    chapterId: 'chap6',
    examYear: 'général',
    question: 'Quels sont les sous-protocoles de SSL/TLS et leurs rôles ?',
    answer: '1) Handshake Protocol : négociation des algorithmes, échange de clés, authentification. 2) Record Protocol : fragmentation, compression, chiffrement et MAC des données applicatives. 3) Change Cipher Spec Protocol : notification du passage au nouveau cipher suite. 4) Alert Protocol : signalisation des erreurs et alertes (warning, fatal).',
    difficulty: 'moyen',
    tags: ['SSL', 'TLS', 'protocoles']
  },
  {
    id: 'q50',
    chapterId: 'chap3',
    examYear: '2018-2019',
    question: 'Qu\'est-ce qu\'un certificat X.509 et quelles informations contient-il ?',
    answer: 'Un certificat X.509 est un document numérique liant une clé publique à une identité. Contenu : version, numéro de série, algorithme de signature, émetteur (CA), période de validité, sujet (identité), clé publique du sujet, extensions (usage, contraintes), signature de la CA. Il permet de vérifier l\'authenticité d\'une clé publique via une chaîne de confiance.',
    difficulty: 'moyen',
    tags: ['certificat', 'X.509', 'PKI']
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  { term: 'AES', definition: 'Advanced Encryption Standard - algorithme de chiffrement symétrique (128, 192 ou 256 bits)', relatedTerms: ['DES', '3-DES', 'chiffrement symétrique'], chapter: 'chap3' },
  { term: 'AH', definition: 'Authentication Header - protocole IPSec pour l\'authentification et l\'intégrité', relatedTerms: ['ESP', 'IPSec', 'intégrité'], chapter: 'chap5' },
  { term: 'CA', definition: 'Certificate Authority - autorité de certification délivrant les certificats numériques', relatedTerms: ['PKI', 'certificat', 'TLS'], chapter: 'chap3' },
  { term: 'CHAP', definition: 'Challenge Handshake Authentication Protocol - authentification par challenge-response', relatedTerms: ['PAP', 'PPP', 'authentification'], chapter: 'chap4' },
  { term: 'CRC', definition: 'Cyclic Redundancy Check - somme de contrôle pour détecter les erreurs', relatedTerms: ['ICV', 'intégrité'], chapter: 'chap4' },
  { term: 'DES', definition: 'Data Encryption Standard - ancien algorithme de chiffrement symétrique (56 bits)', relatedTerms: ['3-DES', 'AES'], chapter: 'chap3' },
  { term: '3-DES', definition: 'Triple DES - application de DES trois fois (168 bits effectifs)', relatedTerms: ['DES', 'AES'], chapter: 'chap3' },
  { term: 'DMZ', definition: 'DeMilitarized Zone - zone réseau isolée pour les services exposés', relatedTerms: ['pare-feu', 'NAT'], chapter: 'chap4' },
  { term: 'ESP', definition: 'Encapsulating Security Payload - protocole IPSec pour chiffrement et intégrité', relatedTerms: ['AH', 'IPSec', 'confidentialité'], chapter: 'chap5' },
  { term: 'GRE', definition: 'Generic Routing Encapsulation - protocole d\'encapsulation pour VPN', relatedTerms: ['L2TP', 'PPTP', 'VPN'], chapter: 'chap4' },
  { term: 'HMAC', definition: 'Hash-based Message Authentication Code - MAC utilisant une fonction de hachage', relatedTerms: ['SHA', 'intégrité', 'authentification'], chapter: 'chap3' },
  { term: 'ICV', definition: 'Integrity Check Value - valeur de contrôle d\'intégrité (WEP)', relatedTerms: ['CRC', 'WEP'], chapter: 'chap4' },
  { term: 'IDS', definition: 'Intrusion Detection System - système de détection d\'intrusions', relatedTerms: ['NIDS', 'HIDS', 'pare-feu'], chapter: 'chap4' },
  { term: 'IKE', definition: 'Internet Key Exchange - protocole de négociation de clés pour IPSec', relatedTerms: ['ISAKMP', 'SA', 'IPSec'], chapter: 'chap5' },
  { term: 'IPSec', definition: 'IP Security - suite de protocoles pour sécuriser les communications IP', relatedTerms: ['AH', 'ESP', 'IKE'], chapter: 'chap5' },
  { term: 'ISAKMP', definition: 'Internet Security Association and Key Management Protocol - cadre de gestion des clés', relatedTerms: ['IKE', 'SA'], chapter: 'chap5' },
  { term: 'IV', definition: 'Initialization Vector - vecteur d\'initialisation pour le chiffrement', relatedTerms: ['WEP', 'RC4'], chapter: 'chap4' },
  { term: 'L2TP', definition: 'Layer 2 Tunneling Protocol - protocole de tunneling niveau 2', relatedTerms: ['PPTP', 'VPN', 'IPSec'], chapter: 'chap4' },
  { term: 'NAT', definition: 'Network Address Translation - translation d\'adresses IP', relatedTerms: ['PAT', 'DMZ'], chapter: 'chap4' },
  { term: 'NIDS', definition: 'Network IDS - IDS surveillant le trafic réseau', relatedTerms: ['HIDS', 'IDS'], chapter: 'chap4' },
  { term: 'OSI', definition: 'Open Systems Interconnection - modèle de référence à 7 couches', relatedTerms: ['TCP/IP'], chapter: 'chap1' },
  { term: 'PAP', definition: 'Password Authentication Protocol - authentification par mot de passe en clair', relatedTerms: ['CHAP', 'PPP'], chapter: 'chap4' },
  { term: 'PAT', definition: 'Port Address Translation - translation de ports', relatedTerms: ['NAT'], chapter: 'chap4' },
  { term: 'PFS', definition: 'Perfect Forward Secrecy - propriété garantissant l\'indépendance des clés', relatedTerms: ['IKE', 'Diffie-Hellman'], chapter: 'chap5' },
  { term: 'PKI', definition: 'Public Key Infrastructure - infrastructure de gestion des clés publiques', relatedTerms: ['CA', 'certificat'], chapter: 'chap3' },
  { term: 'PPTP', definition: 'Point-to-Point Tunneling Protocol - protocole VPN de Microsoft', relatedTerms: ['L2TP', 'VPN'], chapter: 'chap4' },
  { term: 'RADIUS', definition: 'Remote Authentication Dial-In User Service - protocole d\'authentification centralisée', relatedTerms: ['AAA', 'NAS'], chapter: 'chap4' },
  { term: 'RC4', definition: 'Rivest Cipher 4 - algorithme de chiffrement par flux (WEP)', relatedTerms: ['WEP', 'IV'], chapter: 'chap4' },
  { term: 'RSA', definition: 'Rivest-Shamir-Adleman - algorithme de chiffrement asymétrique', relatedTerms: ['clé publique', 'signature'], chapter: 'chap3' },
  { term: 'SA', definition: 'Security Association - association de sécurité dans IPSec', relatedTerms: ['IKE', 'ISAKMP', 'SPI'], chapter: 'chap5' },
  { term: 'SET', definition: 'Secure Electronic Transaction - protocole de paiement sécurisé', relatedTerms: ['TLS', 'signature duale'], chapter: 'chap6' },
  { term: 'SHA', definition: 'Secure Hash Algorithm - famille de fonctions de hachage', relatedTerms: ['HMAC', 'intégrité'], chapter: 'chap3' },
  { term: 'SPI', definition: 'Security Parameter Index - identifiant d\'une SA dans IPSec', relatedTerms: ['SA', 'IPSec'], chapter: 'chap5' },
  { term: 'SSL', definition: 'Secure Socket Layer - protocole de sécurité (prédécesseur de TLS)', relatedTerms: ['TLS', 'HTTPS'], chapter: 'chap6' },
  { term: 'TLS', definition: 'Transport Layer Security - protocole de sécurité des communications', relatedTerms: ['SSL', 'HTTPS', 'handshake'], chapter: 'chap6' },
  { term: 'TOR', definition: 'The Onion Router - réseau d\'anonymisation par routage en oignon', relatedTerms: ['anonymat', 'chiffrement'], chapter: 'chap4' },
  { term: 'VPN', definition: 'Virtual Private Network - réseau privé virtuel', relatedTerms: ['PPTP', 'L2TP', 'IPSec'], chapter: 'chap4' },
  { term: 'WEP', definition: 'Wired Equivalent Privacy - ancien protocole de sécurité WiFi (obsolète)', relatedTerms: ['IV', 'ICV', 'RC4'], chapter: 'chap4' },
  { term: 'XSS', definition: 'Cross-Site Scripting - injection de scripts malveillants', relatedTerms: ['injection', 'attaque'], chapter: 'chap7' }
];
