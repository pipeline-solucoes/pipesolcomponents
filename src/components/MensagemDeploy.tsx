'use client';

import { Container, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import NavigationButton from './button/NavigationButton';

const ContainerImage = styled('div')(() => ({     
    height: '100%', 
    width: '100%',   
    position: 'relative',
    overflow: 'hidden',          
  }));

  const Content = styled('div')(() => ({ 
    width: 'auto',
    height: 'auto',           
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 'auto'
  }));  

  const ContentText = styled('div')(() => ({ 
    width: 'auto',
    height: 'auto',           
    textAlign: 'center',        
  }));  

  const ContentLinks = styled('div')(() => ({ 
    width: 'fit-content',
    height: 'auto',    
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  })); 

  const Titulo = styled('p')(() => ({ 
    fontSize: '22px',
    color: '#555f56'
  })); 
  
  const PStyled = styled('p')(() => ({ 
    fontSize: '20px',
    color: '#555f56'
  }));  

interface MensagemDeployProps {
    texto_contato: string;              
    url_contato: string;
}

const MensagemDeploy: React.FC<MensagemDeployProps> = ({url_contato, texto_contato}) => {            

    
    return(  
        
        <>
            <Container sx={{ width: '100vw', height: '100vh'}}> 
                <ContainerImage>      
                    <Image
                        src="/construcao.png"
                        alt='imagem do banner'
                        fill              
                        style={{ objectFit: 'contain'}}
                        priority={true}
                    />      
                </ContainerImage> 
            </Container>  

            <Content>
                <ContentText>
                    <Titulo><b>Estamos construindo algo incrível!</b></Titulo>
                    <PStyled>A Empresa Pipeline Soluções está trabalhando nos bastidores para trazer uma experiência completa e inovadora para você. O site está em processo de deploy, mas em breve você poderá navegar por um espaço feito com muito cuidado, dedicação e propósito.</PStyled>
                    <PStyled>Enquanto isso, fique à vontade para acompanhar nas redes sociais ou entrar em contato!</PStyled>
                    <PStyled>Estamos quase lá. Fique ligado!</PStyled>
                </ContentText>

                <ContentLinks>
                    
                    <NavigationButton
                        aria_label=''
                        layout='link'
                        width='auto'
                        text_decoration='underline'
                        url={url_contato}                        
                        color='#555f56'                                            
                    >
                        <h3>{texto_contato}</h3>
                    </NavigationButton>

                    <NavigationButton
                        aria_label=''
                        layout='link'
                        width='auto'
                        text_decoration='underline'
                        url='https://www.instagram.com/pipelinesolucoes/'                        
                        color='#555f56'
                    >
                        <h3>@pipelinesolucoes</h3>
                    </NavigationButton>
                </ContentLinks>
            </Content>
        </>
    );         
};

export default MensagemDeploy;
