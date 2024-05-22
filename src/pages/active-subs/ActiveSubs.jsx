import React, { useState } from 'react'
import AlertModal from '../../components/alert-modals/AlertModal'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate } from 'react-router-dom'
import SendTokenModal from '../../components/send-token-modal/SendTokenModal'
import ReactPaginate from 'react-paginate'

const ActiveSubs = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertTitle, setAlertTitle] = useState('Confirm')
    const [alertType, setAlertType] = useState('success')
    const [sendTokenModal, setSendTokenModal] = useState(false)

    const activeSubs = [
    {
        "id": 1,
        "name": "Ulick Fieldstone",
        "email": "ufieldstone0@tiny.cc",
        "unit": "493491272-X",
        "subUnit": "437171032-8"
      }, {
        "id": 2,
        "name": "Jeannine Risborough",
        "email": "jrisborough1@tmall.com",
        "unit": "761243210-2",
        "subUnit": "351565109-8"
      }, {
        "id": 3,
        "name": "Celina Eaglesham",
        "email": "ceaglesham2@apache.org",
        "unit": "076569153-1",
        "subUnit": "906500205-7"
      }, {
        "id": 4,
        "name": "Janis Doodney",
        "email": "jdoodney3@ted.com",
        "unit": "200239089-4",
        "subUnit": "521539820-8"
      }, {
        "id": 5,
        "name": "Leif Paynter",
        "email": "lpaynter4@tuttocitta.it",
        "unit": "309104380-0",
        "subUnit": "272605472-2"
      }, {
        "id": 6,
        "name": "Isidor Bligh",
        "email": "ibligh5@hhs.gov",
        "unit": "066029692-6",
        "subUnit": "100202486-2"
      }, {
        "id": 7,
        "name": "Laurella Suggey",
        "email": "lsuggey6@facebook.com",
        "unit": "848248463-X",
        "subUnit": "880929552-8"
      }, {
        "id": 8,
        "name": "Star Stummeyer",
        "email": "sstummeyer7@purevolume.com",
        "unit": "409503116-6",
        "subUnit": "200611327-5"
      }, {
        "id": 9,
        "name": "Shelby Tonbye",
        "email": "stonbye8@twitpic.com",
        "unit": "301507845-3",
        "subUnit": "792304526-7"
      }, {
        "id": 10,
        "name": "Daniela Spavon",
        "email": "dspavon9@princeton.edu",
        "unit": "956537047-0",
        "subUnit": "176141868-8"
      }, {
        "id": 11,
        "name": "Merline Elsley",
        "email": "melsleya@tinypic.com",
        "unit": "704836775-X",
        "subUnit": "348609132-8"
      }, {
        "id": 12,
        "name": "Martie Knightley",
        "email": "mknightleyb@discuz.net",
        "unit": "520424219-8",
        "subUnit": "254062629-7"
      }, {
        "id": 13,
        "name": "Gwendolen Fakeley",
        "email": "gfakeleyc@dion.ne.jp",
        "unit": "671153777-7",
        "subUnit": "391687737-2"
      }, {
        "id": 14,
        "name": "Ravi Comazzo",
        "email": "rcomazzod@prnewswire.com",
        "unit": "956617866-2",
        "subUnit": "908661849-9"
      }, {
        "id": 15,
        "name": "Ronnie Odeson",
        "email": "rodesone@icio.us",
        "unit": "673082239-2",
        "subUnit": "469551873-2"
      }, {
        "id": 16,
        "name": "Ansell Kornyakov",
        "email": "akornyakovf@cbslocal.com",
        "unit": "080028187-X",
        "subUnit": "140886563-7"
      }, {
        "id": 17,
        "name": "Johannes Varnals",
        "email": "jvarnalsg@census.gov",
        "unit": "372671543-6",
        "subUnit": "033865739-8"
      }, {
        "id": 18,
        "name": "Tallulah Hundell",
        "email": "thundellh@yelp.com",
        "unit": "841518272-4",
        "subUnit": "445433070-0"
      }, {
        "id": 19,
        "name": "Ellissa Lorent",
        "email": "elorenti@alibaba.com",
        "unit": "064009552-6",
        "subUnit": "460351493-X"
      }, {
        "id": 20,
        "name": "Alfred Tanser",
        "email": "atanserj@apple.com",
        "unit": "684113127-4",
        "subUnit": "913238916-7"
      }, {
        "id": 21,
        "name": "Shellysheldon Bolton",
        "email": "sboltonk@mlb.com",
        "unit": "111658704-1",
        "subUnit": "085005011-1"
      }, {
        "id": 22,
        "name": "Gardner Colliford",
        "email": "gcollifordl@oracle.com",
        "unit": "590570764-2",
        "subUnit": "198590859-X"
      }, {
        "id": 23,
        "name": "Ardisj Lynam",
        "email": "alynamm@phoca.cz",
        "unit": "394656503-4",
        "subUnit": "458788044-2"
      }, {
        "id": 24,
        "name": "Malorie Buckston",
        "email": "mbuckstonn@people.com.cn",
        "unit": "981214399-8",
        "subUnit": "586305847-1"
      }, {
        "id": 25,
        "name": "Rayner Ornillos",
        "email": "rornilloso@wp.com",
        "unit": "974005140-5",
        "subUnit": "553846443-1"
      }, {
        "id": 26,
        "name": "Joycelin Capelin",
        "email": "jcapelinp@123-reg.co.uk",
        "unit": "605705770-8",
        "subUnit": "647929894-2"
      }, {
        "id": 27,
        "name": "Dannel Hanington",
        "email": "dhaningtonq@google.com",
        "unit": "025841453-7",
        "subUnit": "503060509-6"
      }, {
        "id": 28,
        "name": "Ruddy Showen",
        "email": "rshowenr@yale.edu",
        "unit": "372585929-9",
        "subUnit": "832280319-2"
      }, {
        "id": 29,
        "name": "Heath Bennington",
        "email": "hbenningtons@si.edu",
        "unit": "136180859-4",
        "subUnit": "127824217-1"
      }, {
        "id": 30,
        "name": "Elonore Lindeberg",
        "email": "elindebergt@thetimes.co.uk",
        "unit": "591556798-3",
        "subUnit": "302516871-4"
      }, {
        "id": 31,
        "name": "Jacob Lennard",
        "email": "jlennardu@utexas.edu",
        "unit": "167960972-6",
        "subUnit": "421372129-9"
      }, {
        "id": 32,
        "name": "Gibb Sandercock",
        "email": "gsandercockv@t-online.de",
        "unit": "837775274-3",
        "subUnit": "266622134-2"
      }, {
        "id": 33,
        "name": "Fay Aizic",
        "email": "faizicw@rediff.com",
        "unit": "122838626-9",
        "subUnit": "893305231-3"
      }, {
        "id": 34,
        "name": "Terence Rodgman",
        "email": "trodgmanx@seesaa.net",
        "unit": "811391645-8",
        "subUnit": "821873462-7"
      }, {
        "id": 35,
        "name": "Benton Eccleshall",
        "email": "beccleshally@typepad.com",
        "unit": "814001038-3",
        "subUnit": "627262600-2"
      }, {
        "id": 36,
        "name": "Bridget Lorking",
        "email": "blorkingz@bravesites.com",
        "unit": "049430387-5",
        "subUnit": "140837006-9"
      }, {
        "id": 37,
        "name": "Valaree Carnson",
        "email": "vcarnson10@pen.io",
        "unit": "750334300-1",
        "subUnit": "726868418-5"
      }, {
        "id": 38,
        "name": "Lori Brantl",
        "email": "lbrantl11@facebook.com",
        "unit": "760601201-6",
        "subUnit": "385126304-9"
      }, {
        "id": 39,
        "name": "Bea Velez",
        "email": "bvelez12@earthlink.net",
        "unit": "122899764-0",
        "subUnit": "384663390-9"
      }, {
        "id": 40,
        "name": "Ruy Lannen",
        "email": "rlannen13@i2i.jp",
        "unit": "593087734-3",
        "subUnit": "217044490-4"
      }, {
        "id": 41,
        "name": "Suzette Tretwell",
        "email": "stretwell14@tripadvisor.com",
        "unit": "144738522-5",
        "subUnit": "507443658-3"
      }, {
        "id": 42,
        "name": "Allyce Dudding",
        "email": "adudding15@e-recht24.de",
        "unit": "147037145-6",
        "subUnit": "886240139-6"
      }, {
        "id": 43,
        "name": "Dewie Wiggington",
        "email": "dwiggington16@ustream.tv",
        "unit": "489124240-X",
        "subUnit": "757716853-X"
      }, {
        "id": 44,
        "name": "Miguel O'Dowd",
        "email": "modowd17@woothemes.com",
        "unit": "889246939-8",
        "subUnit": "773222960-6"
      }, {
        "id": 45,
        "name": "Lissa Coveney",
        "email": "lcoveney18@themeforest.net",
        "unit": "346547307-8",
        "subUnit": "157713751-5"
      }, {
        "id": 46,
        "name": "Fianna Rammell",
        "email": "frammell19@chron.com",
        "unit": "656792119-6",
        "subUnit": "748773746-2"
      }, {
        "id": 47,
        "name": "Eben Waldocke",
        "email": "ewaldocke1a@soundcloud.com",
        "unit": "964111664-9",
        "subUnit": "602507979-X"
      }, {
        "id": 48,
        "name": "Hernando Ellingsworth",
        "email": "hellingsworth1b@blogtalkradio.com",
        "unit": "209842348-9",
        "subUnit": "018591638-4"
      }, {
        "id": 49,
        "name": "Solomon Rosario",
        "email": "srosario1c@slate.com",
        "unit": "198216239-2",
        "subUnit": "927945407-2"
      }, {
        "id": 50,
        "name": "Bibbie Edmett",
        "email": "bedmett1d@about.me",
        "unit": "714647628-6",
        "subUnit": "314442014-X"
      }, {
        "id": 51,
        "name": "Maren Bettesworth",
        "email": "mbettesworth1e@china.com.cn",
        "unit": "039597679-0",
        "subUnit": "859711321-9"
      }, {
        "id": 52,
        "name": "Abbie Kimbell",
        "email": "akimbell1f@webmd.com",
        "unit": "328551776-X",
        "subUnit": "649037335-1"
      }, {
        "id": 53,
        "name": "Bonita Smidmor",
        "email": "bsmidmor1g@xinhuanet.com",
        "unit": "822333752-5",
        "subUnit": "172916744-6"
      }, {
        "id": 54,
        "name": "Mace Offiler",
        "email": "moffiler1h@google.ca",
        "unit": "185953515-1",
        "subUnit": "367128104-9"
      }, {
        "id": 55,
        "name": "Tansy Swatland",
        "email": "tswatland1i@reverbnation.com",
        "unit": "775106354-8",
        "subUnit": "742952355-2"
      }, {
        "id": 56,
        "name": "Shannen Fosten",
        "email": "sfosten1j@smh.com.au",
        "unit": "564760984-8",
        "subUnit": "903802820-2"
      }, {
        "id": 57,
        "name": "Orsa Joffe",
        "email": "ojoffe1k@blogtalkradio.com",
        "unit": "745595359-3",
        "subUnit": "496292654-3"
      }, {
        "id": 58,
        "name": "Faina Duddle",
        "email": "fduddle1l@about.com",
        "unit": "538110497-9",
        "subUnit": "050085701-6"
      }, {
        "id": 59,
        "name": "Athene Banishevitz",
        "email": "abanishevitz1m@soup.io",
        "unit": "732851317-9",
        "subUnit": "458148007-8"
      }, {
        "id": 60,
        "name": "Dunn Lancastle",
        "email": "dlancastle1n@fda.gov",
        "unit": "249932643-3",
        "subUnit": "914959313-7"
      }, {
        "id": 61,
        "name": "Dorella Tallman",
        "email": "dtallman1o@kickstarter.com",
        "unit": "627603675-7",
        "subUnit": "358604924-2"
      }, {
        "id": 62,
        "name": "Robin Feehan",
        "email": "rfeehan1p@ow.ly",
        "unit": "394266021-0",
        "subUnit": "714729567-6"
      }, {
        "id": 63,
        "name": "Roarke Dowsing",
        "email": "rdowsing1q@businessinsider.com",
        "unit": "118071856-9",
        "subUnit": "106188742-1"
      }, {
        "id": 64,
        "name": "Susanetta Beards",
        "email": "sbeards1r@craigslist.org",
        "unit": "711019755-7",
        "subUnit": "748834496-0"
      }, {
        "id": 65,
        "name": "Lona Berdale",
        "email": "lberdale1s@intel.com",
        "unit": "300173097-8",
        "subUnit": "149391573-8"
      }, {
        "id": 66,
        "name": "Lorens Elsay",
        "email": "lelsay1t@tamu.edu",
        "unit": "150781553-0",
        "subUnit": "856971915-9"
      }, {
        "id": 67,
        "name": "Taffy Pilch",
        "email": "tpilch1u@wix.com",
        "unit": "737104899-7",
        "subUnit": "864644711-1"
      }, {
        "id": 68,
        "name": "Eal Caplan",
        "email": "ecaplan1v@ocn.ne.jp",
        "unit": "541049747-3",
        "subUnit": "166122617-5"
      }, {
        "id": 69,
        "name": "Ramona Ferroni",
        "email": "rferroni1w@geocities.jp",
        "unit": "986449172-5",
        "subUnit": "235930032-6"
      }, {
        "id": 70,
        "name": "Flory Coppins",
        "email": "fcoppins1x@networkadvertising.org",
        "unit": "601226833-5",
        "subUnit": "205280995-3"
      }, {
        "id": 71,
        "name": "Rutledge Mundow",
        "email": "rmundow1y@marketwatch.com",
        "unit": "176765390-5",
        "subUnit": "224009917-8"
      }, {
        "id": 72,
        "name": "Mick Francescotti",
        "email": "mfrancescotti1z@howstuffworks.com",
        "unit": "778318074-4",
        "subUnit": "025498887-3"
      }, {
        "id": 73,
        "name": "Gallagher Ithell",
        "email": "githell20@a8.net",
        "unit": "798791390-1",
        "subUnit": "694757505-2"
      }, {
        "id": 74,
        "name": "Chevy Mathou",
        "email": "cmathou21@microsoft.com",
        "unit": "974822308-6",
        "subUnit": "821861515-6"
      }, {
        "id": 75,
        "name": "Marion Piggin",
        "email": "mpiggin22@berkeley.edu",
        "unit": "283291210-9",
        "subUnit": "683447724-1"
      }, {
        "id": 76,
        "name": "Cecilius Minci",
        "email": "cminci23@nbcnews.com",
        "unit": "910113176-1",
        "subUnit": "181112469-0"
      }, {
        "id": 77,
        "name": "Rayner Storie",
        "email": "rstorie24@reference.com",
        "unit": "746164522-6",
        "subUnit": "470530617-1"
      }, {
        "id": 78,
        "name": "Arlana Devanny",
        "email": "adevanny25@omniture.com",
        "unit": "825931789-3",
        "subUnit": "102033173-9"
      }, {
        "id": 79,
        "name": "Ashton Mellers",
        "email": "amellers26@sfgate.com",
        "unit": "091340859-X",
        "subUnit": "352603590-3"
      }, {
        "id": 80,
        "name": "Levey Chater",
        "email": "lchater27@examiner.com",
        "unit": "939441078-3",
        "subUnit": "860557926-9"
      }, {
        "id": 81,
        "name": "Thomasin Bruff",
        "email": "tbruff28@163.com",
        "unit": "154031254-2",
        "subUnit": "211473100-6"
      }, {
        "id": 82,
        "name": "Roley MacGeffen",
        "email": "rmacgeffen29@google.ca",
        "unit": "412298327-4",
        "subUnit": "655235616-1"
      }, {
        "id": 83,
        "name": "Haydon Yoseloff",
        "email": "hyoseloff2a@indiatimes.com",
        "unit": "545804793-1",
        "subUnit": "813757652-5"
      }, {
        "id": 84,
        "name": "Layton Furmagier",
        "email": "lfurmagier2b@elegantthemes.com",
        "unit": "367200271-2",
        "subUnit": "157681780-6"
      }, {
        "id": 85,
        "name": "Kermie Volage",
        "email": "kvolage2c@parallels.com",
        "unit": "609521012-7",
        "subUnit": "736094101-6"
      }, {
        "id": 86,
        "name": "Daniella Rubke",
        "email": "drubke2d@prnewswire.com",
        "unit": "877308096-9",
        "subUnit": "886343009-8"
      }, {
        "id": 87,
        "name": "Tierney Althorpe",
        "email": "talthorpe2e@slideshare.net",
        "unit": "173024448-3",
        "subUnit": "666697679-7"
      }, {
        "id": 88,
        "name": "Cointon Wortt",
        "email": "cwortt2f@edublogs.org",
        "unit": "648442602-3",
        "subUnit": "948521537-1"
      }, {
        "id": 89,
        "name": "Gizela Shropshire",
        "email": "gshropshire2g@cnet.com",
        "unit": "971098085-8",
        "subUnit": "407320383-5"
      }, {
        "id": 90,
        "name": "Ingelbert Rogliero",
        "email": "irogliero2h@linkedin.com",
        "unit": "108631880-3",
        "subUnit": "729794099-2"
      }, {
        "id": 91,
        "name": "Astrix Doughton",
        "email": "adoughton2i@cisco.com",
        "unit": "445484220-5",
        "subUnit": "729966820-3"
      }, {
        "id": 92,
        "name": "Emyle Rodinger",
        "email": "erodinger2j@marketwatch.com",
        "unit": "107447264-0",
        "subUnit": "813020028-7"
      }, {
        "id": 93,
        "name": "Jecho Stormonth",
        "email": "jstormonth2k@altervista.org",
        "unit": "663776065-X",
        "subUnit": "268972459-6"
      }, {
        "id": 94,
        "name": "Di Ferdinand",
        "email": "dferdinand2l@cafepress.com",
        "unit": "733361591-X",
        "subUnit": "571317756-4"
      }, {
        "id": 95,
        "name": "Sutherland De Blasi",
        "email": "sde2m@theguardian.com",
        "unit": "631588002-9",
        "subUnit": "795520683-5"
      }, {
        "id": 96,
        "name": "Bert Firman",
        "email": "bfirman2n@sphinn.com",
        "unit": "195397272-1",
        "subUnit": "064051350-6"
      }, {
        "id": 97,
        "name": "Lauree Sarjent",
        "email": "lsarjent2o@google.ca",
        "unit": "825016592-6",
        "subUnit": "835018536-8"
      }, {
        "id": 98,
        "name": "Pia Barnewille",
        "email": "pbarnewille2p@example.com",
        "unit": "092333480-7",
        "subUnit": "247943327-7"
      }, {
        "id": 99,
        "name": "Harold Lewisham",
        "email": "hlewisham2q@acquirethisname.com",
        "unit": "222255665-1",
        "subUnit": "922002843-3"
      }, {
        "id": 100,
        "name": "Bellanca Kynan",
        "email": "bkynan2r@cisco.com",
        "unit": "690258526-1",
        "subUnit": "687404035-9"
      }
    ]

    const [pageNumber, setPageNumber] = useState(0)

    const usersPerPage = 10
    const visitedPages = pageNumber * usersPerPage

    const displayUsers = activeSubs
        .slice(visitedPages, visitedPages + usersPerPage)
        .map((sub, index) => {
            return(
                <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                    <td class="px-6 py-4">{index +1}</td>
                    <td class="px-6 py-4">{sub.name}</td>
                    <td class="px-6 py-4">{sub.email}</td>
                    <td class="px-6 py-4">{sub.unit}</td>
                    <td class="px-6 py-4">{sub.subUnit}</td>
                </tr>
            )
        })

    const pageCount = Math.ceil(activeSubs.length / usersPerPage)

    const changePage  = ({selected}) => {
        setPageNumber(selected)
    }


  return (
    <div>
        <SideNav />
        <div className="w-[78%] ml-auto pb-5">
        <TopNav />
            <div className="">
                <div className="flex justify-between items-start mb-[3rem] bg-[#F2FCF7] px-[30px] py-[1rem]">
                    <div className="flex items-center gap-2">
                        <img src="./images/arrow-left.svg" alt="" onClick={() => navigate('/subscribe')} className='cursor-pointer' />
                        <p className="text-[28px] text-primary-color font-[600]">GotruTrade + GotruMonitor (Weekly)</p>
                    </div>
                    <button className="bg-[#2D3934] text-white px-5 py-3 rounded-[8px] text-[14px]" onClick={() => setSendTokenModal('By clicking the confirm button, 10 tokens will be sent to the selected members email.')} >Send Token</button>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-left">
                        <thead class="text-[14px] border-b">
                            <tr>
                                <th scope="col" class="px-6 py-3 th1 font-[700]">S/N</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Name</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Email</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Unit</th>
                                <th scope="col" class="px-6 py-3 font-[700]">Sub-unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayUsers}
                        </tbody>
                    </table>
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel = {'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName='flex items-center gap-9 mt-5 justify-end pr-[30px] paginationBtns'
                        activeClassName='bg-secondary-color text-white'
                        disabledClassName='bg-gray-500 cursor-not-allowed'
                    />
                </div>
            </div>
        </div>
        {
            sendTokenModal &&
            <SendTokenModal setAlertType={setAlertType} setAlertTitle={setAlertTitle} sendTokenModal={sendTokenModal} alertType={alertType} setMsg={setMsg} alertTitle={alertTitle} setSendTokenModal={setSendTokenModal}/>
        }

        {
            msg &&
            <AlertModal msg={msg} setAlertType={setAlertType} setAlertTitle={setAlertTitle} alertType={alertType} setMsg={setMsg} alertTitle={alertTitle}/>
        }
        
    </div>
  )
}

export default ActiveSubs