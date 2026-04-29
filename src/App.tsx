/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  ArrowRight, 
  Wallet, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  TrendingUp,
  CreditCard,
  MessageSquare,
  Globe,
  Check,
  X,
  Lock
} from 'lucide-react';

const LOGO_URL = "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/FANSQWAD%20LOGO.png";
const HERO_IMAGE = "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/INFLUENCER%20GIRL.png";
const MOBILE_DASH = "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/MOBILE%20DASH2.png";
const COMMUNITY_CENTER_IMAGE = "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/ChatGPT%20Image%2027%20avr.%202026,%2007_44_51.png";

const ORBIT_IMAGES = [
  "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/MANOU%20PARKER.jpg",
  "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/DIANA%20COULIBALY.jpg",
  "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/NORBERT.jpg",
  "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/FATOU.jpg",
  "https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/THIERNO.jpg"
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const WaitlistModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate webhook call
      await fetch('https://hook.eu1.make.com/placeholder-fansqwad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setIsSuccess(true);
    } catch (err) {
      // Show success anyway for UI flow in demo
      setIsSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-off-black/95 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-emerald rounded-[2.5rem] p-8 md:p-12 text-center"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            {isSuccess ? (
              <div className="py-8">
                <div className="w-20 h-20 bg-emerald-accent text-off-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-emerald-500/50">
                  <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-display font-black mb-4 uppercase italic">C'est noté !</h2>
                <p className="text-white/60 mb-8 font-medium">
                  Merci ! Ton inscription a bien été reçue. Nous t'enverrons ton code d'invitation personnel très prochainement.
                </p>
                <button onClick={onClose} className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold">
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-emerald-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Lock className="w-10 h-10 text-emerald-accent" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 uppercase tracking-tighter italic">Accès Privé</h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Fansqwad est actuellement disponible uniquement sur <span className="text-emerald-accent font-bold">code d'invitation</span>. Inscrivez-vous pour recevoir votre code avant le lancement du site.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ton adresse email" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl outline-hidden focus:border-emerald-accent/50 transition-colors text-center font-bold"
                  />
                  <button 
                    disabled={loading}
                    className="w-full py-5 btn-luminous rounded-2xl font-black text-lg active:scale-95 disabled:opacity-50"
                  >
                    {loading ? 'Envoi...' : 'Demander mon invitation'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Ticker = () => (
  <div className="bg-emerald-accent py-2 overflow-hidden flex items-center whitespace-nowrap z-50">
    <div className="flex animate-scroll">
      {[1, 2].map((i) => (
        <React.Fragment key={i}>
          <span className="text-white font-black text-[12px] uppercase tracking-widest px-10">LANCEMENT OUVERT BIENTÔT • ACCÈS PAR CODE D'INVITATION SEULEMENT • MOBILE MONEY DÉBLOQUÉ</span>
          <span className="text-white/80 font-black text-[12px] uppercase tracking-widest px-10">EMPIRE AFRICAIN • INDÉPENDANCE TOTALE • MONÉTISATION SOUVERAINE</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Navbar = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => (
  <nav className="flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-off-black/50 border-b border-white/5">
    <div className="flex items-center gap-3">
      <img src={LOGO_URL} alt="Fansqwad Logo" className="h-8 md:h-12 w-auto" />
      <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-white">FANSQWAD</span>
    </div>
    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#" className="hover:text-emerald-accent transition-colors">Produit</a>
      <a href="#" className="hover:text-emerald-accent transition-colors">Tarifs</a>
      <a href="#" className="hover:text-emerald-accent transition-colors">Support</a>
    </div>
    <div className="flex items-center gap-4">
      <button onClick={onOpenWaitlist} className="hidden sm:block text-sm font-medium hover:text-emerald-accent transition-colors">Connexion</button>
      <button onClick={onOpenWaitlist} className="px-5 py-2 btn-luminous rounded-full text-sm font-bold active:scale-95">
        Rejoindre
      </button>
    </div>
  </nav>
);

const HeroSection = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => (
  <section className="relative min-h-[100dvh] flex flex-col items-center px-6 pt-32 pb-12 md:px-12 overflow-hidden justify-center bg-radial-glow">
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-7xl mx-auto w-full">
      <div className="flex-1 z-20 text-center md:text-left h-full flex flex-col justify-center items-center md:items-start">
        <motion.h1 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1] mb-8 uppercase tracking-tighter"
        >
          Plus qu’une plateforme. <br />
          <span className="text-gradient-metal">Ton empire</span> de créateur.
        </motion.h1>
        
        <motion.p 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          custom={2}
          className="text-base sm:text-lg text-white/70 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0 font-medium"
        >
          Pourquoi dépendre de marques ou de plateformes qui ne paient pas en Afrique ? <span className="text-white font-bold">Fansqwad</span> te donne la liberté de monétiser ton audience directement. Crée un lien sacré avec ta tribu et génère des revenus réels via <span className="text-emerald-accent font-bold">Mobile Money</span>.
        </motion.p>
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 w-full sm:w-auto"
        >
          <button onClick={onOpenWaitlist} className="w-full sm:w-auto px-10 py-5 btn-luminous rounded-full font-black text-xl flex items-center justify-center gap-2 group uppercase">
            COMMENCER L'AVENTURE
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button onClick={onOpenWaitlist} className="hidden md:flex w-full sm:w-auto px-10 py-5 btn-outline-glow rounded-full font-black text-xl items-center justify-center transition-all bg-emerald-accent/10 border-emerald-accent/50 shadow-[0_0_30px_rgba(25,195,125,0.4)] uppercase">
            Voir les exemples
          </button>
        </motion.div>

        {/* Mobile Dashboard Preview - Brought Up */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="md:hidden mt-8 w-full max-w-[340px] mx-auto rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-emerald-accent/20 blur-[60px] -z-10" />
          <img src={MOBILE_DASH} alt="Mobile Dashboard" className="w-full h-auto" />
        </motion.div>
      </div>

      <div className="hidden md:flex flex-1 relative justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glow-emerald shadow-2xl"
        >
          <div className="absolute inset-0 bg-off-black">
               <img 
                src={HERO_IMAGE} 
                alt="Fansqwad Influencer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-off-black via-transparent to-transparent opacity-60" />
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 -left-2 p-5 glass-emerald rounded-[1.5rem] w-56 shadow-2xl"
          >
            <div className="text-[10px] text-emerald-accent font-black uppercase tracking-widest mb-1 shadow-emerald-500/20">REVENUS DISPONIBLES</div>
            <div className="text-2xl font-black italic tracking-tighter">14 850 000 FCFA</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-4 h-4 text-emerald-accent" />
              <span className="text-xs text-emerald-accent font-black uppercase tracking-widest">+38.2%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <div className="py-12 border-y border-white/5 bg-white/[0.02]">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex -space-x-4">
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-off-black bg-white/10 overflow-hidden">
            <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="Creator" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <p className="text-white/40 font-medium tracking-wide text-center md:text-left">
        Recommandé par les leaders de la <span className="text-gradient-metal font-bold uppercase">Creator Economy</span> en Afrique.
      </p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Liberté Financière",
      desc: "Ne dépends plus du bon vouloir des marques ou des algorithmes. Fixe ton propre prix et garde le contrôle total sur tes revenus.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Contenu à débloquer",
      desc: "En plus des abonnements, vends des contenus exclusifs (vidéos, photos, conseils) à débloquer individuellement par tes fans.",
      icon: <Plus className="w-6 h-6" />,
    },
    {
      title: "Zéro barrière",
      desc: "Pas besoin de compte bancaire complexe à l'étranger. Tout se passe ici, avec tes outils locaux et un support qui te comprend.",
      icon: <Globe className="w-6 h-6" />,
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 container mx-auto bg-radial-glow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-emerald-deep/5 -z-10 pointer-events-none" />
      <div className="text-center mb-20">
        <span className="text-emerald-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Le Fonctionnement</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tighter italic">Ton talent mérite <span className="text-gradient-metal">un salaire</span>.</h2>
        <p className="text-white/60 max-w-2xl mx-auto font-medium">Nous avons créé Fansqwad parce que l'Afrique regorge de talents qui ne sont pas payés à leur juste valeur par les plateformes étrangères.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            className="p-10 glass-emerald rounded-[2.5rem] group hover:border-emerald-accent/50 transition-all hover:-translate-y-2 border border-white/5"
          >
            <div className="w-16 h-16 bg-emerald-accent/20 rounded-2xl flex items-center justify-center mb-8 text-emerald-accent group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(25,195,125,0.2)]">
              {f.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{f.title}</h3>
            <p className="text-white/50 leading-relaxed font-medium">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Monetization = () => (
  <section className="py-32 bg-off-black border-y border-white/5 px-6 md:px-12 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-emerald-accent/[0.02] -z-10" />
    <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-accent/10 rounded-full blur-[120px] -z-10" />
        
        {/* Floating 3D Wallet UI */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative glass-emerald p-10 rounded-[3rem] glow-emerald max-w-sm mx-auto z-10 border border-white/10"
        >
          <div className="flex justify-between items-center mb-10">
            <div className="text-[10px] font-black text-emerald-accent tracking-widest uppercase italic">Afrique Centrale & Ouest</div>
            <Wallet className="w-6 h-6 text-emerald-accent" />
          </div>
          <div className="mb-10">
            <div className="text-[10px] text-white/40 font-black mb-2 uppercase tracking-widest">Gains Cumulés</div>
            <div className="text-5xl font-black italic tracking-tighter italic">2 450 000 FCFA</div>
          </div>
          <button className="w-full py-5 btn-luminous rounded-2xl font-black text-base transition-all active:scale-95 flex items-center justify-center gap-2">
            RETIRER PAR MOBILE MONEY
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Subscription Card Mockup */}
        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-10 -right-4 md:-right-10 glass-emerald p-8 rounded-[2rem] w-72 border-emerald-accent/20 z-20 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-accent text-off-black flex items-center justify-center shadow-lg">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-tight">Contenu VIP</div>
              <div className="text-[10px] text-white/40 font-bold uppercase">Accès Immédiat</div>
            </div>
          </div>
          <div className="text-2xl font-black italic mb-6">15 000 FCFA <span className="text-[10px] text-white/30 uppercase tracking-widest ml-1 italic font-bold">Abonnement</span></div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
             <div className="text-[9px] font-black uppercase text-emerald-accent mb-2">Statut du fan</div>
             <div className="h-1.5 bg-emerald-accent rounded-full w-full" />
          </div>
        </motion.div>
      </div>

      <div>
        <span className="text-emerald-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Conversion</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight uppercase tracking-tighter">Monétise <span className="text-gradient-metal">ton influence</span> sans limites.</h2>
        <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">
          Dites adieu aux virements impossibles et aux banques capricieuses. Fansqwad intègre tous les réseaux de <span className="text-emerald-accent font-bold">Mobile Money</span> majeurs. Que tu sois en Côte d'Ivoire, au Sénégal, au Mali ou au Cameroun, tes fans te paient, et tu encaisses.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white/[0.03] border border-white/5 rounded-[1.5rem]">
            <div className="text-emerald-accent font-black text-2xl mb-2 italic">95%</div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Revenus reversés</p>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/5 rounded-[1.5rem]">
            <div className="text-emerald-accent font-black text-2xl mb-2 italic">&lt; 24h</div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Vitesse de retrait</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CommunitySection = () => (
  <section className="py-32 px-6 md:px-12 bg-linear-to-b from-off-black to-emerald-deep/20 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-full h-full bg-emerald-accent/[0.01] -z-10" />
    <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div className="order-2 md:order-1 relative flex justify-center">
        <div className="absolute inset-0 bg-emerald-accent/10 blur-[120px] -z-10" />
        <div className="relative w-80 h-80 md:w-[550px] md:h-[550px]">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-emerald-accent/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 border border-emerald-accent/10 rounded-full"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full border-4 border-emerald-accent overflow-hidden shadow-[0_0_60px_rgba(25,195,125,0.4)] bg-emerald-deep">
              <img 
                src={COMMUNITY_CENTER_IMAGE} 
                alt="Fansqwad Ecosystem Tribal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {ORBIT_IMAGES.map((url, i) => {
            const deg = i * (360 / ORBIT_IMAGES.length);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-emerald-accent/60 bg-off-black overflow-hidden shadow-2xl"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translate(${window.innerWidth < 768 ? '160px' : '260px'}) rotate(-${deg}deg)`
                }}
              >
                <img src={url} alt={`Creator ${i}`} className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="order-1 md:order-2">
        <span className="text-emerald-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Connexion Unique</span>
        <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight uppercase tracking-tighter italic">Crée un lien <span className="text-gradient-metal">Sacré</span>.</h2>
        <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">
          Les réseaux sociaux classiques ne paient pas en Afrique. Ils se servent de ton talent sans jamais te rémunérer. Fansqwad change la donne : ici, tu es chez toi. Tu n'es plus l'esclave des algorithmes, tu es le chef de ton propre empire.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-accent/20 rounded-lg flex-shrink-0 flex items-center justify-center text-emerald-accent">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1 uppercase tracking-tight italic">Indépendance totale</h4>
              <p className="text-white/40 text-sm">Ne cours plus après les sponsors. Tes fans deviennent tes véritables mécènes.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-accent/20 rounded-lg flex-shrink-0 flex items-center justify-center text-emerald-accent">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1 uppercase tracking-tight italic">Audience Souveraine</h4>
              <p className="text-white/40 text-sm">Tes abonnés te suivent parce qu'ils t'aiment. Donne leur une raison de rester exclusifs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const PricingSection = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const plans = [
    {
      name: "Starter",
      price: "Gratuit",
      commission: "20%",
      desc: "Idéal pour commencer à bâtir votre empire sans risque financier.",
      features: ["Paiements Mobile Money", "Hébergement illimité", "Accès à la communauté"],
      popular: false
    },
    {
      name: "Rising Legend",
      price: "14.900 FCFA",
      period: "/mois",
      commission: "10%",
      desc: "Pour les créateurs en pleine expansion cherchant plus de revenus.",
      features: ["Frais réduits", "Support prioritaire", "Outils d'analyses avancés"],
      popular: true
    },
    {
      name: "Empire Master",
      price: "29.900 FCFA",
      period: "/mois",
      commission: "5%",
      desc: "La solution ultime pour les influenceurs leaders du marché.",
      features: ["Commission minimale", "Manager dédié", "Visibilité boostée platform"],
      popular: false
    }
  ];

  return (
    <section id="tarifs" className="py-32 px-6 md:px-12 container mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 uppercase tracking-tighter">Votre succès, nos règles de partage.</h2>
        <p className="text-white/50 max-w-xl mx-auto">Choisissez le plan qui correspond à l'envergure de votre ambition créative.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            className={`p-10 rounded-[2.5rem] border flex flex-col ${p.popular ? 'bg-emerald-deep/10 border-emerald-accent/50 glow-emerald' : 'bg-white/[0.02] border-white/5'}`}
          >
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{p.name}</h3>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-black text-emerald-accent">{p.price}</span>
              {p.period && <span className="text-white/30 text-sm font-bold uppercase">{p.period}</span>}
            </div>
            <div className="mb-8 p-3 bg-emerald-deep/20 rounded-xl border border-emerald-accent/10">
              <span className="text-emerald-accent font-bold text-sm tracking-tight uppercase">Commision: {p.commission} / transaction</span>
            </div>
            <p className="text-white/50 text-sm mb-8 leading-relaxed flex-1">{p.desc}</p>
            <ul className="space-y-4 mb-10">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <Check className="w-4 h-4 text-emerald-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={onOpenWaitlist}
              className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${p.popular ? 'btn-luminous' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
            >
              Sélectionner
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const DashboardSection = () => (
  <section className="py-32 px-6 md:px-12">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Un contrôle total. <br />Des analyses de précision.</h2>
        <p className="text-white/50">Suivez votre croissance minute par minute avec notre tableau de bord premium conçu pour les entrepreneurs créatifs.</p>
      </div>

      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="glass rounded-[2rem] border-white/5 overflow-hidden shadow-2xl p-6 md:p-10"
      >
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-xs font-bold text-white/20 tracking-widest uppercase">Fansqwad Creator Console v2.4</div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Revenus Totaux', val: '45 200 000 FCFA', highlight: 'text-emerald-accent' },
            { label: 'Nouveaux Fans', val: '+450', highlight: 'text-white' },
            { label: 'Engagement', val: '72%', highlight: 'text-white' },
            { label: 'Taux de Rétention', val: '89%', highlight: 'text-white' },
          ].map((stat, i) => (
            <div key={i} className="p-5 bg-white/[0.03] rounded-2xl border border-white/5">
              <div className="text-[10px] text-white/30 font-bold uppercase mb-2 leading-none">{stat.label}</div>
              <div className={`text-xl font-black ${stat.highlight}`}>{stat.val}</div>
            </div>
          ))}
        </div>

        <div className="h-64 relative bg-white/[0.02] rounded-2xl border border-white/5 flex items-end p-6 gap-2 overflow-hidden">
          {/* Fake Graph */}
          <div className="absolute inset-0 bg-linear-to-t from-emerald-deep/10 to-transparent" />
          {[40, 25, 60, 45, 80, 55, 90, 70, 85, 95, 80, 100].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.05, duration: 1 }}
              className="flex-1 bg-emerald-accent/20 border-t-2 border-emerald-accent relative group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 bg-emerald-accent px-2 py-1 rounded text-[8px] font-black text-off-black opacity-0 group-hover:opacity-100 transition-opacity">
                +{h*10}k
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const FinalCTA = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => (
  <section className="relative py-40 px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <img 
        src="https://monadia-bucket.sfo3.digitaloceanspaces.com/FANSQWAD/CREATORS.png" 
        alt="Creator Background" 
        className="w-full h-full object-cover grayscale opacity-50 contrast-125"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-emerald-deep/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-t from-off-black via-off-black/80 to-transparent" />
    </div>

    <div className="container mx-auto text-center max-w-3xl relative z-10">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-10 leading-tight tracking-tighter uppercase">Prêt à régner sur <span className="text-gradient-metal">ton audience ?</span></h2>
        <p className="text-xl text-white/70 mb-12 max-w-xl mx-auto">Rejoignez l'élite des créateurs qui transforment leur influence en une puissance souveraine.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={onOpenWaitlist} className="px-10 py-5 btn-luminous rounded-2xl font-black text-xl active:scale-95 group">
            Récupérer mon invitation
          </button>
        </div>
        <p className="mt-8 text-[10px] text-white/40 font-bold tracking-[0.4em] uppercase">Site disponible uniquement sur invitation</p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-off-black relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-[500px] bg-emerald-deep/10 blur-[150px] -z-10" />
    <div className="container mx-auto grid md:grid-cols-4 gap-12 mb-20 text-sm">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-8">
            <img src={LOGO_URL} alt="Fansqwad Logo" className="h-10 w-auto" />
            <span className="font-display font-black text-xl tracking-tighter text-white">FANSQWAD</span>
        </div>
        <p className="text-white/40 max-w-xs leading-relaxed font-medium">
          La plateforme souveraine pour l'économie créative d'Afrique. Libère ton talent, encaisse via Mobile Money.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-white/30">Légal</h5>
        <ul className="space-y-4 text-white/50">
          <li><a href="#" className="hover:text-emerald-accent">Conditions d'utilisation</a></li>
          <li><a href="#" className="hover:text-emerald-accent">Politique de confidentialité</a></li>
          <li><a href="#" className="hover:text-emerald-accent">Sécurité et paiements</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-white/30">Contact</h5>
        <ul className="space-y-4 text-white/50">
          <li><a href="mailto:support@fansqwad.com" className="hover:text-emerald-accent">support@fansqwad.com</a></li>
          <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> <span>Hébergé en Afrique</span></li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto flex flex-col md:row items-center justify-between border-t border-white/5 pt-10 text-xs font-bold text-white/20 tracking-widest">
      <p>&copy; 2026 FANSQWAD ENTERTAINMENT. TOUS DROITS RÉSERVÉS.</p>
      <div className="flex gap-8 mt-4 md:mt-0 uppercase">
        <a href="#" className="hover:text-emerald-accent">Twitter</a>
        <a href="#" className="hover:text-emerald-accent">Instagram</a>
        <a href="#" className="hover:text-emerald-accent">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Ticker />
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      </header>
      <main>
        <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <SocialProof />
        <Features />
        <Monetization />
        <CommunitySection />
        <PricingSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <DashboardSection />
        <FinalCTA onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
