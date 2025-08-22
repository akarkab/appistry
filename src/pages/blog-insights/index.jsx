import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import NewsletterSignup from './components/NewsletterSignup';
import AuthorCard from './components/AuthorCard';
import RelatedPosts from './components/RelatedPosts';
import InteractiveContent from './components/InteractiveContent';

const BlogInsights = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "L\'avenir du développement web : React 19 et les nouvelles fonctionnalités révolutionnaires",
      slug: "react-19-nouvelles-fonctionnalites",
      excerpt: "Découvrez les innovations majeures de React 19 qui transforment la façon dont nous développons des applications web modernes. De nouvelles APIs, des performances optimisées et une expérience développeur repensée.",
      content: `React 19 marque une étape importante dans l'évolution du développement web moderne. Cette nouvelle version apporte des améliorations significatives en termes de performances, d'expérience développeur et de nouvelles fonctionnalités qui simplifient la création d'applications complexes.\n\nParmi les nouveautés les plus marquantes, nous retrouvons le nouveau système de compilation automatique, les Server Components améliorés, et une gestion d'état repensée qui réduit considérablement le boilerplate code.\n\nLes performances ont également été optimisées avec un nouveau moteur de rendu qui améliore les temps de chargement de 40% en moyenne. Ces améliorations permettent aux développeurs de créer des applications plus rapides et plus réactives.\n\nL'écosystème React continue d'évoluer avec des outils de développement améliorés, une meilleure intégration TypeScript native, et des patterns de développement qui favorisent la maintenabilité du code à long terme.`,
      category: "Technical Deep-Dive",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      author: {
        id: 1,
        name: "Sophie Dubois",
        role: "Lead Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        bio: "Experte React avec plus de 8 ans d\'expérience dans le développement d\'applications web complexes. Passionnée par les nouvelles technologies et l\'optimisation des performances.",
        expertise: ["React", "TypeScript", "Performance", "Architecture"],
        social: {
          linkedin: "https://linkedin.com/in/sophie-dubois",
          twitter: "https://twitter.com/sophie_dev",
          github: "https://github.com/sophie-dubois"
        }
      },
      publishedAt: "2025-01-15T10:00:00Z",
      featured: true
    },
    {
      id: 2,
      title: "Intelligence Artificielle et UX Design : Comment l'IA révolutionne l'expérience utilisateur",
      slug: "ia-ux-design-revolution",
      excerpt: "L'intelligence artificielle transforme radicalement la façon dont nous concevons les interfaces utilisateur. Découvrez les outils et méthodes qui redéfinissent le design moderne.",
      content: `L'intelligence artificielle n'est plus une technologie futuriste, elle est aujourd'hui au cœur de la révolution UX. Les designers utilisent désormais des outils alimentés par l'IA pour créer des expériences plus personnalisées et intuitives.\n\nLes algorithmes de machine learning permettent d'analyser le comportement des utilisateurs en temps réel et d'adapter l'interface en conséquence. Cette approche dynamique améliore significativement l'engagement et la satisfaction utilisateur.\n\nLes outils de design assisté par IA comme Figma AI, Adobe Sensei, et Framer AI accélèrent le processus créatif tout en maintenant une qualité élevée. Ces technologies permettent aux designers de se concentrer sur la stratégie plutôt que sur les tâches répétitives.\n\nL'avenir du design sera probablement une collaboration étroite entre l'intelligence humaine et artificielle, créant des expériences utilisateur plus riches et plus accessibles.`,
      category: "Industry Analysis",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      author: {
        id: 2,
        name: "Marc Lefevre",
        role: "UX/UI Design Director",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        bio: "Designer expérimenté spécialisé dans l\'intégration de l\'IA dans les processus de design. Expert en recherche utilisateur et en design thinking.",
        expertise: ["UX Design", "AI Tools", "Design Systems", "User Research"],
        social: {
          linkedin: "https://linkedin.com/in/marc-lefevre",
          twitter: "https://twitter.com/marc_design"
        }
      },
      publishedAt: "2025-01-12T14:30:00Z",
      featured: false
    },
    {
      id: 3,
      title: "Étude de cas : Transformation digitale d\'une PME manufacturière en 6 mois",
      slug: "transformation-digitale-pme-manufacturiere",
      excerpt: "Retour d'expérience sur la digitalisation complète d'une entreprise traditionnelle : défis, solutions et résultats mesurables après 6 mois d'implémentation.",
      content: `Cette étude de cas présente la transformation digitale complète d'une PME manufacturière de 150 employés, spécialisée dans la production de composants automobiles.\n\nLe défi initial était de moderniser un système d'information vieillissant et d'améliorer la traçabilité de la production. L'entreprise utilisait encore des processus papier pour 80% de ses opérations.\n\nNotre approche s'est articulée autour de trois axes principaux : la digitalisation des processus métier, l'implémentation d'un ERP moderne, et la formation des équipes aux nouveaux outils.\n\nLes résultats après 6 mois sont remarquables : 45% de gain de productivité, 60% de réduction des erreurs de saisie, et un ROI de 180% sur l'investissement initial. L'entreprise a également pu réduire ses délais de livraison de 30%.\n\nCette transformation démontre qu'avec une approche méthodique et un accompagnement adapté, même les entreprises les plus traditionnelles peuvent réussir leur transition digitale.`,
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      author: {
        id: 3,
        name: "Claire Martin",
        role: "Digital Transformation Consultant",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        bio: "Consultante spécialisée dans l\'accompagnement des PME dans leur transformation digitale. Expert en conduite du changement et optimisation des processus.",
        expertise: ["Digital Transformation", "Change Management", "Process Optimization", "ERP"],
        social: {
          linkedin: "https://linkedin.com/in/claire-martin",
          twitter: "https://twitter.com/claire_transform"
        }
      },
      publishedAt: "2025-01-10T09:15:00Z",
      featured: false
    },
    {
      id: 4,
      title: "Les Progressive Web Apps en 2025 : Performance et engagement utilisateur",
      slug: "pwa-2025-performance-engagement",
      excerpt: "Les PWA continuent d\'évoluer et offrent aujourd\'hui des performances natives. Analyse des dernières innovations et des meilleures pratiques pour 2025.",
      content: `Les Progressive Web Apps (PWA) ont considérablement évolué et représentent aujourd'hui une alternative crédible aux applications natives. En 2025, les PWA offrent des performances quasi-natives tout en conservant les avantages du web.\n\nLes nouvelles APIs comme WebAssembly, Web Streams, et les améliorations du Service Worker permettent de créer des expériences utilisateur fluides et réactives. L'écart de performance avec les applications natives se réduit considérablement.\n\nL'engagement utilisateur est également amélioré grâce aux notifications push avancées, à la synchronisation en arrière-plan, et aux fonctionnalités offline robustes. Les utilisateurs peuvent désormais utiliser les PWA comme de véritables applications.\n\nLes entreprises adoptent massivement les PWA pour réduire les coûts de développement tout en offrant une expérience utilisateur premium. Cette approche permet de toucher un public plus large avec un seul développement.\n\nLes outils de développement PWA continuent de s'améliorer avec des frameworks comme Next.js, Nuxt.js, et des solutions spécialisées qui simplifient la création d'applications performantes.`,
      category: "Technical Deep-Dive",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      author: {
        id: 1,
        name: "Sophie Dubois",
        role: "Lead Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        bio: "Experte React avec plus de 8 ans d\'expérience dans le développement d\'applications web complexes. Passionnée par les nouvelles technologies et l\'optimisation des performances.",
        expertise: ["React", "TypeScript", "Performance", "Architecture"],
        social: {
          linkedin: "https://linkedin.com/in/sophie-dubois",
          twitter: "https://twitter.com/sophie_dev",
          github: "https://github.com/sophie-dubois"
        }
      },
      publishedAt: "2025-01-08T16:45:00Z",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain et développement web : Applications pratiques au-delà des cryptomonnaies",
      slug: "blockchain-developpement-web-applications",
      excerpt: "La blockchain trouve de nouvelles applications dans le développement web moderne. Découvrez les cas d\'usage concrets et les opportunités pour les développeurs.",
      content: `La blockchain dépasse largement le cadre des cryptomonnaies et trouve des applications concrètes dans le développement web moderne. Cette technologie offre de nouvelles possibilités pour la sécurisation des données et la décentralisation des services.\n\nLes applications web décentralisées (dApps) gagnent en popularité, notamment dans les domaines de l'identité numérique, de la gestion des droits d'auteur, et de la traçabilité des produits. Ces applications offrent une transparence et une sécurité accrues.\n\nLes smart contracts permettent d'automatiser des processus complexes sans intermédiaire, réduisant les coûts et les risques. Les développeurs web peuvent désormais intégrer ces fonctionnalités dans leurs applications traditionnelles.\n\nLes outils de développement blockchain s'améliorent constamment, avec des frameworks comme Truffle, Hardhat, et des solutions cloud qui simplifient l'intégration. L'écosystème devient plus accessible aux développeurs web traditionnels.\n\nL'avenir verra probablement une adoption plus large de la blockchain dans les applications web, notamment pour la gestion de l'identité, la vérification des données, et la création de nouveaux modèles économiques décentralisés.`,
      category: "Emerging Technologies",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      author: {
        id: 4,
        name: "Thomas Rousseau",
        role: "Blockchain Developer",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        bio: "Développeur blockchain passionné par les technologies décentralisées. Expert en smart contracts et applications web3.",
        expertise: ["Blockchain", "Smart Contracts", "Web3", "Solidity"],
        social: {
          linkedin: "https://linkedin.com/in/thomas-rousseau",
          github: "https://github.com/thomas-blockchain"
        }
      },
      publishedAt: "2025-01-05T11:20:00Z",
      featured: false
    },
    {
      id: 6,
      title: "Optimisation SEO pour les applications React : Guide complet 2025",
      slug: "optimisation-seo-react-guide-2025",
      excerpt: "Le SEO des applications React présente des défis uniques. Découvrez les techniques avancées et les outils pour améliorer votre référencement naturel.",
      content: `L'optimisation SEO des applications React nécessite une approche spécifique pour surmonter les défis liés au rendu côté client. En 2025, de nouvelles techniques permettent d'améliorer significativement le référencement naturel.\n\nLe Server-Side Rendering (SSR) et la génération statique sont devenus essentiels pour un bon référencement. Next.js et Gatsby offrent des solutions robustes pour implémenter ces techniques efficacement.\n\nLa gestion des métadonnées dynamiques, l'optimisation des Core Web Vitals, et l'implémentation du schema markup sont cruciales pour un bon positionnement. Ces éléments techniques impactent directement le classement dans les moteurs de recherche.\n\nLes outils d'analyse comme Google Search Console, Lighthouse, et les extensions SEO spécialisées permettent de monitorer et d'optimiser continuellement les performances SEO. L'automatisation de ces vérifications devient indispensable.\n\nL'avenir du SEO React s'oriente vers une approche plus holistique, intégrant performance, accessibilité, et expérience utilisateur. Les développeurs doivent maîtriser ces aspects pour créer des applications bien référencées.`,
      category: "Technical Deep-Dive",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      author: {
        id: 5,
        name: "Julie Moreau",
        role: "SEO Technical Specialist",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        bio: "Spécialiste SEO technique avec une expertise approfondie en optimisation des applications web modernes. Passionnée par l\'intersection entre développement et référencement.",
        expertise: ["Technical SEO", "React", "Performance", "Analytics"],
        social: {
          linkedin: "https://linkedin.com/in/julie-moreau",
          twitter: "https://twitter.com/julie_seo"
        }
      },
      publishedAt: "2025-01-03T13:10:00Z",
      featured: false
    }
  ];

  const categories = ['Tous', 'Technical Deep-Dive', 'Industry Analysis', 'Case Study', 'Emerging Technologies'];

  const featuredAuthors = [
    {
      id: 1,
      name: "Sophie Dubois",
      role: "Lead Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "Experte React avec plus de 8 ans d\'expérience dans le développement d\'applications web complexes. Passionnée par les nouvelles technologies et l\'optimisation des performances.",
      expertise: ["React", "TypeScript", "Performance", "Architecture"],
      social: {
        linkedin: "https://linkedin.com/in/sophie-dubois",
        twitter: "https://twitter.com/sophie_dev",
        github: "https://github.com/sophie-dubois"
      }
    },
    {
      id: 2,
      name: "Marc Lefevre",
      role: "UX/UI Design Director",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Designer expérimenté spécialisé dans l\'intégration de l\'IA dans les processus de design. Expert en recherche utilisateur et en design thinking.",
      expertise: ["UX Design", "AI Tools", "Design Systems", "User Research"],
      social: {
        linkedin: "https://linkedin.com/in/marc-lefevre",
        twitter: "https://twitter.com/marc_design"
      }
    }
  ];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (activeCategory !== 'Tous') {
      filtered = filtered?.filter(post => post?.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered?.filter(post =>
        post?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        post?.excerpt?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        post?.author?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, activeCategory]);

  const featuredPost = blogPosts?.find(post => post?.featured);
  const regularPosts = filteredPosts?.filter(post => !post?.featured);

  return (
    <>
      <Helmet>
        <title>Blog & Insights - Appistry Digital Agency</title>
        <meta name="description" content="Découvrez nos insights sur les dernières tendances digitales, analyses techniques et études de cas. Expertise en développement web, UX/UI design et transformation digitale." />
        <meta name="keywords" content="blog digital, insights technologiques, développement web, UX design, transformation digitale, React, intelligence artificielle" />
        <meta property="og:title" content="Blog & Insights - Appistry Digital Agency" />
        <meta property="og:description" content="Hub d'expertise digitale avec des analyses approfondies, études de cas et guides techniques pour votre transformation digitale." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://appistry.fr/blog-insights" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Hub d'expertise digitale
              </div>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white mb-6">
                Blog & <span className="gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Découvrez nos analyses approfondies, études de cas exclusives et guides techniques 
                pour accélérer votre transformation digitale et rester à la pointe de l'innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-white/80 text-sm">
                  <Icon name="Users" size={16} className="mr-2" />
                  2,500+ lecteurs actifs
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center text-white/80 text-sm">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Nouveaux articles chaque semaine
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center text-white/80 text-sm">
                  <Icon name="Award" size={16} className="mr-2" />
                  Expertise reconnue
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="w-full lg:w-96">
                <SearchBar 
                  onSearch={setSearchTerm}
                  placeholder="Rechercher des articles, auteurs, sujets..."
                />
              </div>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && activeCategory === 'Tous' && !searchTerm && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-3 mb-8">
                <Icon name="Star" size={24} className="text-secondary" />
                <h2 className="text-2xl font-poppins font-bold text-primary">
                  Article à la une
                </h2>
              </div>
              <BlogCard post={featuredPost} featured={true} />
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-poppins font-bold text-primary">
                {searchTerm ? `Résultats pour "${searchTerm}"` : 
                 activeCategory !== 'Tous' ? `Articles - ${activeCategory}` : 'Derniers articles'}
              </h2>
              <div className="text-text-secondary text-sm">
                {filteredPosts?.length} article{filteredPosts?.length > 1 ? 's' : ''} trouvé{filteredPosts?.length > 1 ? 's' : ''}
              </div>
            </div>

            {regularPosts?.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts?.map((post) => (
                  <BlogCard key={post?.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-text-secondary mb-6">
                  Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('Tous');
                  }}
                  className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-brand"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Content Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">
                Évaluez votre maturité digitale
              </h2>
              <p className="text-text-secondary text-lg">
                Découvrez où en est votre entreprise et obtenez des recommandations personnalisées
              </p>
            </div>
            <InteractiveContent />
          </div>
        </section>

        {/* Featured Authors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">
                Nos experts
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Rencontrez les spécialistes qui partagent leur expertise et leurs insights 
                pour vous accompagner dans votre transformation digitale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredAuthors?.map((author) => (
                <AuthorCard key={author?.id} author={author} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedPosts posts={blogPosts} currentPostId={null} />
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-brand">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-poppins font-bold text-white mb-4">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Nos experts sont là pour vous accompagner dans votre projet digital. 
              Discutons de vos objectifs et créons ensemble quelque chose d'exceptionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-consultation"
                className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-brand"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Réserver une consultation
              </a>
              <a
                href="/services-overview"
                className="inline-flex items-center px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-brand"
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Découvrir nos services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogInsights;