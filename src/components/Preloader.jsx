import { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, [])

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Developer,</span>
                <span>Designer,</span>
                <span>Learner.</span>
            </div>
        </div>
    )
}

export default Preloader