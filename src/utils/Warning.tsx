// Higher Order Components (HOC)
// Diğer componentleri prop alan componentlerdir.
//Normal componentlerden farklı olarak hem açılış hem kapanış etiketlerine sahiptirler.
type Props = {
    children: string
}

const Warning = ({children}: Props) => {
    return <div>{children}</div>
}

export default Warning;