import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-brand rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-white mb-2">
          Merci pour votre inscription !
        </h3>
        <p className="text-white/90">
          Vous recevrez bientôt nos dernières insights directement dans votre boîte mail.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-brand rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-white mb-2">
          Restez informé des dernières tendances
        </h3>
        <p className="text-white/90">
          Recevez nos insights exclusifs et analyses approfondies directement dans votre boîte mail.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          placeholder="votre.email@entreprise.com"
          required
          className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20"
        />
        
        <Button
          type="submit"
          variant="secondary"
          fullWidth
          loading={isLoading}
          className="bg-white text-primary hover:bg-white/90"
          iconName="Send"
          iconPosition="right"
        >
          S'abonner à la newsletter
        </Button>
      </form>
      <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center text-white/80 text-sm">
          <Icon name="Users" size={16} className="mr-2" />
          2,500+ abonnés
        </div>
        <div className="flex items-center text-white/80 text-sm">
          <Icon name="Calendar" size={16} className="mr-2" />
          1x par mois
        </div>
        <div className="flex items-center text-white/80 text-sm">
          <Icon name="Shield" size={16} className="mr-2" />
          Pas de spam
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;