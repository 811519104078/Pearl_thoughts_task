
import image1 from './image 1.svg'
import image12 from './image 12.svg'
import image2 from './image 2.svg'

import image4 from './image 4.svg'
import image5 from './image 5.svg'
import image6 from './image 6.svg'
import image7 from './image 7.svg'

import image9 from './image 9.svg'
import image10 from './image 10.svg'
import image11 from './image 11.svg'
import image13 from './image 13.svg'
import image14 from './image 14.svg'
import image15 from './image 15.svg'
import heart from './heart-red-icon.jpg'
import search from './search-icon.png'
import bar from './search bar.png'
import line from './Line.png'


 

function App() {
  return (
    <div className="dog-breeds-container">
      <h2>
        <title>Dog Breeds</title>
      </h2>
      <div className="dog-breeds-dog-breeds">
        <div className="dog-breeds-dog1">
          <img src ={image1}alt="image1" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog3">
          <img src={image12}alt="image127465" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog6">
          <img src={image10} alt="image107470" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog2">
          <img src={image9} alt="image97473" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog4">
          <img src={image11} alt="image117476" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog5">
          <img src={image5} alt="image57479" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog7">
          <img src={image4} alt="image47482" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog10">
          <img src={image6} alt="image67485" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog8">
          <img src={image7} alt="image77488" className="dog-breeds-image3" />
        </div>
        <div className="dog-breeds-dog9">
          <img src={image2} alt="image27491" className="dog-breeds-image3" />
        </div>
        <img
          src={line}
          alt="Line7492"
          className="dog-breeds-line"
        />
        <span className="dog-breeds-text">
          <span>Favorites</span>
        </span>
        
        
        <div className="dog-breeds-dog11">
          <img src={image5} alt="image57498" className="dog-breeds-image13" />
        </div>
        <div className="dog-breeds-dog12">
          <img src={image13} alt="image137410" className="dog-breeds-image13" />
        </div>
        <div className="dog-breeds-dog13">
          <img src={image14} alt="image147410" className="dog-breeds-image13" />
        </div>
      <div className="dog-breeds-dog14">
          
          <img src={image15} alt className="dog-breeds-image13" />
        </div>
        
        <span className="dog-breeds-text2">
          <span>Dog Breeds</span>
        </span>
        <div className="dog-breeds-heartredicon3">
          <img
            src = {heart}
            alt="SVGCompoundPath7414"
            className="dog-breeds-svg-compound"></img>
            </div>
        <div className="dog-breeds-heartredicon4">
          <img
            src = {heart}
            alt="SVGCompoundPath7414"
            className="dog-breeds-svg-compound-path15"></img>
            </div>
          
        
        <img src={bar} alt='searchbar' className="dog-breeds-searchbar" />
        <span className="dog-breeds-text4">
          <span>Affenpinscher</span>
        </span>
        <div className="dog-breeds-button">
          <span className="dog-breeds-text6">
            <span>Search</span>
          </span>
          <div className="dog-breeds-searchicon">
            <div className="dog-breeds-frame-group1">
              <div className="dog-breeds-frame-group2">
                <img
                  src={search}
                  alt="SVGCompoundPath7414"
                  className="dog-breeds-svg-compound-path16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
      )
}



export default App;
