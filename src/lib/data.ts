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
