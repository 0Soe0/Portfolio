import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './Button';

type ContactInfo = {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  target?: string;
}

const contactInformation: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'so-phi-e@hotmail.com',
    href: 'mailto:so-phi-e@hotmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+598 93 317 347', 
    href: 'tel:+59893317347'
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    value: 'Sophia Facal',
    href: 'https://www.linkedin.com/in/sophia-ema-facal-becerra/',
    target: '_blank'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Canelones, UY',
    href: 'https://www.google.com/maps/place/Departamento+de+Canelones',
    target: '_blank'
  }
]

const Contact = ({ contactInformation }: { contactInformation: ContactInfo }) => (
  <div className='flex items-start space-x-4 flex-1'>
    <div className ='p-3 rounded-full bg-primary/10'>
      <contactInformation.icon className='w-6 h-6 text-primary' />
    </div>
    <div className='ml-4'>
      <h4 className='font-medium text-start'>{contactInformation.label}</h4>
        <a 
        href={contactInformation.href} 
        className='text-muted-foreground hover:text-primary transition-colors duration-500'
        target={contactInformation.target}
        >
          {contactInformation.value}
        </a>
    </div>
  </div>
)

type ContactFormType = {
  name: string;
  type: string;
  value: string;
  message: string;
}

const formFields: ContactFormType[] = [
  {
    name: 'name',
    type: 'text',
    value: 'Name',
    message: 'Enter your name...',

  },
  {
    name: 'email',
    type: 'email',  
    value: 'Email',
    message: 'Enter your email...',

  },
  {
    name: 'message',
    type: 'textarea', 
    value: 'Message',
    message: 'Enter your message...',

  }
]

const ContactForm = ({ contactForm: { name, type, value, message } }: { contactForm: ContactFormType }) => (
    <div>
      <label htmlFor={name} className='block text-sm font-medium mb-2'>{value}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={message}
          required
          className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-black dark:focus:ring-primary mb-4 resize-none'
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={message}
          required
          className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-black dark:focus:ring-primary mb-4'
        />
      )}
    </div>
  )

export const ContactSection = () => (
  <section id='contact' className='px-4 py-24 relative bg-secondary/30'>
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>
        Get in <span className='text-primary'>Touch</span>
      </h2>
      <p className='text-center text-white dark:text-muted-foreground mb-12 max-w-2xl mx-auto'>
        I'm always looking for new opportunities to learn and grow, so if you have any questions or just want to say hi, feel free to contact me!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='flex flex-col h-full gap-4 mt-6'>
          {contactInformation.map((contact, index) => (
            <Contact key={index} contactInformation={contact} />
          ))}
        </div>
        <div className='bg-card/10 dark:bg-card p-8 rounded-lg shadow-xs'>
          <h3 className='text-2xl font-semibold mb-6'>Send a message</h3>
          <form action="">
            {formFields.map((field, index) => (
              <ContactForm key={index} contactForm={field} />
            ))}
            <Button 
              type="submit" 
              className='w-full flex items-center justify-center gap2 mt-4'
            >
              Send message
              <Send size={16} className='ml-2'/>
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
) 