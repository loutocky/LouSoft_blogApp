import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IParticlesProps } from 'ng-particles';
import { Engine } from 'tsparticles-engine';
import { loadFountainPreset } from 'tsparticles-preset-fountain';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  particlesOptions: IParticlesProps = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    background: {
      color: "#CAE8FF",
      image: "url('/assets/images/banner-bg2.jpg')",
    },
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: false, mode: "push" },
        onhover: {
          enable: false,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 50,
          speed: 5
        },
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#0bceaf" },
      line_linked: {
        color: "#0bceaf",
        distance: 50,
        enable: true,
        opacity: 0.8,
        width: 10
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "bounce",
        random: false,
        speed: 3,
        straight: false
      },
      number: { density: { enable: false, value_area: 800 }, value: 20 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle"
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  }

  particlesInit(engine: Engine): Promise<void> {
    return loadFountainPreset(engine);
  }
}
