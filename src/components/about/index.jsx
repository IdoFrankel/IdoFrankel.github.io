import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const About = ({ loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {(
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    About Me
                  </span>
                )}
              </h5>
            </div>
            <div className="p-3 flow-root">
              <div className="-m-1 flex flex-wrap justify-center">
                {loading
                  ? renderSkeleton()
                  : (<div className="text-base-content text-opacity-60">
                        <span className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                        4th-year student at the CS faculty at the Technion, enrolled in the Big Data Analysis Program.
                        The focus of the program is to expand understanding int the fields of ML, Deep Learning, Image Processing, and NLP (was on the Dean's list on all last four semesters). 
                        <br /> Previously held a software developer position at GE Healthcare. During that internship, I was writing utility scripts in Python for easier integration
                         and build, parallelizing testing components, and designing a web application (Vue.js).
                         <br /> Before the Technion, I was a FullStack web developer (mainly Angular Framework) in the IAF's OFEK-324 unit for three years. 
                         During that time I had the opportunity to develop monitoring and management systems,
                         one of which was awarded a citation by OFEK-324 commander.
                        </span>
                    </div>)
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

About.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default About;
