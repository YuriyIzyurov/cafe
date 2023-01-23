import {
    HistoryBlock,
    HistoryContainer,
    HistoryContent,
    HistoryH1,
    HistoryH2,
    HistoryImgWrap, HistoryImgWrap2,
    HistoryImgWrap3,
    HistoryLink,
    HistoryP,
    HistoryWrapper
} from "./HistorySectionStyles";



const HistorySection = () => {
    return (
        <HistoryContainer id='history'>
            <HistoryWrapper>
                <HistoryBlock>
                    <HistoryImgWrap id='smoke'>
                        <img src='images/smoke.png'/>
                    </HistoryImgWrap>
                    <HistoryImgWrap2 id='tea'>
                        <img src='images/tea.png'/>
                    </HistoryImgWrap2>
                    <img src='images/history2.png'/>
                    <HistoryContent>
                        <HistoryH2>Погрузись</HistoryH2>
                        <HistoryH1>В нашу историю</HistoryH1>
                        <HistoryP>
                            С другой стороны постоянный количественный
                            рост и сфера нашей активности обеспечивает
                            широкому кругу (специалистов) участие в формировании
                            направлений прогрессивного развития.
                        </HistoryP>
                        <HistoryLink href='/history'>
                            <span>Больше о нас</span><span>-----</span>
                        </HistoryLink>
                    </HistoryContent>
                    <HistoryImgWrap3 id='branch'>
                        <img src='images/branch.png'/>
                    </HistoryImgWrap3>
                </HistoryBlock>
                <div style={{height: '110px'}}></div> {/*Для центрирования блока*/}
            </HistoryWrapper>
        </HistoryContainer>
    );
};

export default HistorySection