import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
    id="tsparticles"
    options={{
      background: {
        image: "radial-gradient(#222, #000)"
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "connect",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          connect: {
            distance: 900,
            links: {
              opacity: 1
            }
          }
        },
      },
      particles: {
        color: {
          value: ["#e6dc87", "#70ffde"],
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "destroy",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 0,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
      emitters: [
      {
        position: {
          y: 50,
          x: -20
        },
        rate: {
          delay: 15,
          quantity: 1
        },
        size: {
          width: 0,
          height: 0
        },
        particles: {
          shape: {
            type: "images",
            options: {
              images: [
                {
                  src: "pizza.png",
                  width: 205,
                  height: 267
                },
              ]
            }
          },
          size: {
            value: 40
          },
          move: {
            speed: 5,
            outModes: {
              default: "destroy",
              left: "none"
            },
            direction: "right",
            straight: true
          },
          zIndex: {
            value: 0
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 5,
              sync: true
            }
          }
        }
      },
      {
        position: {
        y: 50,
        x: 50
      },
      rate: {
        delay: 3,
        quantity: 5
      },
      size: {
        width: 0,
        height: 0
      },
      particles: {
        color: {
          value: ["#e6dc87", "#70ffde"],
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "destroy",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 20,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      }
      }],
    }}
  />
  )
}

export default ParticleBackground;