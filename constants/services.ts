import type { Service } from "@/interfaces/general";

import Identity from '@/assets/icons/Identity.vue'
import Social from '@/assets/icons/Social.vue'
import AudioVisual from '@/assets/icons/AudioVisual.vue'
import Events from '@/assets/icons/Events.vue'

export const services: Service[] = [
  {
    key: 'identidad',
    title: 'Creación de una identidad visual',
    subtitle: undefined,
    items: [
      {
        title: 'Diseño o rediseño de logotipo institucional.',
        description:
          'Conceptualización y desarrollo de un logotipo que refleje la esencia y valores de la marca.',
      },
      {
        title: 'Paleta cromática, tipografía y estilo gráfico.',
        description:
          'Definición de la paleta de colores, tipografías y elementos gráficos que representen la identidad visual de la marca.',
      },
      {
        title: 'Dirección de arte para medios digitales y redes sociales.',
        description:
          'Supervisión y creación de contenido visual para plataformas digitales, asegurando la coherencia con la identidad de la marca.',
      },
      {
        title: 'Diseño de sitio web corporativo.',
        description:
          'Creación de un sitio web que refleje la identidad de la marca y brinde una experiencia de usuario óptima.',
      },
      {
        title: 'Aplicaciones de marca: papelería, merchandising, entre otros.',
        description:
          'Diseño y producción de materiales de papelería y merchandising que refuercen la identidad de la marca.',
      },
      {
        title: 'Manual de identidad visual y normativas de uso.',
        description:
          'Elaboración de un manual que compile las directrices de uso de la identidad visual de la marca.',
      },
    ],
    icon: Identity,
  },
  {
    key: 'social',
    title: 'Gestión mensual de redes sociales y diseños',
    subtitle: undefined,
    items: [
      {
        title: 'Dirección estratégica de marketing digital.',
        description:
          'Desarrollo e implementación de estrategias de marketing digital alineadas a los objetivos de la marca.',
      },
      {
        title: 'Diseño gráfico profesional para redes sociales.',
        description:
          'Creación de contenido visual atractivo y coherente para las plataformas sociales de la marca.',
      },
      {
        title: 'Redacción creativa y planificación de contenido.',
        description:
          'Elaboración de copys creativos y planificación de calendarios de contenido.',
      },
      {
        title: 'Gestión de comunidad y canales digitales (Community Manager).',
        description:
          'Interacción y gestión de la comunidad en redes sociales, respondiendo a consultas y comentarios.',
      },
      {
        title: 'Diseño profesional de documentos corporativos.',
        description:
          'Creación de plantillas y documentos que reflejen la identidad visual de la marca.',
      },
      {
        title: 'Dirección de fotografía y video profesional.',
        description:
          'Supervisión y producción de sesiones fotográficas y de video que capturen la esencia de la marca.',
      },
    ],
    icon: Social,
  },
  {
    key: 'audiovisual',
    title: 'Servicio audiovisual y Ads',
    subtitle: undefined,
    items: [
      {
        title: 'Fotografía profesional.',
        description:
          'Captura de imágenes de alta calidad que reflejen la identidad de la marca.',
      },
      {
        title: 'Grabación y edición de videos.',
        description:
          'Producción de contenido audiovisual atractivo y profesional.',
      },
      {
        title: 'Gestión de Meta, TikTok y Google Ads.',
        description:
          'Planificación y ejecución de campañas publicitarias en plataformas digitales.',
      },
    ],
    icon: AudioVisual,
  },
  {
    key: 'eventos',
    title: 'Eventos corporativos y merchandising',
    subtitle: undefined,
    items: [
      {
        title: 'Planificación, ejecución y dirección de eventos.',
        description:
          'Gestión integral de eventos corporativos, desde la concepción hasta la ejecución.',
      },
      {
        title:
          'Gestión de proveedores: locaciones, sonido, catering, ambientación, entre otros.',
        description:
          'Coordinación y supervisión de todos los aspectos logísticos de los eventos.',
      },
      {
        title: 'Producción de merchandising, piezas gráficas y escenografía.',
        description:
          'Diseño y producción de materiales promocionales y escenografía para eventos.',
      },
      {
        title: 'Activaciones y experiencias alineadas a la identidad de marca.',
        description:
          'Creación de experiencias interactivas que refuercen la identidad de la marca durante los eventos.',
      },
    ],
    icon: Events,
  },
]