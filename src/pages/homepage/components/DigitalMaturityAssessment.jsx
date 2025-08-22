import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DigitalMaturityAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', company: '' });

  const questions = [
    {
      id: 1,
      question: "Quel est le niveau de digitalisation actuel de votre entreprise ?",
      options: [
        { value: 1, label: "Très basique - principalement papier et processus manuels" },
        { value: 2, label: "Quelques outils numériques mais pas intégrés" },
        { value: 3, label: "Systèmes numériques en place mais pas optimisés" },
        { value: 4, label: "Bien digitalisé avec quelques lacunes" },
        { value: 5, label: "Entièrement numérique et optimisé" }
      ]
    },
    {
      id: 2,
      question: "Comment gérez-vous actuellement vos données clients ?",
      options: [
        { value: 1, label: "Fichiers Excel et documents papier" },
        { value: 2, label: "CRM basique sans intégration" },
        { value: 3, label: "CRM intégré avec quelques automatisations" },
        { value: 4, label: "Système CRM avancé avec analytics" },
        { value: 5, label: "Plateforme complète avec IA et prédictions" }
      ]
    },
    {
      id: 3,
      question: "Quelle est votre présence en ligne actuelle ?",
      options: [
        { value: 1, label: "Pas de site web ou très basique" },
        { value: 2, label: "Site vitrine simple" },
        { value: 3, label: "Site web avec quelques fonctionnalités" },
        { value: 4, label: "Site optimisé avec e-commerce ou fonctionnalités avancées" },
        { value: 5, label: "Écosystème digital complet multi-plateforme" }
      ]
    },
    {
      id: 4,
      question: "Comment mesurez-vous vos performances digitales ?",
      options: [
        { value: 1, label: "Aucun suivi ou très limité" },
        { value: 2, label: "Quelques métriques basiques" },
        { value: 3, label: "Tableaux de bord simples" },
        { value: 4, label: "Analytics avancés avec KPIs définis" },
        { value: 5, label: "Intelligence business avec prédictions et automatisation" }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getMaturityLevel = () => {
    const totalScore = Object.values(answers)?.reduce((sum, value) => sum + value, 0);
    const averageScore = totalScore / questions?.length;

    if (averageScore <= 1.5) return { level: "Débutant", color: "text-red-500", description: "Votre entreprise a besoin d'une transformation digitale complète" };
    if (averageScore <= 2.5) return { level: "En développement", color: "text-orange-500", description: "Vous avez commencé votre transformation, mais il reste du chemin" };
    if (averageScore <= 3.5) return { level: "Intermédiaire", color: "text-yellow-500", description: "Bonne base digitale, optimisation nécessaire" };
    if (averageScore <= 4.5) return { level: "Avancé", color: "text-blue-500", description: "Très bon niveau, quelques améliorations possibles" };
    return { level: "Expert", color: "text-green-500", description: "Félicitations ! Vous êtes un leader digital" };
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setUserInfo({ email: '', company: '' });
  };

  if (showResults) {
    const maturity = getMaturityLevel();
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Award" size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-4">
              Résultats de votre évaluation
            </h2>
          </div>

          <div className="bg-surface rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className={`text-4xl font-poppins font-bold mb-2 ${maturity?.color}`}>
                {maturity?.level}
              </div>
              <p className="text-xl text-text-secondary font-inter">
                {maturity?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg">
                <Icon name="Target" size={32} className="text-secondary mx-auto mb-2" />
                <h4 className="font-poppins font-semibold text-primary mb-1">Stratégie</h4>
                <p className="text-sm text-text-secondary">Définir vos objectifs digitaux</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Icon name="Zap" size={32} className="text-secondary mx-auto mb-2" />
                <h4 className="font-poppins font-semibold text-primary mb-1">Optimisation</h4>
                <p className="text-sm text-text-secondary">Améliorer vos processus</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Icon name="TrendingUp" size={32} className="text-secondary mx-auto mb-2" />
                <h4 className="font-poppins font-semibold text-primary mb-1">Croissance</h4>
                <p className="text-sm text-text-secondary">Accélérer votre développement</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-brand hover:shadow-brand-lg transition-brand font-poppins font-semibold"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.location.href = '/contact-consultation'}
              >
                Planifier une consultation gratuite
              </Button>
              
              <Button
                variant="ghost"
                onClick={resetAssessment}
                className="text-text-secondary hover:text-primary"
              >
                Refaire l'évaluation
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-6">
            Évaluez votre <span className="gradient-text">Maturité Digitale</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-2xl mx-auto">
            Découvrez où en est votre entreprise dans sa transformation digitale et obtenez des recommandations personnalisées
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-inter text-text-secondary">
              Question {currentQuestion + 1} sur {questions?.length}
            </span>
            <span className="text-sm font-inter text-text-secondary">
              {Math.round(((currentQuestion + 1) / questions?.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div 
              className="bg-gradient-brand h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions?.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-surface rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-poppins font-semibold text-primary mb-8">
            {questions?.[currentQuestion]?.question}
          </h3>

          <div className="space-y-4">
            {questions?.[currentQuestion]?.options?.map((option) => (
              <label
                key={option?.value}
                className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-brand border-2 ${
                  answers?.[questions?.[currentQuestion]?.id] === option?.value
                    ? 'border-secondary bg-secondary/5' :'border-transparent bg-white hover:border-secondary/30'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${questions?.[currentQuestion]?.id}`}
                  value={option?.value}
                  checked={answers?.[questions?.[currentQuestion]?.id] === option?.value}
                  onChange={() => handleAnswer(questions?.[currentQuestion]?.id, option?.value)}
                  className="mt-1 w-4 h-4 text-secondary"
                />
                <span className="font-inter text-text-primary flex-1">
                  {option?.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Précédent
          </Button>

          <Button
            variant="default"
            onClick={nextQuestion}
            disabled={!answers?.[questions?.[currentQuestion]?.id]}
            className="bg-gradient-brand"
            iconName={currentQuestion === questions?.length - 1 ? "CheckCircle" : "ChevronRight"}
            iconPosition="right"
          >
            {currentQuestion === questions?.length - 1 ? "Voir les résultats" : "Suivant"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalMaturityAssessment;