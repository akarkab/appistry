import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveContent = () => {
  const [currentAssessment, setCurrentAssessment] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const assessmentQuestions = [
    {
      id: 1,
      question: "Quel est le niveau de maturité digitale de votre entreprise ?",
      options: [
        { value: 1, label: "Débutant - Présence digitale limitée" },
        { value: 2, label: "Intermédiaire - Quelques outils digitaux" },
        { value: 3, label: "Avancé - Stratégie digitale établie" },
        { value: 4, label: "Expert - Transformation digitale complète" }
      ]
    },
    {
      id: 2,
      question: "Quelle est votre priorité principale pour 2025 ?",
      options: [
        { value: 1, label: "Améliorer l\'expérience utilisateur" },
        { value: 2, label: "Optimiser les performances" },
        { value: 3, label: "Intégrer l'intelligence artificielle" },
        { value: 4, label: "Moderniser l\'architecture technique" }
      ]
    },
    {
      id: 3,
      question: "Quel est votre budget annuel pour le digital ?",
      options: [
        { value: 1, label: "Moins de 50k€" },
        { value: 2, label: "50k€ - 200k€" },
        { value: 3, label: "200k€ - 500k€" },
        { value: 4, label: "Plus de 500k€" }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers)?.reduce((sum, value) => sum + value, 0);
    const maxScore = assessmentQuestions?.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    if (percentage >= 80) return { level: "Expert", color: "text-green-600", bg: "bg-green-100" };
    if (percentage >= 60) return { level: "Avancé", color: "text-blue-600", bg: "bg-blue-100" };
    if (percentage >= 40) return { level: "Intermédiaire", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { level: "Débutant", color: "text-red-600", bg: "bg-red-100" };
  };

  const handleSubmit = () => {
    if (Object.keys(answers)?.length === assessmentQuestions?.length) {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentAssessment(0);
  };

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="bg-white rounded-2xl p-8 shadow-brand">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Award" size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
            Résultats de votre évaluation
          </h3>
        </div>
        <div className="text-center mb-8">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${results?.bg} ${results?.color} font-semibold text-lg mb-4`}>
            <Icon name="Target" size={20} className="mr-2" />
            Niveau {results?.level}
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Basé sur vos réponses, voici nos recommandations personnalisées pour accélérer votre transformation digitale.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-surface rounded-lg p-6">
            <Icon name="Lightbulb" size={24} className="text-secondary mb-3" />
            <h4 className="font-semibold text-primary mb-2">Recommandations</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Audit technique complet</li>
              <li>• Stratégie UX/UI personnalisée</li>
              <li>• Plan de migration progressive</li>
            </ul>
          </div>
          <div className="bg-surface rounded-lg p-6">
            <Icon name="Calendar" size={24} className="text-secondary mb-3" />
            <h4 className="font-semibold text-primary mb-2">Prochaines étapes</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Consultation gratuite de 30min</li>
              <li>• Proposition détaillée</li>
              <li>• Roadmap personnalisée</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="bg-gradient-brand"
            iconName="Calendar"
            iconPosition="left"
          >
            Réserver une consultation
          </Button>
          <Button
            variant="outline"
            onClick={resetAssessment}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Refaire l'évaluation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-brand">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckSquare" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
          Évaluation de maturité digitale
        </h3>
        <p className="text-text-secondary">
          Découvrez où en est votre entreprise dans sa transformation digitale
        </p>
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-text-secondary">
            Question {Object.keys(answers)?.length + 1} sur {assessmentQuestions?.length}
          </span>
          <span className="text-sm font-medium text-secondary">
            {Math.round((Object.keys(answers)?.length / assessmentQuestions?.length) * 100)}% complété
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div 
            className="bg-gradient-brand h-2 rounded-full transition-brand"
            style={{ width: `${(Object.keys(answers)?.length / assessmentQuestions?.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {assessmentQuestions?.map((question, index) => (
        <div key={question?.id} className={`mb-8 ${Object.keys(answers)?.length < index ? 'opacity-50 pointer-events-none' : ''}`}>
          <h4 className="text-lg font-semibold text-primary mb-4">
            {question?.question}
          </h4>
          <div className="space-y-3">
            {question?.options?.map((option) => (
              <label
                key={option?.value}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-brand ${
                  answers?.[question?.id] === option?.value
                    ? 'border-secondary bg-secondary/5' :'border-border hover:border-secondary/50'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question?.id}`}
                  value={option?.value}
                  checked={answers?.[question?.id] === option?.value}
                  onChange={() => handleAnswerSelect(question?.id, option?.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  answers?.[question?.id] === option?.value
                    ? 'border-secondary bg-secondary' :'border-border'
                }`}>
                  {answers?.[question?.id] === option?.value && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-text-primary">{option?.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          disabled={Object.keys(answers)?.length !== assessmentQuestions?.length}
          variant="default"
          className="bg-gradient-brand"
          iconName="ArrowRight"
          iconPosition="right"
        >
          Voir mes résultats
        </Button>
      </div>
    </div>
  );
};

export default InteractiveContent;