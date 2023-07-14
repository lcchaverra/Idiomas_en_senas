import ActivityImg1 from '/src/assets/9.jpg'
import ActivityImg2 from '/src/assets/2.jpg'
import ActivityImg3 from '/src/assets/3.jpg'
import ActivityImg4 from '/src/assets/4.jpg'
import ActivityImg5 from '/src/assets/5.jpg'

const Activities = () => {
  return (
    <>
    <div className="activities-container" id="activities">
      <h3>Actividades</h3>
       ipsum dolor, sit amet consectetur adipisicing elit. Quo molestias aliquam voluptates repudiandae officia vel ipsum odio, non similique, ea deserunt maiores nobis eaque? Blanditiis reprehenderit beatae voluptas ex illo.
      <div className="activities-content-container">
        <div className="activities-item">
          <div className="activitie-decoration"> <span className='activitie-line'>0</span>1</div>
          <img src={ActivityImg1} alt="Imagen de actividad numero 1" />
          <div className="activitie-text-container">
            <h4>Actividad 1</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam esse, quasi eligendi eius quod tempora dolorum facilis molestiae laborum saepe perspiciatis quaerat amet officiis, voluptates dolores quas. Exercitationem, architecto?
            </p>
          </div>
          </div>
        <div className="activities-item">
          <div className="activitie-decoration"> <span className='activitie-line'>0</span>2</div>
          <img src={ActivityImg2} alt="Imagen de actividad numero 2" />
          <div className="activitie-text-container">
            <h4>Actividad 2</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam esse, quasi eligendi eius quod tempora dolorum facilis molestiae laborum saepe perspiciatis quaerat amet officiis, voluptates dolores quas. Exercitationem, architecto?
            </p>
          </div>
          </div>
        <div className="activities-item">
          <div className="activitie-decoration"> <span className='activitie-line'>0</span>3</div>
          <img src={ActivityImg3} alt="Imagen de actividad numero 3" />
          <div className="activitie-text-container">
            <h4>Actividad 3</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam esse, quasi eligendi eius quod tempora dolorum facilis molestiae laborum saepe perspiciatis quaerat amet officiis, voluptates dolores quas. Exercitationem, architecto?
            </p>
          </div>
          </div>
        <div className="activities-item">
          <div className="activitie-decoration"> <span className='activitie-line'>0</span>4</div>
          <img src={ActivityImg4} alt="Imagen de actividad numero 4" />
          <div className="activitie-text-container">
            <h4>Actividad 4</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam esse, quasi eligendi eius quod tempora dolorum facilis molestiae laborum saepe perspiciatis quaerat amet officiis, voluptates dolores quas. Exercitationem, architecto?
            </p>
          </div>
          </div>
        <div className="activities-item">
          <div className="activitie-decoration"> <span className='activitie-line'></span>5</div>
          <img src={ActivityImg5} alt="Imagen de actividad numero 5" />
          <div className="activitie-text-container">
            <h4>Actividad 5</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam esse, quasi eligendi eius quod tempora dolorum facilis molestiae laborum saepe perspiciatis quaerat amet officiis, voluptates dolores quas. Exercitationem, architecto?
            </p>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Activities