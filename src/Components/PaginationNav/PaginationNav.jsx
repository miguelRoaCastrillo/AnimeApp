import * as React from 'react';
import PropTypes from 'prop-types';

const PaginationNav = ({NumberPages, index}) =>{    

    const printPagesButtons = (NumberPages) => {
        
        const buttons = [];        

        if(NumberPages < 10){
            for(let i = 0; i < NumberPages; i++){
                buttons.push(
                    <li className="page-item">
                        <a href="https://google.com" className="page-link">
                            {i}
                        </a>
                    </li>                
                )
            }   
        }else if(NumberPages >= 10){
            //coloca las demas paginas
        }

        return buttons;     
    }

    return(
        <div className="containerPagination">
            <ul className="pagination">
                <li className="page-item">
                    <a href="https://google.com" className="page-link">Previous</a>
                </li>
                {NumberPages > 0 
                    ?
                        printPagesButtons(NumberPages)
                    :                     
                        <div class="alert alert-danger" role="alert">
                            The number of pages is 0 or theres another error!
                        </div> 
                }
                <li className="page-item">
                    <a href="https://google.com" className="page-link">Next</a>
                </li>
            </ul>
        </div>
    )   
}

PaginationNav.propTypes = {
    NumberPages: PropTypes.number,
    index: PropTypes.number
}

export default PaginationNav;