import "./Notice.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Notice() {
    const navigate = useNavigate();

    return (
        <div className="hiparent-div">
            <div className="hiparent-sub-1">
                <div className="text-colunm">
                    <h3>
                        <span className="hiparent-text-1">
                            Notice to Parent
                        </span>
                    </h3>
                    <h4 className="hiparent-important">
                        Important Privacy Notice for Learnable Kids
                    </h4>
                    <p>
                        Before your child dives into Learnable Kids, it's
                        crucial that you grasp how our web app gathers and
                        utilizes personal information, along with the privacy
                        tools at your disposal.
                    </p>
                    <h4 className="hiparent-important">
                        What Information We gather
                    </h4>
                    <p>
                        Learnable Kids collects data based on your child's
                        interactions with the web app, including details about
                        the device and search engine utilized. Here's what we
                        gather:
                    </p>
                    <ul>
                        <li>
                            Device specifics like model and operating system
                            version
                        </li>
                        <li>
                            Log information such as service usage details,
                            device events, and IP address
                        </li>
                        <li>
                            Unique identifiers like web app version numbers and
                            preferred language settings
                        </li>
                    </ul>
                    <p>
                        Regarding web app activity, we track the videos watched,
                        search queries, and other engagements with content and
                        advertisements. If your child utilizes audio features
                        like voice search, we briefly capture voice data solely
                        to facilitate the feature, promptly erasing it
                        afterward.
                    </p>
                    <h4 className="hiparent-important">
                        How We Utilize the Data
                    </h4>
                    <p>
                        The information we gather serves internal operational
                        functions like spam prevention, enforcing content
                        licenses, and enhancing service quality. We also
                        leverage it to tailor content for users, associating a
                        unique identifier with watched videos and search terms
                        to recommend relevant content.
                    </p>
                    <p>
                        Moreover, unique identifiers aid in providing contextual
                        advertising with features like ad frequency capping.
                        However, we do not engage in interest-based advertising
                        or re-marketing.
                    </p>
                    <p>
                        Learnable Kids strictly prohibits sharing your child's
                        personal information with third parties or making it
                        publicly accessible.
                    </p>
                    <h4 className="hiparent-important">Information Sharing</h4>
                    <p>
                        We uphold strict guidelines regarding sharing individual
                        user information:
                    </p>
                    <span className="hiparent-span">With Consent:</span>{" "}
                    <span className="hiparent-span-1">
                        We share individual user data with external entities
                        only with parental consent.
                    </span>
                    <br />
                    <span className="hiparent-span">
                        For Legal Compliance:
                    </span>{" "}
                    <span className="hiparent-span-1">
                        Data may be shared to comply with legal obligations or
                        respond to legal requests.
                    </span>
                    <br />
                    <span className="hiparent-span">
                        External Processing:
                    </span>{" "}
                    <span className="hiparent-span-1">
                        Trusted affiliates may process data on our behalf,
                        adhering to our instructions.
                    </span>
                    <h4 className="hiparent-important">
                        Parental Access and Controls
                    </h4>
                    <p>
                        {" "}
                        In the "Watch it again" section of the web app, you can
                        review recently watched videos. Parental settings allow
                        you to pause or clear watch and search history, altering
                        content recommendations accordingly. Additionally,
                        logging out and back in resets the web app-specific
                        identifiers tied to data collection.
                    </p>
                    <p>
                        For further details, consult the Learnable Kids Privacy
                        Notice and Parental Guide. We also provide a Disclosure
                        for Children, which outlines our data practices and is
                        recommended for review with your child.
                    </p>
                    <p>Dated: May 2, 2024</p>
                    <div className="flex justify-between mt-5 me-20 ml-20">
                        <a
                            href="#"
                            className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
                        >
                            <button
                                onClick={() => navigate(-1)}
                                type="button"
                                className="text-[#04031C] bg-white border-2 border-[#04031C] font-bold rounded-md text-xl p-2 me-5"
                            >
                                Back
                            </button>
                        </a>
                        <Link
                            to="/SignupForm"
                            className="text-2xl font-bold no-underline text-[#130E5D]"
                        >
                            <button
                                type="button"
                                className="text-[#04031C] font-bold rounded-md text-xl p-2 me-5 bg-yellow-400"
                            >
                                Sign Up
                            </button>
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Notice;
