const HeaderTitle = ({title}: {title: string}) => {
    return (
        <div className="relative w-full bg-white p-0 text-end">
            <h1 className='work-sans font-bold italic uppercase text-[11rem] text-neutral-500 leading-30.5'>
                {title}
            </h1>
        </div>
    )
}
export default HeaderTitle
