import styled from 'styled-components';

// 스타일 컴포넌트 이름은 대문자 시작으로해서 "사용자정의+태그이름" 이런 느낌으로 하겠습니다!

// Home 페이지
export const HomeDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: inherit;

    .home_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 143px;
        }

        .dsc_wrapper {
            display: flex;
            flex-direction: column;
            align-content: center;  
            margin-top: 30px;

            h1 {
                margin: auto;
                font-size: 28px;
            }

            P {
                margin-top: 20px;
                font-size: 13px;
                text-align: center;
                line-height: 20px;
            }
        }
    }
`
// 메인으로 사용할 버튼
export const MainButton = styled.button`
    // 폰트 사이즈는 정의 하실때 속성값으로 정하는 걸로 했어요!
    font-size: ${(props) => props.fontSize};
    // padding: 10px 31px;
    border: 3px solid #ee793f;
    border-radius: 40px;
    background-color: white;
    /* box-shadow: 0 3px 0 #a5532f;

    :active {
        transform: translateY(3px);
        box-shadow: none;
    } */
`

export const ForBottomBar = styled.div`
    padding-bottom: 60px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`

// 상단바
export const Header = styled.div`
    padding-top: 20px!important;
    width: 100%;
    height: auto !important;
`

export const HeaderTop = styled.div`
    display: flex;
    position: relative;
    
    .headerlog {
        max-width: 100%;
        width:13%;
        height: auto;
        margin: 0 auto;
    }
`

export const HeaderRightDiv = styled.div`
    position: absolute;
    margin-top: 6px;
    right: 7%;
    display: flex;
`

export const HeaderRightIcon = styled.button`
    border: none;
    color: #A6A6A6;
    font-size: 140%;
    background-color: transparent;
    margin-left:16px;
`

export const HeaderTextBox = styled.ul`
    display:flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0 23px 0 23px;
    margin-top: 20px;
    color: #868687;
    font-size: 95%;
    border-bottom: 1px solid #D0CECE;

    .lifirst {
        color: black;
        border-bottom: 3px solid #EE793F;
        padding-bottom: 9px;
    }
`

export const MainDiv = styled.div`
    flex: 1;
    width: inherit;
    
`

export const MainTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    padding: 0 23px 10px 23px;
    border-bottom: 1px solid #D0CECE;
`

export const TopRightDiv = styled.div`
    margin-top: 6px;
    width: 100%;
`

export const TopRightText = styled.button`
    float: right;
    border: none;
    color: #828282;
    background-color: transparent;
`

export const MainMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 23px 20px 23px;
    border-bottom: 1px solid #D0CECE;
`
export const MiddleBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    border: 2px solid #BDBEBF;
    border-radius: 12px;
    height: 13vh;
    min-height:88px;
    width: 41vw;
    background-color: transparent;
`

export const MainBottom = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 23px 24px 23px;
    height: auto;

    .bottomposter {
        margin-top: 20px;
    }
`

export const FooterDiv = styled.div`
    position: absolute;
    height: 60px !important;
    width: inherit;
    border-top: 1px solid #D0CECE;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    bottom:0;
    left: 0;
    right: 0;
    background-color: white;

    .userimgcover {
        width: 40px;
        height: 40px; 
        border-radius: 70%;
        overflow: hidden;
    }
`

export const FooterIn = styled.div`
    height: inherit;
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 23px 0 23px;
`

export const FooterBtn = styled.button`
    border: none;
    background-color: transparent;

    .userimg {
        width: 100%;
        height: 100%;
        object-fit: cover;
}
`

// FindMember부터 해당

export const BackHeader = styled.div`
    width: inherit;
    height: 41px !important;
`

export const FindMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OrangeTextBox = styled.p`
    color: #EE783E;
    font-size: 13px;
    border: 2px solid #EE783E;
    padding: 1px 10px;
    border-radius: 5px;
`

export const MemberBoxCover = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const MemberBox = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #C9CACA;
    border-radius: 10px;
    padding: 10px 12px 7px 12px;
    margin: 0px 10px;
    background-color: transparent;
    &:hover {
        background-color: #ff9866;
        border: 2px solid #ff9866;
    };
`

export const ConditionBtn = styled.button`
    display: flex;
    align-items: center;
    padding : 3px 10px;
    border: 2px solid #C9CACA;
    border-radius: 20px;
    background-color: transparent;
`
export const SimilarMemberDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        margin-top: 35px;
    }

    .memberBox {
        width: 100vw;
        height: 62vh;
        max-width: 350px;
        margin-top: 35px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        -ms-overflow-style: none;
        overflow: scroll;
        
        ::-webkit-scrollbar{
            display:none;
        }

        .member {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: fit-content;
            border: 2px solid rgb(159, 163, 171);
            border-radius: 15px;
            padding: 15px;

            img {
                max-width: 130px;
            }

            .nameBox {
                display: flex;
                padding: 18px 0 21px 0;
                align-items: flex-end;
                font-size: 17px;

                >p {
                    padding-left: 3px;
                    font-size: 15px;
                }
            }

            .more {
                color: rgb(159, 163, 171);
                background-color: transparent;
                border: none;
            }

            :nth-child(odd) {
                margin: 10px 10px 10px 0px;
            }

            :nth-child(even) {
                margin: 10px 0px 10px 10px;
            }
        }
        
    }

`