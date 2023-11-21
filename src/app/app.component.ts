import { Component } from '@angular/core';
import {
  Container,
  Engine,
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
} from 'tsparticles-engine';

import { loadSlim } from 'tsparticles-slim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id = 'tsparticles';

  particlesUrl = 'http://foo.bar/particles.json';

  particlesOptions = {
    background: {
      color: {
        value: 'none',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#3498db',
      },
      links: {
        color: '#73b6e2',
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    await loadSlim(engine);
  }
}

/* NPMs som används 

tsparticles-engine
tsparticles-slim
ngx-toastr
ng-particles
angular-feather

*/
