import React from 'react';
import { MailIcon, DownloadIcon } from 'lucide-react';

export default function StageReactSite() {
  const accentColor = "#162144"; // Bleu nuit presque noir
  const secondaryColor = "rgba(255, 251, 245, 0.80)"; // Blanc cassé légèrement transparent

  // Polices pour les blocs
  const blockTitleStyle = { fontFamily: "'Playfair Display', serif" };
  const blockTextStyle = { fontFamily: "'Lora', serif" };

  // État pour gérer le survol
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  // Au survol, on passe du simple fond beige à l'image rorschach + fond beige
  const getBlockBackground = (index) => {
    return hoveredIndex === index
      ? `linear-gradient(${secondaryColor}, ${secondaryColor}), url('/rorschach-texture.png')`
      : secondaryColor;
  };

  // Définition minimale de renderOverlay() pour éviter l'erreur "renderOverlay is not defined"
  // Si tu n'en as pas besoin, elle peut simplement renvoyer null
  const renderOverlay = (index) => null;

  // Conteneur extérieur
  const outerContainerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f5f5dc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: '"Times New Roman", serif'
  };

  // Header
  const headerStyle = {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundColor: '#f5f5dc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Image du cerveau en arrière-plan
  const brainImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.5,
    zIndex: 0
  };

  // Overlay de fondu sur les côtés
  const fadeOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: "linear-gradient(to right, #f5f5dc 0%, #f5f5dc 15%, transparent 50%, #f5f5dc 85%, #f5f5dc 100%)",
    pointerEvents: 'none',
    zIndex: 0.5
  };

  // Conteneur du contenu du header
  const headerContentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '24px',
    padding: '16px',
    height: '100%'
  };

  // Photo de profil (ovale)
  const photoStyle = {
    width: '160px',
    height: '200px',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover'
  };

  // Conteneur pour le bloc de droite (nom)
  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  };

  // Conteneur principal
  const containerStyle = {
    padding: '24px',
    maxWidth: '1024px',
    width: '100%'
  };

  // Style de base pour les blocs de contenu
  const baseBlockStyle = {
    position: 'relative',
    padding: '32px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${accentColor}`,
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.07)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    cursor: 'pointer',
    marginBottom: '40px',
    maxWidth: '900px'
  };

  // Effet au survol
  const blockHoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 14px 20px rgba(0, 0, 0, 0.12)'
  };

  // Sous-blocs
  const subBlockStyle = {
    marginBottom: '16px',
    padding: '16px',
    background: `linear-gradient(${secondaryColor}, ${secondaryColor}), url('/rorschach-texture.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${accentColor}`,
    borderRadius: '4px'
  };

  // Engrenages
  const gear1Base = {
    position: 'absolute',
    top: '-20px',
    left: '-10px',
    width: '100px',
    opacity: 0.9,
    zIndex: 0,
    transition: 'transform 0.5s ease'
  };

  const gear2Base = {
    position: 'absolute',
    top: '-20px',
    left: '-10px',
    width: '70px',
    opacity: 0.9,
    zIndex: 1,
    transition: 'transform 0.5s ease'
  };

  // Survol engrenages
  const getGearStyles = (blockIndex) => {
    if (hoveredIndex === blockIndex) {
      return {
        gear1: { ...gear1Base, transform: 'rotate(30deg)' },
        gear2: { ...gear2Base, transform: 'rotate(-30deg)', left: '-15px' }
      };
    }
    return {
      gear1: { ...gear1Base, transform: 'rotate(0deg)' },
      gear2: { ...gear2Base, transform: 'rotate(0deg)' }
    };
  };

  return (
    <div style={outerContainerStyle}>
      {/* HEADER */}
      <header style={headerStyle}>
        <img src="/cerveau.jpg" alt="Cerveau" style={brainImageStyle} />
        <div style={fadeOverlayStyle}></div>
        <div style={headerContentStyle}>
          {/* Photo profil à gauche */}
          <img src="/Photo CV.jpg" alt="Profil Alice" style={photoStyle} />
          {/* Bloc de droite avec nom */}
          <div style={rightColumnStyle}>
            <img src="/nom.png" alt="Alice ARMATO-COLOGNE" style={{ width: '480px' }} />
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <div style={containerStyle}>
        {/* BLOC 1 : Mon Parcours, aligné à droite */}
        <div
          style={
            hoveredIndex === 0
              ? { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(0), 
                  ...blockHoverStyle, 
                  marginLeft: 'auto', 
                  marginRight: '0', 
                  textAlign: 'right' 
                }
              : { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(0), 
                  marginLeft: 'auto', 
                  marginRight: '0', 
                  textAlign: 'right' 
                }
          }
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          {renderOverlay(0)}
          {(() => {
            const { gear1, gear2 } = getGearStyles(0);
            return (
              <>
                <img src="/engrenage1.png" alt="" style={gear1} />
                <img src="/engrenage2.png" alt="" style={gear2} />
              </>
            );
          })()}
          <h2 style={{ ...blockTitleStyle, fontSize: '1.75rem', fontWeight: '700', marginBottom: '16px', color: accentColor }}>
            🌱 Mon Parcours
          </h2>
          <div style={{ marginBottom: '16px', borderBottom: `1px solid ${accentColor}`, paddingBottom: '16px' }}>
            <p style={{ ...blockTextStyle, fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
              Après un baccalauréat scientifique mention Bien, j’ai entamé une PASS (Première Année de Médecine), où j’ai acquis une rigueur de travail intense et une solide base en sciences médicales.
            </p>
          </div>
          <div style={{ marginBottom: '16px', borderBottom: `1px solid ${accentColor}`, paddingBottom: '16px' }}>
            <p style={{ ...blockTextStyle, fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
              Passionnée par la relation d’aide, j’ai poursuivi en LAS (Licence Accès Santé) avec une majeure en Psychologie, pour enrichir ma compréhension du comportement humain, des dynamiques relationnelles et des troubles psychiques.
            </p>
          </div>
          <div>
            <p style={{ ...blockTextStyle, fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
              Aujourd’hui en LAS3 à l’Université d’Aix-Marseille, j’adopte une approche pluridisciplinaire, mêlant sciences de la santé et sciences humaines pour aborder la clinique avec une perspective large.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px', fontSize: '1rem', color: '#333' }}>
              <li style={blockTextStyle}>2022 – 2023 : PASS – Première Année de Médecine</li>
              <li style={blockTextStyle}>2023 – 2025 : LAS2 & LAS3 Psychologie – Université Aix-Marseille</li>
              <li style={blockTextStyle}>Projet Voltaire & Certification PIX en cours</li>
            </ul>
          </div>
        </div>

        {/* BLOC 2 : Pourquoi ce stage ?, aligné à gauche */}
        <div
          style={
            hoveredIndex === 1
              ? { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(1), 
                  ...blockHoverStyle, 
                  marginLeft: '0', 
                  marginRight: 'auto', 
                  textAlign: 'left' 
                }
              : { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(1), 
                  marginLeft: '0', 
                  marginRight: 'auto', 
                  textAlign: 'left' 
                }
          }
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          {renderOverlay(1)}
          {(() => {
            const { gear1, gear2 } = getGearStyles(1);
            return (
              <>
                <img src="/engrenage1.png" alt="" style={gear1} />
                <img src="/engrenage2.png" alt="" style={gear2} />
              </>
            );
          })()}
          <h2 style={{ ...blockTitleStyle, fontSize: '1.75rem', fontWeight: '700', marginBottom: '16px', color: accentColor }}>
            🧠 Pourquoi ce stage ?
          </h2>
          <p style={{ ...blockTextStyle, fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
            Mon parcours m’a amenée à explorer à la fois les sciences médicales et la psychologie clinique. Hésitant entre médecine et psychologie, je souhaite m’immerger dans un environnement hospitalier pour comprendre les dynamiques de soin et affiner mon projet professionnel.
          </p>
        </div>

        {/* BLOC 3 : Expériences, aligné à droite */}
        <div
          style={
            hoveredIndex === 2
              ? { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(2), 
                  ...blockHoverStyle, 
                  marginLeft: 'auto', 
                  marginRight: '0', 
                  textAlign: 'right' 
                }
              : { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(2), 
                  marginLeft: 'auto', 
                  marginRight: '0', 
                  textAlign: 'right' 
                }
          }
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          {renderOverlay(2)}
          {(() => {
            const { gear1, gear2 } = getGearStyles(2);
            return (
              <>
                <img src="/engrenage1.png" alt="" style={gear1} />
                <img src="/engrenage2.png" alt="" style={gear2} />
              </>
            );
          })()}
          <h2 style={{ ...blockTitleStyle, fontSize: '1.75rem', fontWeight: '700', marginBottom: '16px', color: accentColor }}>
            💼 Expériences
          </h2>
          <div style={{ textAlign: 'left' }}>
            <div style={subBlockStyle}>
              <strong style={blockTextStyle}>Stage d’observation en psychologie clinique (prévu)</strong> <br />
              <span style={blockTextStyle}>Avril – Juillet 2025</span>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px', fontSize: '1rem', color: '#333' }}>
                <li style={blockTextStyle}>Observation en milieu hospitalier (CMP, service psy…)</li>
                <li style={blockTextStyle}>Immersion dans des suivis thérapeutiques</li>
                <li style={blockTextStyle}>Découverte du travail pluridisciplinaire</li>
              </ul>
            </div>
            <div style={subBlockStyle}>
              <strong style={blockTextStyle}>Collaboration interdisciplinaire – Thèse en pharmacie</strong> <br />
              <span style={blockTextStyle}>Mars 2025 – Présent</span>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px', fontSize: '1rem', color: '#333' }}>
                <li style={blockTextStyle}>Participation à une thèse sur l’accompagnement des troubles psychiques par les pharmaciens</li>
                <li style={blockTextStyle}>Apports théoriques en psychologie</li>
                <li style={blockTextStyle}>Contribution à la structuration et à la recherche documentaire</li>
              </ul>
            </div>
            <div style={subBlockStyle}>
              <strong style={blockTextStyle}>Bénévolat – Banque Alimentaire / Delta Festival</strong> <br />
              <span style={blockTextStyle}>Septembre 2023</span>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px', fontSize: '1rem', color: '#333' }}>
                <li style={blockTextStyle}>Accueil et information du public</li>
                <li style={blockTextStyle}>Gestion de stand, communication et dynamisme</li>
                <li style={blockTextStyle}>Travail en équipe dans un environnement très animé</li>
              </ul>
            </div>
            <div style={subBlockStyle}>
              <strong style={blockTextStyle}>Baby-sitting</strong> <br />
              <span style={blockTextStyle}>Régulier depuis 2021</span>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px', fontSize: '1rem', color: '#333' }}>
                <li style={blockTextStyle}>Activités quotidiennes, aide aux devoirs, sorties</li>
                <li style={blockTextStyle}>Adaptabilité aux besoins des enfants</li>
                <li style={blockTextStyle}>Relation de confiance avec les familles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOC "Me contacter" - centré */}
        <div
          style={
            hoveredIndex === 3
              ? { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(3), 
                  ...blockHoverStyle, 
                  margin: '0 auto', 
                  textAlign: 'center' 
                }
              : { 
                  ...baseBlockStyle, 
                  background: getBlockBackground(3), 
                  margin: '0 auto', 
                  textAlign: 'center' 
                }
          }
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          {renderOverlay(3)}
          {(() => {
            const { gear1, gear2 } = getGearStyles(3);
            return (
              <>
                <img src="/engrenage1.png" alt="" style={gear1} />
                <img src="/engrenage2.png" alt="" style={gear2} />
              </>
            );
          })()}
          <h2 style={{ ...blockTitleStyle, fontSize: '1.75rem', fontWeight: '700', marginBottom: '16px', color: accentColor }}>
            📩 Me contacter
          </h2>
          <p style={{ ...blockTextStyle, fontSize: '1rem', color: '#333' }}>
            alice.armato-cologne@etu.univ-amu.fr
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
            <button
              style={{
                padding: '8px 16px',
                fontWeight: '500',
                borderRadius: '4px',
                border: `1px solid ${accentColor}`,
                color: accentColor,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <MailIcon className="w-4 h-4 mr-2" /> Envoyer un mail
            </button>
            <button
              style={{
                padding: '8px 16px',
                fontWeight: '500',
                borderRadius: '4px',
                backgroundColor: accentColor,
                color: '#fff',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <DownloadIcon className="w-4 h-4 mr-2" /> Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
