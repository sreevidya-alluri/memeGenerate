import styled from 'styled-components'

export const Heading = styled.h1`
    color: #35469c;
    font-family: "Roboto";
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 40px;
`

export const CustomInput = styled.input`
    color: #5a7184;
    background-color: #ffffff;
    font-family: "Open Sans";
    height: 40px;
    border: 1px solid #d7dfe9;
    outline: none;
`

export const CustomSelect = styled.select`
    color: #1e293b;
    background-color: #ffffff;
    font-family: "Open Sans";
    height: 40px;
    border: 1px solid #d7dfe9;
    border-radius: 5px;
    padding: 10px;
    outline: none;
`

export const CustomOption = styled.option`
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 14px;
`

export const GenerateButton = styled.button`
    color: #ffffff;
    background-color: #0b69ff;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
`

export const CustomLabel = styled.label`
    color: #5a7184;
    background-color: #ffffff;
    font-family: "Open Sans";
    height: 40px;
`
export const MemeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:24px;`

export const TextContent = styled.p`
    color:#ffffff;
    font-size:${props => props.activeFontSizeId}px;
    font-weight:600;
    font-family:"Open Sans";`
