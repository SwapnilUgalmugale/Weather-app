import { Accordion, 
    AccordionItem, 
    AccordionItemHeading, 
    AccordionItemPanel,
    AccordionItemButton
} from "react-accessible-accordion";



const Forecast = ({data}) => {
    return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.forecastResponse.list.slice(0,7).map((item,idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
            
            ))}
         

        </Accordion>
    </>
    )
}

export default Forecast;