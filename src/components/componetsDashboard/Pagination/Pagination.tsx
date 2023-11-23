type PaginationProps = {
    elementsNumber: number;
    elementsPerPage: number;
    setCurrentPage: Function;
    currentPage: number
};


function Pagination({ elementsNumber, elementsPerPage, setCurrentPage, currentPage }: PaginationProps) {


    const pagesQuantity = Math.ceil(elementsNumber / elementsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= pagesQuantity; i++) {
        pageNumbers.push(i);
    };

    const previous = () => {
        if (currentPage === 1) return;
        else setCurrentPage(currentPage - 1);
    };

    const next = () => {
        if (currentPage === pagesQuantity) return;
        else setCurrentPage(+currentPage + 1)
    };

    const specificPage = (event: any) => {
        setCurrentPage(event.target.value)
    };


    return (
        <nav>
            <li>
                <button onClick={previous} disabled={+currentPage === 1}>
                    {"<"}
                </button >
                {
                    pageNumbers.map((number) => (
                        <button
                            key={number}
                            className={currentPage === number ? "" : ""}
                            onClick={specificPage}
                            value={number}
                        >
                            {number}
                        </button>
                    ))
                }
                <button onClick={next} disabled={+currentPage === +pagesQuantity}>
                    {">"}
                </button>
            </li>
        </nav>
    );
};


export default Pagination;