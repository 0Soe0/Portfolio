import {Mail, Phone, MapPin, Linkedin, Send} from 'lucide-react';
import {cn} from '../lib/utils';
import { Button } from './Button';

export const ContactSection = () => {
  return (
    <>
      <section id = 'contact' className = 'px-4 py-24 relative bg-secondary/30'>
        <div className = 'container mx-auto max-w-5xl'>
          <h2 className = 'text-3xl md:text-4xl font-bold text-center mb-10'>
            Get in <span className = 'text-primary'>Touch</span>
          </h2>
          <p className = 'text-center text-white text-muted-foreground mb-12 max-w-2xl mx-auto'>
            I'm always looking for new opportunities to learn and grow, so if you have any questions or just want to say hi, feel free to contact me!
          </p>
          <div className = 'grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className = 'flex flex-col h-full gap-4 mt-6'>
              <div className = 'flex items-start space-x-4 flex-1'>
                <div className ='p-3 rounded-full bg-contact-text/20 dark:bg-primary/10'>
                  <Mail className = 'w-6 h-6 text-primary' />
                </div>
                <div className = 'ml-4'>
                  <h4 className = 'font-medium text-start'>Email</h4>
                  <a href="mailto:so-phi-e@hotmail.com" className = 'text-muted-foreground hover:text-primary transition-colors'>so-phi-e@hotmail.com</a>
                </div>
              </div>
              <div className = 'flex items-start space-x-4 flex-1'>
                <div className ='p-3 rounded-full bg-contact-text/20 dark:bg-primary/10'>
                  <Phone className = 'w-6 h-6 text-primary' />
                </div>
                <div className = 'ml-4'>
                  <h4 className = 'font-medium text-start'>Phone</h4>
                  <a href="tel:+59893317347" className = 'text-muted-foreground hover:text-primary transition-colors'>+598 93 317 347</a>
                </div>
              </div>
              <div className = 'flex items-start space-x-4 flex-1'>
                <div className ='p-3 rounded-full bg-contact-text/20 dark:bg-primary/10'>
                  <Linkedin className = 'w-6 h-6 text-primary' />
                </div>
                <div className = 'ml-4'>
                  <h4 className = 'font-medium text-start'>Linkedin</h4>
                  <a href="https://www.linkedin.com/in/sophia-ema-facal-becerra/" target = '_blank' className = 'text-muted-foreground hover:text-primary transition-colors'>Sophia Facal</a>
                </div>
              </div>
              <div className = 'flex items-start space-x-4 flex-1'>
                <div className ='p-3 rounded-full bg-contact-text/20 dark:bg-primary/10'>
                  <MapPin className = 'w-6 h-6 text-primary' />
                </div>
                <div className = 'ml-4'>
                  <h4 className = 'font-medium text-start'>Location</h4>
                  <a className = 'text-muted-foreground hover:text-white dark:hover:text-primary transition-colors'>Canelones, UY</a>
                </div>
              </div>
            </div>
            <div className = 'bg-card p-8 rounded-lg shadow-xs'>
              <h3 className = 'text-2xl font-semibold mb-6'>Send a message</h3>
              <form action="">
                <div>
                  <label htmlFor="name" className ='block text-sm font-medium mb-2'>Your name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder='Enter your name...' 
                    required 
                    className = 'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mb-4' />
                </div>
                <div>
                  <label htmlFor="email" className ='block text-sm font-medium mb-2'>Your email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='Enter your email...' 
                    required 
                    className = 'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mb-4' />
                </div>
                <div>
                  <label htmlFor="message" className ='block text-sm font-medium mb-2'>Your message</label>
                  <textarea  
                    id="message" 
                    name="message" 
                    placeholder='Enter your message...' 
                    required 
                    className = 'w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none mb-4' />
                </div>
                {/* <button 
                  type="submit" 
                  className = {cn('bg-contact-button dark:bg-primary cosmic-button w-full flex items-center justify-center gap2 mt-4',

                  )}
                > */}
                <Button 
                  type="submit" 
                  className={'bg-contact-button w-full flex items-center justify-center gap2 mt-4'}
                >
                  Send message
                 <Send size = {16} className = 'ml-2'/>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  ) 
}