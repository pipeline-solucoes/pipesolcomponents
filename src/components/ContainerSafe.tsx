import styled from 'styled-components';


export const ContainerSafe = styled.div`
        
    margin: 48px 0px; 

    @media (max-width: 600px) { 
        width: calc(100% - 32px) 
    }

    @media (min-width: 600px) {
        width: calc(100% - 48px) 
    }

    @media (min-width: 960px) {
        width: calc(100% - 54px); 
    }

    @media (min-width:1280px) {
        width: calc(100% - 72px); 
    }

    @media (min-width: 1920px) {
        width: 1200px; 
    }    
`; 
