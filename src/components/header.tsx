import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-0 md:py-0 mt-1 mb-1">
      <img
        className="h-20 w-20 ml-5 "
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAhAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYHAf/EADoQAAEEAQIDBgMFBwQDAAAAAAEAAgMEEQUSBiExE0FRcYGhImGRBzJyscEUIzM0QmLRQ1Ki8FOCg//EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA3EQACAgECAwUHBAECBwAAAAAAAQIDEQQhBRIxIjJBUXFhgZGhsdHwBhPB4UMzQhQVFjRSU/H/2gAMAwEAAhEDEQA/APcUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQHzIQDIQGma5Wr/x7EUf4ngJkkhVOfdi2bI5o5WB8T2vYejmnIQ4lFxeHsZoeBAEAQBAEAQBAEAQEe7dr0YxJambE0nALu8rxvBJXVO18sFllTPxXp0fKPtZT/azA98LzmRdhwvUS64X57CBNxg9x21qI83v/QD9VzzlmPCEu/P5ESbX9Vm6SxQ/gZn88rznZYhw/TR6psgzWLk/8a7O8eG8gfTovMtlmNNMO7BfAjfszeuSjJecRTzUZA6rZfG7v2HGfPx9V4ngTrhasTjkvKPFtiPDbsLZW/72fC76dD7Lvn8zNu4TB/6Tx6nQ6brdDUXiOvYb2uM9k7k76LtNMyr9JdTvNbefgWS9KwQBAEAQBAEAQEPVRG6oWzRmRhPNuwu9guLO6S055008HKWtAhmZ2unSjB/pzlp9VBlo1q9fZDs2LP1KWevYpvxNG5nzxkLrJpV6iq1bM0OvtZ96Zv5r0m5Eajqjee0l2PAIORGt16xIPhiwP7nIeqKRqc+y7rKxvkF4dZRFmc4nnKX+ODyQ9RbcHV7UuvU5a8chjjkJe8NO1owc5Pkuo9SlxCyC08lJ7+R6y3opj5U+oAgCAIAgCAID4cd6A4TiS1LU4vibBOYWSQgvAIAcfi6g8vBQzW53G+Uduq8vzde4nN1Br2bL0Ie3pvjH6f4yo8E8LIS7rw/b9/ucJLRtPllfHVl2bifuro+ilrdPBdqa/PQjsMkbi0fA7vDuSFafF9OumX+e03sitSnDHZP9jSUKk+Mv/ZD4kyDh3UrPPs5QD3u+Ee6YZVnxTUy6PHol/Za1eBLEuDM4N83FdKDKs9RdZ3pN+8vtM4MgpOEjbMrH95icWn6hdKGCHB1MbdkbW5LsDGXHJKkOjJAEAQBAEAQBAR9QeY6Nh7Ttc2JxBHccKDUycKZyXVJklKUrIp+aOCn0+W3A63Owyszze87j7r5WEtVyfvJvHnk3ZOhv9ppfAhMpOi/lppIs9zXcj6FT1cUuXe3IbNBRLpsbGz34vvCKcDv+4f1V2vi1Uu8sFOfDJruSz8jRqtwWKTo315WS8tuW5HXxCu16qmzuyRUnpbq+9EveAn1Y9KndakZHtmIG5wGeQVqDSWWQxWXgvpNe02DlE7tHeEbcqGev08Osi1HSXS6R/g0HiCaU4rVMfN5z7BVJcWi3iqDbJv8AgJLeckjZDPef++uyxw1hjcc7QPVT0S1tsk5RSXl4kNy09cX2sl1GW7AWuBbjkc591oFZGaHoQBAEAQBAEBqswixBJC4kB7S0kdeajtrVlbg/FYOoS5ZKS8Dnb+lz6fRkEFlz4ScFhZz+qx5cMtrrcK7Oy/B/c0IauFk05R3KGlq0OnW82WGPI27ZBjPkeh+qg0+g1dE/3FDnXsw/l1+R7frdNJck5cj9uy+PT5h80Viw6VgAjc7O1pzgZWVdFxtbnFxy+jWC/TOMq1ySUtuuSTqUdRjo/wBifua4fEM5wpNVCiLTpZ5RK1p/uIwGmudR/awWFuebe/wXX7Fjo/d5tvI9/fSt5PEsdBoNuxve7aGsdjp8lb4ZpIajMrPAra3USqaS8TooqdaqzOBgd7u5fQwpqpXZWDKlZOfVnJ8d8VaXHpFrT4bIltytw1sbdzRgjqegVujn51JLbz6f/TO1VlUqpV5y35HEaLxDqVKMSU53xtDucZO5h9CtRwhau0jDjO3TSxXLY9j0aw+5pNK1Lt7SevHI4NGBktBOPqsmyPLNxXgz6SmbnVGT8UiYuCUIAgCAIAgCAqtatmvCBE+LtAclkm4bh4AgHB9FWv1NFe1ssEkKrZb1rJRMm0vVswPZ2M7uRhlaAT6dHei5rmpLnqefT8yiST/x2xxnwfj/AAyn1LhExbpKD3RnrhuS3/I9FehrpY5blzIzbeFVN8+nk4S9nQ5eHUbjACyw/aP6X/Fn681PdwbQXda8em302+Rl08X11Oysz67/ANmVPi60CIJoQ6N7gDseW+3NY9n6ei041WNLye6/g3Icemu1ZWn6bff6nQ0+NBp9J8dSo50z3Z3SEBreWO7r7Kzw/g1umjKM5rd+H94/kq6zjtd2HCDz7f6z/BRanr2paq4i3ce5p6RMO1vlgfqtuvS1Vbpb+b/ML3GHdrLrtpS9y2Kqxpl2d4dFUlLQ3vbtH1KranX6Wt9uxfHJc0mi1M4vlrfwwX2g8HarqFfMbqbGg/FumyR5hoK8o4jp7I5reTq/hWq5+0sep6xpNV1HTKlR7g50EDIy4dCWtAz7KrOXNNy8zWpg4Vxg/BIlrkkCAIAgCAIAgKTiO3Q0+FlnVZWwV3PEXak8mk5xnuxy71BbS7dnHKJYWqC6lbY0qveriSAw2YHjIc3DgR/3wWTPQcsueiXK1+e4vLUKceWxZTIe+9poIE+6EdY7BJDfJ3Ud3XK9WutpeNTDK81t/T+TOJaVT3ol7nv/AGvmvYcYzSXAATWom4H9AL/8LVs/U+lj3It/BGFV+mNVLvyS+L+xhDoNGJ4c+axK4HPLDBn3WVZ+pbn/AKcEvXL+xsQ/TtWMTm36bE9lerH9ypGfm/LvzKo28f19n+THpsW6uAaCv/Hn13Mn2212c5Y4GjwwwKlnWarftT+LLyhpdMukYr3IwrTi9Ltrb7Du8saXNHmenurMODa2W7hj1eP7InxPSJ4jPL9m/wBDsOG9E1OtYbY/aTXhP342tB7Qdw5jl6Lc4ZonpFLnw2/LwM3X6lahx5dkvTc7FaRSCAIAgCAIAgK/V9ZoaPC2XULDYg7OxvUvI8AuowcnhEN19dMeabweZ8b8Uy8R6dLptWm2Oq9zXdpIQ55IORgA4HurlVKg8t7mRqOJOfZjHY43SbWvcPS79MsujbnJj/od5tPJSW0V295HFPEJV9GddL9oZt6RLX1TS5GWSBh8AD2u5+fJZGt4XbbW4Vtb+ZtaPjNEZKU/l/ZzVji1reUFN3/1fj8lnV/pf/2WfBF+z9RR/wAcPiyvn4p1KTIjMUX4WZ/PK0av07ood7MvV/bBQs49q5d3C933yQpNU1CYF0lybA8HYHstGrh+lp7laXuKNmv1Nvfm/p9Duvs54bh1yo+7bi7ZzZdrWk4bgd58ea6vulDsxJNLRC3M7Gep1NOpabGxu1gI+61rfyAVLtSeXuaGYxWIrBNa+d7hhgjj79/Nx9O5NjnLJC8OggCAIAgCAIDzb7U9L1C1fp2a1eaeBsJYezYXbHbs88eOR9Fa004pPJi8UpsnKMorKPPhC6KbZYa+Ij7wLSCPRW85MZxcHiWx9Y45aBYLc5zknkgz7TJr5nbRvY7d3OxyQbsxeQWgywRkO+S9yxlojur0X/frbfwOwmWSRvkvE6el9nUFysx77k7JXtDmsYAQwEZ5+Psqlur5HhI3NNo5WQ5ps6zhbTHcH0J6supNlEr94DIsPA6dMn6qrbqVPtNYNLTaOafJF5PjuJr1S4ZmUojVPLc95e6T57xyHlzVCeqknstjeo4RXOOJT7X0+O7+R0WjcUUNUmbWZvjsuziN3PPLPIhTVamFjwupS1XDL9PFze8fMvVYM8IAgCAIAgCA+ckBy2u6dp2t2ZmmSGaWLDXNyCWH05jqqtiTkXqLbKoJro/gzidV4LsVyXVZXFmeTX8/oenocKLNsO5JlyMtFdtfTF+3CKdmmdjNts7Se+OWMtPoQV6tdqIPdkr4BwrURzCHwb+5JZpOnTvOyaVnf2eQceRxz9ceamhxWfikZ936Q0/+1te9fnzIlzSmROaYZy+J7ctLm4Kl/wCbJdYlX/otyzy249Vn+V9DpDxTbZp8VaqxsUgYGvlPM5AxyHcqN+s53mCwb2h4D+1HF8s+xffr9CldYmdKZjI4ynq/PxH1VJyk3lvc34U1whyRjheRPtkubYLiTljc58cldy8SGtLs4MuFbkGna5Ws237IWB252CcZaR0HmpdFFzvUY9Svxj/s5e76nrNO1DdrMs1n74pBlrsEZ+q15RcXhnxZuXgCAIAgCAIDmftFuS0+FbDoJHRySPZGHNOCAXDPsCrGlipWrIPI69iarGyxBK+ObtPhe1xBAwtCzT1W7SRJC2cO6zqNI49sQgRavF+0R9O1jAD/AFHQ+yzruGyjvW8+xk6srl17L+K+/wBSVxPd0zUKFWfTpmO/f/G0ciBtd1b3LG1UXFYksM2eExkrn4rBQ1Hsjny9zWjaeZOFWqrnN9lZNu+yEI9p4MbNiF0UAZIHFrOeOasrQaiWMR+JS/5lpa28z+G5DfPN/p1JnDx5AKzXwe2Xekl+e4r2cdoXdi2bYWWHYdP2cLfAHcVbhwatd6TZSs49c+5FL5/YvKek6jqLzhjmsdgEvGBjyHP6ruVWip2xzP4/0U/+M1c+ssI6jS+EqtbD7X7148eePTp/3qq89RJrlguVezYhc23mTbft3OvrtDIY2t5ANAAXUehVl1Ni9PAgCAIAgCA5L7UI3P4Ukc3pHPG4+WcfqrWjeLUDyZ38nH+N2fZaviDSOq9Ayc5BIXMoRl3ln1O42Th3W16HxddDhvLyzKPPaNwSMuHMIwSZLM4tPayR2N2AFyksA9W0jhmpUZHLK3tJtoJc7mc/I93ovn7tRZY2m9vIsRxFbF5HG2Nu1jQ0eACrgxsTxV4+0nkZGzplxxz8PNdRjKTxFDOCZUlE1dj2te0EdHtLT9DzCnS5dmQPqbl6eBAEAQBAa39p/Rj1Q9WCFcqNuQPr3Iu2hkGHsdzBCKTi8o6WDm7fAuizRmNkdisN24dlKeR/9sqxHWWrruMIprP2bg86WpkfKaHOfUH9FPHX/wDlE85SotcB65DkxMr2Wj/xy4P/ACwpo62p9djzDKi1oWr1P5jTLbR/ubEXAerchTRurl0kMMhRjZMzfkYcOR81I91seGcnw3XcukhPuvV0B7g63BDBHJLI1oe0Fg6l3LoAOZ9F8wq5OTSRPlYDW3rf8KMVIj/qTDc8j5N6D1+ilVUY955/PP8APU4c/IlVdNgrydrh0s+MGaU7n+ncB8hgLtyeMLZeRw3kmLw8CAIAgCAIAgCA+YB6hAYuijd1aEPcs1mu09CQmBzMxNdw+64LzB7zEazpsNkbbVWGZvhIwOHuvVKS6MZRWWuCNCtuL5qIY8890L3M/I49lPHU3R8Tx4LjT9Mqaexra8XxNaGdo9xc/A7snnj5dFFKbl1PCZhcg+oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID/2Q=="
      />
      <Link href={"/"}>
        <span
          className=" container ml-2 inline-flex items-center gap-2.5 text-2xl font-bold  text-lime-700 md:text-3xl"
          aria-label="logo"
        >
          NoteBook
        </span>
      </Link>

      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav>
        <ul className="container flex items-center justify-between py-4 md:py-4 gap-6  ">
          <Link href={"/"}>
            <li className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Home
            </li>
          </Link>

          <Link href={"about"}>
            <li className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500 ">
              About{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </li>
          </Link>

          <Link href={"section"}>
            <li className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Section
            </li>
          </Link>

          <Link href={"notebook"}>
            <li className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              NoteBook
            </li>
          </Link>

          <Link href={"contact"}>
            <li className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Contact Us
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
