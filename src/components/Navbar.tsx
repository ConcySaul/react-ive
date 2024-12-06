
function Navbar() {
    return (
        <>
            <nav className="fixed w-full z-10">
                <div className="flex justify-center gap-x-8 p-4 lg:justify-end md:mr-6 ">
                    <div className="transition transform duration-500 hover:scale-150">
                        <a href="">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#ff7ecf"
                                height="3em"
                                width="3em"
                            >
                                <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
                            </svg>
                        </a>
                    </div>

                    <div className="transition transform duration-500 hover:scale-150">
                        <a href="">
                            <svg
                                fill="#ff7ecf"
                                viewBox="0 0 32 32"
                                height="3em"
                                width="3em"
                            >
                                <path d="M6.368 15.671H3.715a.124.124 0 00-.124.124v1.296c0 .069.055.124.124.124H4.75v1.612s-.232.078-.874.078c-.758 0-1.817-.278-1.817-2.604 0-2.328 1.102-2.634 2.137-2.634.896 0 1.282.157 1.527.234.077.024.147-.053.147-.122l.296-1.253a.117.117 0 00-.047-.097c-.1-.07-.708-.411-2.245-.411-1.771 0-3.588.753-3.588 4.375s2.079 4.16 3.832 4.16c1.451 0 2.332-.62 2.332-.62.036-.02.04-.07.04-.093v-4.045a.125.125 0 00-.124-.124zm13.415-3.344H18.29a.124.124 0 00-.124.124v2.886h-2.328v-2.886a.124.124 0 00-.123-.124h-1.494a.124.124 0 00-.122.124v7.814c0 .069.055.125.122.125h1.494a.124.124 0 00.123-.125v-3.342h2.328l-.005 3.342c0 .069.055.124.122.124h1.494a.122.122 0 00.122-.124l.005-7.815a.122.122 0 00-.122-.124zm-11.631.177c-.532 0-.963.435-.963.972s.431.973.963.973.963-.435.963-.973a.967.967 0 00-.963-.972zm.857 2.507a.124.124 0 00-.122-.125H7.398c-.07 0-.129.07-.129.139v5.168c0 .151.094.197.217.197h1.342c.146 0 .185-.072.185-.2l-.001-1.572-.001-3.607zm16.555-.113h-1.482a.123.123 0 00-.122.125v3.831s-.376.277-.912.277c-.534 0-.677-.242-.677-.767v-3.342a.125.125 0 00-.123-.125h-1.503a.123.123 0 00-.123.125v3.595c0 1.555.866 1.935 2.057 1.935.977 0 1.767-.54 1.767-.54s.037.284.055.317c.016.034.06.068.108.068h.952a.124.124 0 00.123-.125l.004-5.25a.13.13 0 00-.126-.124zm4.058-.176c-.842 0-1.414.376-1.414.376v-2.646a.124.124 0 00-.122-.124h-1.499a.124.124 0 00-.122.124l-.004 7.815c0 .069.056.124.123.124h1.044c.046 0 .081-.024.108-.066s.063-.361.063-.361.611.581 1.771.581c1.362 0 2.142-.691 2.142-3.101 0-2.407-1.247-2.722-2.089-2.722zm-.584 4.404c-.514-.016-.862-.249-.862-.249v-2.476s.344-.211.767-.249c.534-.047 1.05.114 1.05 1.387-.003 1.342-.235 1.607-.954 1.586zm-15.714-.029c-.066 0-.233.026-.405.026-.549 0-.737-.256-.737-.587v-2.198h1.121a.123.123 0 00.123-.125v-1.204a.123.123 0 00-.123-.125h-1.121l-.002-1.48c0-.056-.03-.084-.094-.084H10.56c-.059 0-.092.026-.092.083v1.529s-.765.185-.817.2-.088.063-.088.119v.962c0 .069.056.125.123.125h.782v2.312c0 1.717 1.205 1.886 2.018 1.886.371 0 .815-.121.889-.147.045-.016.07-.062.07-.111l.001-1.057a.126.126 0 00-.122-.125z" />
                            </svg>
                        </a>
                    </div>

                    <div className="transition transform duration-500 hover:scale-150">
                        <a href="">
                            <svg
                                fill="#ff7ecf"
                                viewBox="0 0 1024 1024"
                                height="3em"
                                width="3em"
                            >
                                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0069.1 0L841.8 271l27.6-21.5-39.3-50.5L833.6 232z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
