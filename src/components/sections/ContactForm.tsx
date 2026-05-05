import { memo, useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const ContactForm = memo(() => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', service: 'gestao_trafego' });
  const [errors, setErrors] = useState({ name: '', email: '', whatsapp: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value) error = 'Nome é obrigatório';
      else if (value.trim().length < 3) error = 'Nome deve ter pelo menos 3 caracteres';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) error = 'Email é obrigatório';
      else if (!emailRegex.test(value)) error = 'Email inválido';
    } else if (name === 'whatsapp') {
      const digitsOnly = value.replace(/\D/g, '');
      if (!value) error = 'WhatsApp é obrigatório';
      else if (digitsOnly.length < 10 || digitsOnly.length > 11) error = 'WhatsApp deve ter 10 ou 11 dígitos';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isNameValid = validate('name', formData.name);
    const isEmailValid = validate('email', formData.email);
    const isWhatsappValid = validate('whatsapp', formData.whatsapp);

    if (isNameValid && isEmailValid && isWhatsappValid) {
      setIsSubmitting(true);
      
      const serviceLabel = {
        gestao_trafego: 'Gestão de Tráfego',
        seo: 'SEO Profissional',
        criacao_sites: 'Criação de Website'
      }[formData.service as keyof typeof serviceLabel];
      
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwmNyx73sqbntMqZnMaKZdPebAK9vgsEjibyhhkr9aZgQANgH8nBEwTl9KY0kOMXjI/exec";
      
      const formDataParams = new URLSearchParams();
      formDataParams.append('Data', new Date().toLocaleString('pt-BR'));
      formDataParams.append('Nome', formData.name);
      formDataParams.append('E-mail', formData.email);
      formDataParams.append('WhatsApp', formData.whatsapp);
      formDataParams.append('Serviço', serviceLabel);

      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataParams.toString(),
      })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
      });
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-on-primary/20 mt-12 text-balance"
      >
        <CheckCircle2 className="text-secondary mx-auto mb-6" size={64} />
        <h3 className="text-2xl font-bold text-on-primary mb-4">Recebemos sua solicitação!</h3>
        <p className="text-on-primary/70">Em breve um de nossos especialistas entrará em contato via WhatsApp.</p>
      </motion.div>
    );
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      onSubmit={handleSubmit} 
      className="max-w-xl mx-auto space-y-8 mt-12 text-left"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-balance">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-foreground text-xs font-black uppercase tracking-widest ml-1 opacity-50">Nome Completo</label>
          <input 
            id="name"
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-surface border ${errors.name ? 'border-destructive' : 'border-border/60'} rounded-xl p-4 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted/40 font-medium`}
            placeholder="Seu nome"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                className="text-destructive text-[10px] font-bold uppercase tracking-tight ml-1"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <label htmlFor="whatsapp" className="block text-foreground text-xs font-black uppercase tracking-widest ml-1 opacity-50">WhatsApp</label>
          <input 
            id="whatsapp"
            type="tel" 
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className={`w-full bg-surface border ${errors.whatsapp ? 'border-destructive' : 'border-border/60'} rounded-xl p-4 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted/40 font-medium`}
            placeholder="(11) 99999-9999"
          />
          <AnimatePresence>
            {errors.whatsapp && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                className="text-destructive text-[10px] font-bold uppercase tracking-tight ml-1"
              >
                {errors.whatsapp}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-2 text-balance">
        <label htmlFor="email" className="block text-foreground text-xs font-black uppercase tracking-widest ml-1 opacity-50">E-mail Corporativo</label>
        <input 
          id="email"
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-surface border ${errors.email ? 'border-destructive' : 'border-border/60'} rounded-xl p-4 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted/40 font-medium`}
          placeholder="seu@negocio.com.br"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
              className="text-destructive text-[10px] font-bold uppercase tracking-tight ml-1"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-4 pt-2 text-balance">
        <label className="block text-foreground text-xs font-black uppercase tracking-widest ml-1 opacity-50">Qual o foco do seu projeto?</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'gestao_trafego', label: 'Tráfego Pago' },
            { id: 'seo', label: 'SEO' },
            { id: 'criacao_sites', label: 'Websites' }
          ].map((s) => (
            <label 
              key={s.id}
              className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all ${formData.service === s.id ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border-border/60 text-muted hover:border-primary/40'}`}
            >
              <input 
                type="radio" 
                name="service" 
                value={s.id} 
                checked={formData.service === s.id}
                onChange={handleChange}
                className="hidden"
              />
              <span className="text-xs font-bold uppercase tracking-widest">{s.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="magnetic-btn relative overflow-hidden w-full bg-secondary text-on-primary py-5 rounded-2xl font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-8 group/submit"
      >
        <span className="relative z-10 flex items-center gap-3 group-hover/submit:text-white transition-colors duration-500 text-balance">
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
          ) : (
            <>
              <MessageCircle size={24} />
              Solicitar Consultoria
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-primary translate-y-full group-hover/submit:translate-y-0 transition-transform duration-500 ease-out" />
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
