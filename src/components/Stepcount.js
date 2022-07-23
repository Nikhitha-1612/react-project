import React,{useContext}  from 'react';
import {Stepper,StepLabel,Step} from '@material-ui/core'
import Planfrom  from '../Planfrom';
import Planform2 from '../Planform2';
import Planform3 from './Planform3';
import Planform4 from './Planform4';
// import {multiStepContext} from './Stepcontext';

function  Stepcount() {
    // const {currentStep,finalData}=useContext(multiStepContext);
    // function showStep(step){
    //     switch(step){
    //         case 1:
    //         return  <Planfrom />
    //         case 2:
    //             return <Planform2 />
    //         case 3: 
    //            return <Planform3 />
    //         case 4:
    //             return <Planform4 />
    //     }
    // }
return(
    <div className="form2">
        <div className="center-stepper">
            <Stepper style={{ width:'18%'}} activeStep= "1" orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                </Stepper>
                <Planfrom />
                <Planform2 />
                <Planform3 />
                <Planform4 />
                </div> 
                
    </div>
)
    
}

export default Stepcount;