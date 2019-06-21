# Global Switch (Property) Singapore Pte Ltd _v_ Arup Singapore Pte Ltd  

<table id="info-table"><tbody><tr class="info-row"><td class="txt-label" style="padding: 4px 0px; white-space: nowrap" valign="top">Case Number</td><td class="txt-body">Suit No 1147 of 2014</td></tr><tr class="info-row"><td class="txt-label" style="padding: 4px 0px; white-space: nowrap" valign="top">Decision Date</td><td class="txt-body">10 May 2019</td></tr><tr class="info-row"><td class="txt-label" style="padding: 4px 0px; white-space: nowrap" valign="top">Tribunal/Court</td><td class="txt-body">High Court</td></tr><tr class="info-row"><td class="txt-label" style="padding: 4px 0px; white-space: nowrap" valign="top">Coram</td><td class="txt-body">Quentin Loh J</td></tr><tr class="info-row"><td class="txt-label" style="padding: 4px 0px; white-space: nowrap" valign="top">Counsel Name(s)</td><td class="txt-body">Ho Chien Mien, Gregory Leong, Ng Chee Jian, Tan Li-Jie and Xu Xuekun (Allen &amp; Gledhill LLP) for the plaintiff; Daniel Chia Hsiung Wen, Tan Gim Hai Adrian, Amarjit Kaur, Annette Liu Jia Ying, Ker Yanguang, and Yeoh Jean Wern (Morgan Lewis Stamford LLC) for the defendant.</td></tr><tr class="info-row"><td class="txt-label" style="padding: 4px 0px; white-space: nowrap" valign="top">Parties</td><td class="txt-body">Global Switch (Property) Singapore Pte Ltd — Arup Singapore Pte Ltd</td></tr></tbody></table>

Building and Construction Law – Building and construction contracts – Design contracts – Mechanical and electrical design

Building and Construction Law – Construction torts – Negligence – Consultant

Building and Construction Law – Terms – Exclusion clauses – Incorporation

Building and Construction Law – Terms – Implied terms – Fitness for purpose warranty

Building and Construction Law – Scope of works – Variation

10 May 2019

### Quentin Loh J:

## Introduction

1       The plaintiff, Global Switch (Property) Singapore Pte Ltd (“GSS”), is part of the Global Switch group of companies (“Global Switch”) which owns and operates data centres in London, Paris, Amsterdam, Frankfurt, Madrid, Sydney and Singapore.[\[note: 1\]](#Ftn_1) The defendant, Arup Singapore Pte Ltd (“Arup”), is a firm of consultant engineers who provide, _inter alia_, design engineering consultancy services for mechanical and electrical (“M&E”) engineering systems. GSS alleges, and Arup accepts, that Arup stated that it is experienced in providing data centre solutions, technically sophisticated and employs technically qualified people.

2       This suit arises out of GSS’s project (“the Project”), embarked on sometime around 2008, to construct an extension (“the Extension”) to its existing data centre facility (“the Existing Facility”) at No 2, Tai Seng Avenue, Singapore. The Existing Facility originally comprised a seven-story building and began operations in 2001.[\[note: 2\]](#Ftn_2) Space was leased out to customers who required premises with a reliable and, importantly, uninterrupted electricity supply, specified cooling capacity and other services to suit the customers’ specified IT requirements for their sensitive IT equipment and computer banks (“IT equipment”). GSS’s customers included several international banks, Tier 1 telecommunications companies, as well as web-based service providers such as Microsoft.[\[note: 3\]](#Ftn_3) The Extension for new data centre space would comprise five storeys, from levels 3 to 7 (“L3 to L7”), which would extend out from the rear of the Existing Facility. Each of these storeys at L3 to L7 would have 800 m2, thereby resulting in a total additional area of 4,000 m2.

3       GSS appointed Arup as its M&E consultant for the Extension for an agreed fee of $595,000. Disputes arose and GSS sued Arup for damages in excess of $23.8 million, general damages, interest and costs. Arup counterclaimed for unpaid fees.

4       I find that GSS is only entitled to nominal damages of $1,000 for Arup’s breach of its obligations regarding the provision of additional cooling. I allow Arup’s counterclaims for a total of $71,347.60 under SCN003(a), SCN003(b), SCN005, SCN006 and SCN007.

## Background

### Technical concepts

5       It is necessary at this juncture to set out some background and technical terms in relation to data centres. Data centres must provide an uninterrupted electricity supply for the proper functioning of their customers’ IT equipment. It would be deleterious for their customers if electricity supply were to cease even for very short periods. Disruption is discussed in the context of milliseconds. Equally significant is the cooling capacity of the data space, which cannot fail for any sustained period of time (since failure would cause the sensitive IT equipment to overheat).

6       Data centres provide uninterrupted electricity supply and cooling through alternative back-up sources for no break power (“NBP”) and short break power (“SBP”). The essential difference is that SBP ordinarily experiences a short interruption of electricity of a few seconds during faults or maintenance.[\[note: 4\]](#Ftn_4) Because of this, mechanical equipment (such as chillers and Computer Room Air Conditioning units (“CRACs”), collectively known as the “Mechanical Load”) is typically supplied with SBP because it can tolerate short power disruptions, unlike IT equipment (also called the “IT Load”) that cannot. NBP is thus supplied for the IT Load.

7       Because an uninterrupted electricity supply is so crucial to the powering and cooling of their customers’ equipment, data centres install back-up electrical systems, in other words standby items of equipment that seamlessly “kick-in” and supply electricity the moment there is an interruption or anomaly in electricity supply coming off the power grid. Some of these back-up power systems can, to varying extents, “clean up” surges or drops in voltage, which occasionally occur in relation to the electricity coming off the power grid. Such anomalies are undesirable as they can interrupt the smooth functioning of IT equipment. I should mention that the frequency of alternating current from the grid (measured in Hertz (“Hz”)) can also fluctuate, although I am told that does not affect IT equipment.[\[note: 5\]](#Ftn_5)

8       The two relevant back-up systems in this case, each with their relative advantages and disadvantages, are the Static Uninterruptible Power Supply (“SUPS”); and the Diesel Rotary Uninterruptible Power Supply (“DRUPS”).

9       A SUPS system essentially comprises a battery and a generator. If electricity supply is interrupted, the SUPS units “kick-in” and supply autonomous power to support the critical IT Load for around five to ten minutes. This buys time for the emergency generator to come online. SUPS systems can also condition the voltage input through a wide range of voltage deviation and act as a frequency converter.[\[note: 6\]](#Ftn_6) Some disadvantages of SUPS systems include their weight and loading on floor as well as the space taken up to locate the batteries; the batteries also degrade and require regular replacement, in GSS’s case, typically every two years or so.[\[note: 7\]](#Ftn_7)

10     A DRUPS system, considered the more modern equipment, is also designed to provide uninterrupted, conditioned power to the critical IT Load if electrical supply is interrupted.[\[note: 8\]](#Ftn_8) It does so without the use of batteries. Instead, there is one compact inline assembly, which can be containerised, comprising a kinetic energy accumulator (akin to a flywheel) which is coupled through induction to an inner rotor which drives the alternator, all of which are kept constantly spinning. That assembly is also connected to the diesel engine. The kinetic energy accumulator, in this case the outer rotor, spins continuously at 1,500 rpm. If there is any interruption or anomaly in the electrical supply, the diesel engine is activated, but meanwhile the interruption is momentarily taken up by the kinetic energy in the constantly spinning outer rotor which continues to drive the inner rotor and alternator thereby supplying the electricity (this being analogous to the battery function in the SUPS system).[\[note: 9\]](#Ftn_9) When the diesel engine comes up to speed, it then engages and drives the alternator.

11     The DRUPS unit is connected to the power mains. Under normal circumstances the IT equipment is powered by the electricity from the mains that flows through the DRUPS unit, which act as a power conditioner to some extent to improve the quality of the electrical supply to the IT equipment.[\[note: 10\]](#Ftn_10) DRUPS units have power conditioning capability and can supply some frequency conditioning, but cannot condition output frequency in the manner that a double converter can.[\[note: 11\]](#Ftn_11) DRUPS units can supply both NBP as well as SBP.[\[note: 12\]](#Ftn_12) SUPS units cannot.[\[note: 13\]](#Ftn_13)

12     The backup system in GSS’s Existing Facility’s was a SUPS system. There were initially (from October 2001) 6 MTU diesel generator sets with 2000 kVA alternators and batteries in the Existing Facility as the take-up of space by customers was gradual. As at August 2007,[\[note: 14\]](#Ftn_14) only 50% of the Existing Facility’s space was occupied, however with Google and Merrill Lynch’s commitment to lease space by the end of 2007, thereby bringing the occupancy level to about 84%, GSS increased its capacity with the addition of another 6 MTU diesel generator sets (and batteries).[\[note: 15\]](#Ftn_15) A DRUPS system was to be used for the Extension for both NBP and SBP,[\[note: 16\]](#Ftn_16) given that it could deliver SBP concurrently.

13     Next, I come to the concept of redundancy. Essentially this means providing back-up to the back-up, because an uninterrupted power supply is so critical to data centres. Data centres vary in terms of the level of redundancy provided. For instance:

(a)     In an “N+1” configuration, “N” is the number of items of standby equipment (_eg_, generators or batteries combined with generators) required for emergency use when there is an interruption in electrical supply and “+1” represents an additional standby item of equipment for the redundancy capacity. If any of the “N” units fail, there is an additional unit to take its place. The “+1” is also useful when one of the “N” units have to be taken offline for maintenance or repairs.

(b)     In an “N+N” configuration, each generator is backed up by another generator, thereby ensuring that there is an equal number of backup generators available to take over the entire IT Load should all the main generators fail.[\[note: 17\]](#Ftn_17)

The higher the specifications, power requirements, capacity and reliability, the higher the capital expenditure to provide the same. A data centre operator would therefore have to make a commercial decision as to what segment of the market it would like to occupy, considering also the kind of customers in the market. If the market consisted mainly of tenants who required medium to lower-end specifications, then it would not make economic sense to incur the higher capital expenditure because such tenants would not be prepared to pay the higher rent that high-end customers would be prepared to.

14     GSS describes the SUPS units in the Existing Facility as being configured in an “enhanced” “N+1” arrangement,[\[note: 18\]](#Ftn_18) where each floor receives an “N+N” power feed from separate generator switchboards, under the criteria of no two generators simultaneously failing, which gives 8 MW of standby capacity.[\[note: 19\]](#Ftn_19)

15     Finally, brief mention should be made of two different kinds of cooling systems. IT equipment in a data centre generates a significant amount of heat and therefore requires adequate cooling to prevent overheating and failure.[\[note: 20\]](#Ftn_20) It may therefore be cooled by:

(a)     A supply air system where the room will be divided into hot and cold aisles.[\[note: 21\]](#Ftn_21) Cold air from the CRACs will be pushed into the cold aisles through a pressurised floor void and then over the IT equipment. After the cold air passes over the IT equipment, it absorbs the IT equipment’s heat and turns into hot air. This hot air is then ejected into a hot aisle before being extracted from the aisle by the CRACs, which will cool the hot air before returning the cooled air into the cold aisles.[\[note: 22\]](#Ftn_22) Thus, mixing of the cold and hot air will be minimised and the suite’s temperature can be controlled by manipulating the temperature of the cold air.

(b)     Alternatively, a return air system. This does not physically separate hot and cold air in the suites. Instead, the CRACs will supply overcooled air into the suite, with the aim of ensuring that the mixed air returning to the CRACs is maintained at a certain temperature.[\[note: 23\]](#Ftn_23)

16     Under Arup’s designs, the Extension’s cooling was to be provided by a combination of three 1,900 kW chillers and CRAC units in an “N+1” configuration.[\[note: 24\]](#Ftn_24) The chillers would provide the necessary cooling while the CRACs would be used to distribute the cool air to the IT equipment in the respective suites. The individual suites were to be cooled on a supply air system. On a return air basis the cooling capacity supplied would be much less.[\[note: 25\]](#Ftn_25)

### The contract between GSS and Arup

17     I now turn to the contract between GSS and Arup (the “Contract”). It is common ground that the Contract is comprised in two documents (with GSS relying on some implied terms arising therefrom).

18     The first is Arup’s eight-page Engineering Fee Proposal (omitting Appendix A Project Programme) dated 16 September 2008 (the “Fee Proposal”), and sent to GSS by email on 17 September 2008.[\[note: 26\]](#Ftn_26) This contained, _inter alia_, the following:

**3**      **Scope of Works**

…

The scope of the project is to provide five floors (L3 to L7) of new raised floor space each with 800m2 net lettable area @ **1** **_kw_****/m2 for a total** **_of_** **4,000m2** with an **_overall diversity of 0.9_**. New dedicated electrical plant comprising of Transformers, **Diesel Rotary UPS (DRUPS)** – located over the loading dock on new structural steel frame work similar to the existing gensets – will be provided. Similarly, a new **chilled water system** comprising of chillers, cooling towers, buffer tanks and associated pumps will be located on the roof of the new building.

\[emphasis added\]

19     The sub-paragraphs that followed from the above, set out in greater detail the scope of works. For ease of reference, I have ascribed roman numerals to these salient sub-paragraphs:[\[note: 27\]](#Ftn_27)

\[(i)\] Develop, review and agree the design brief to reflect the needs of Global Switch. Designs shall be based on design criteria agreed with Global Switch to suit local conditions, regulations and any restrictions imposed by the building fabric, structure and infrastructure.

\[(ii)\]    Review as-built drawings and survey the site to verify site dimensions and establish the level of existing services, in particular that the incoming electricity supplies have sufficient capacity and redundancy to meet the needs of Global Switch in this facility.

…

\[(iii)\]    Establish and agree electrical power density requirements for cabinet/racks, numbers and power consumption of cabinets/racks.

\[(iv)\]    Establish electrical capacity and cooling load requirements based on power densities and agreed spare capacity for expansion.

\[(v)\] Confirm the levels of redundancy required for electrical and mechanical plant and distribution systems (N+1).

\[(vi)\]    Agree the method of cooling (chilled water, cooling tower water, refrigerant). Agree DRUPS capacities and configurations.

…

\[(vii)\]    Develop space plans showing locations of main plant (transformers, DRUPS, cooling, etc) for approval.

\[(viii)\]    Prepare and issue tender documents for long lead items (transformers, DRUPS, chiller, cooling towers, etc).

…

\[(ix)\]    Assist with project budget cost estimates for the QS

…

\[(x)\] Prepare single line diagrams for mechanical, plumbing and electrical services.

…

\[(xi)\]    Prepare detailed design drawings and specifications for bidding/tendering.

…

\[(xii)\]    Carry out Value Engineering process if necessary

\[(xiii)\]    Witness testing and commissioning.

20     The second is GSS’s Purchase Order dated 17 September 2008 addressed to Arup. This laconically stated that it was for Mechanical & Electrical Professional Consultation for additional and alteration works and described six aspects under the heading “Items/Services/Goods Description”:[\[note: 28\]](#Ftn_28)

(a)    Conceptual/preliminary Design

(b)    Design Development

(c)    Contract documentation

(d)    Bidding Negotiation

(e)    Construction Phase

(f)    Testing and Commissioning

At the bottom of the Purchase Order, there is the notation: “Supplier quotation to be attached with purchase order upon submission”. The Purchase Order stated the agreed fee of $595,000, which was also the lump sum fee stated in the Fee Proposal.[\[note: 29\]](#Ftn_29)

21     Arup also contends that the Contract also incorporated the “ACEA Form Contract” pursuant to paragraph 8 of the Fee Proposal, which read:[\[note: 30\]](#Ftn_30)

**8**      **Terms of Engagement**

The above fee is based on the terms and conditions on the attached ACEA Form Contract with monthly invoices and payments on receipt.

It is not disputed that no such form was attached to the Fee Proposal. GSS denies that it has been incorporated into the Contract.

22     Besides Arup, as M&E consultant, GSS’s team of consultants for the Project were:

(a)     A W P Pte Ltd (“AWP”), the Project architects;

(b)     Babtie Asia Pte Ltd (“Babtie”), the Project structural engineers;

(c)     Turner & Townsend Pte Ltd (“T&T”), the Project quantity surveyors and GSS’s costs consultants.

The construction works for the Extension were awarded to Gammon Pte Ltd (“Gammon”) as the main contractor. BurnsBridge Sweett Pte Ltd (“BurnsBridge”) was GSS’s Project manager and superintending officer for the Extension.

### Original design of the Extension and sourcing for DRUPS units

23     For context, I now proceed to outline the principal events that led to the disputes. The facts surrounding these events are disputed and it will be necessary for me to consider the facts and allegations in detail later.

24     GSS avers that it required the Extension to have 4,000 kW (_ie_, 1 kW/m2 for a total of 4000m2) of NBP in an “N+1” configuration with a 0.9 diversity factor. As we shall see, a key part of this dispute centres on the parties’ differing interpretations of how diversity should be applied, which would affect what the NBP specification actually meant. However, this difference in application of the overall diversity did not feature when the Contract was entered into and when Arup developed its design brief in discussion with the other project consultants.

25     Arup also designed the cooling system for the Extension. GSS claims Arup failed to provide sufficient cooling capacity for the Extension. Arup denies this. Comparatively, more time at trial was spent on the NBP issues.

26     The expert witnesses gave evidence that the norm was to locate chillers (as distinct from the cooling towers), in the basement or lower floors of buildings, particularly in Singapore, in order to protect the equipment from the fairly constant rain that Singapore receives.[\[note: 31\]](#Ftn_31) However, the parties had no choice but to locate the Extension’s chillers on the roof due to space constraints.[\[note: 32\]](#Ftn_32) In the tender specifications that Arup issued for the chillers, it was specified that the chillers were to be located on the Extension’s roof, and that the chillers’ control panels were to meet the IP56 standard.[\[note: 33\]](#Ftn_33) An equipment’s IP rating indicates the amount of protection that it gets from the elements. The first digit in the rating specification denotes the degree that a piece of equipment will be protected from dust, while the second digit denotes the degree of protection that the equipment will get from water.[\[note: 34\]](#Ftn_34) The higher the numbers, the greater the degree of protection. Thus, at IP11, a piece of equipment will be exposed to all forms of moisture, and the degree of protection that it has from dust is so low that even birds will be able to fly in.[\[note: 35\]](#Ftn_35) The chillers themselves were housed in louvered “shipping containers” on the roof.[\[note: 36\]](#Ftn_36) Unfortunately, after the Extension was completed, the chillers experienced at least 12 failures over three years.[\[note: 37\]](#Ftn_37)

27     As the design development progressed, it was clear there were some perceived site constraints on available space for the Extension’s DRUPS units. The then proposed Extension, being tucked away at the rear of the building, comprised a rectangle and series of truncated triangles. There is little doubt that space was tight.[\[note: 38\]](#Ftn_38) The T&T report of August 2008 (No 3 Rev 1) (“T&T Cost Plan”) identified a location at L2 to place three (2 MVA) DRUPS units.[\[note: 39\]](#Ftn_39) A purpose-built steel structure was to be constructed at that location and upon which the three DRUPS units were to be placed. It appears, and this was not contradicted, that right from the start of the Project, AWP had ruled out constructing a platform for DRUPS units at a second location above the high voltage transformer and switchgear (“HV Transformer”) as it was considered too risky because piling would then have been required and it was the electrical supply point for both “A” and “B” 22 kV cables.[\[note: 40\]](#Ftn_40)

28     I pause to note that this does not mean it was impossible to get more space for the DRUPS equipment at that location. It is a question of balancing competing considerations. Generally speaking, giving more space to the equipment might mean cutting down on net floor area available for customer usage or, in this case, incurring higher costs for locating the DRUPS units in different locations. More relevantly, modern construction and technology would have made it possible to construct a platform for a DRUPS unit above the HV Transformer (as was in fact done later), but it would have incurred higher cost, required closer supervision during construction and entailed a longer time to do so.

29     Around July to August 2008, Arup was looking to place three containerised DRUPS units at the assigned location at L2. On 14 July 2008, GSS asked Arup to look at the DRUPS units manufactured by Piller and I note that the Piller technical data sheet provided in response showed its output rated power for NBP at 1,670 kVA/1,336 kW and SBP at 1,100 kVA/800 kW.[\[note: 41\]](#Ftn_41) On 22 August 2008, GSS also asked Arup to look at DRUPS units made by EuroDiesel and Hitec.[\[note: 42\]](#Ftn_42)

30     Arup communicated with these suppliers and/or their representatives requesting information and data on their DRUPS units. There were many email exchanges that followed in that period of October to early November 2008 and some of these emails, and especially their attachments, indicated that these DRUPS units had NBP of 1,400 kW and SBP of 600 kW. In an “N+1” configuration with three DRUPS units (the “Original Design”), the total NBP was not 4,000 kW or 3,600 kW but 2,800 kW (1,400 kW x 2). Some of these emails were sent directly from the suppliers to GSS.[\[note: 43\]](#Ftn_43) From these emails, Arup says GSS must have known that the NBP being considered was 2,800 kW in an “N+1” configuration. GSS disagrees and contends that Arup never pointed this out to GSS, and it relied on Arup to provide what was stipulated in the Engineering Proposal. Arup also alleges that these were the biggest capacity DRUPS units in the market at that time that suited GSS’s requirements. GSS disagrees.

31     In response to GSS’s query on 28 November 2008 as to how much power GSS could actually sell to customers in the Extension, excluding diversity, Arup replied by email on the same day, stating:[\[note: 44\]](#Ftn_44)

Without diversity, this is 2 x 1750 kVA x 0.8 pf = 2,800 kW for the 4,000 m2 of the Expansion

GSS’s enigmatic response was: “We may have to back up in excess of 2,800 kw with only 2 UPS units (1 being faulty) … In Sydney we only allow a diversity of .9 or 1.1 whichever way you look at it, you have me concerned”.[\[note: 45\]](#Ftn_45) Exactly what this meant will be examined later.

32     Emails then passed between GSS and Arup on how much more power could be obtained from the DRUPS units by checking on whether the power factor could be increased.

33     The power factor is technically the ratio of kW to kVA, which means the ratio of real power to apparent power. When I clarified this aspect with the expert witnesses, what this means, and I so find, is that first, when a manufacturer says its unit can provide 1,000 kW, it also stipulates the application of a power factor, say 0.8. This means if their unit runs at its fullest or highest capacity, it can provide 1,000 kW, but units are not meant to run flat out at full capacity for prolonged periods and purchasers should count on 800 kW (1,000 kW x 0.8) as the normal output. Further, it may also be the case that with age or sub-optimal maintenance, the power output may decline. However, in case of emergencies or for short periods or bursts of maximum capacity, it may possibly produce slightly more than 1,000 kW. For example, the Piller DRUPS units could run at 10% overload for one hour.[\[note: 46\]](#Ftn_46) Secondly, in reality, manufacturers add an additional safety margin or layer of protection to prevent claims for breach of specifications. Hence they state in their sales material that their units are rated at, say 1,000 kW, but they design and produce units that can, running at full speed, actually provide, say 1,050 or 1,100 kW.

34     On 1 December 2008, Arup informed GSS that EuroDiesel had confirmed its DRUPS units could achieve a power factor of +0.99.[\[note: 47\]](#Ftn_47) Arup worked out the normal output as: 2 x 1,750 x 0.99 = 3,465 kW or 86.6% of the nominal 4,000 kW.

### GSS’s Global Business Change Programme and the Stop Work Order

35     A significant event then occurred on 27 January 2009 when GSS sent Arup an attachment (prepared by T&T, London) entitled the “GS Global Business Change Programme” from its parent Global Switch, calling for a full and thorough review of all their seven data centres, including Singapore, and to maximise the usage of spare power capacity (“Global Switch Directive”). It required all Global Switch data centres to carry out technical reviews of their cooling and power capacities, both in terms of the data centre’s capacities and what they were contractually bound to supply to their tenants, to think out of the box to suggest ways in which they could re-distribute any spare power capacity within their data centres so as to maximise their revenues. The objective was to maximise the usage of any spare power capacity and Global Switch envisaged that it would result in:[\[note: 48\]](#Ftn_48)

(a)     easy wins, with no or little capital investment;

(b)     basic infrastructure changes to re-divert spare capacity; and

(c)     substantial plant/infrastructure change which can be justified with an accompanied business case.

Global Switch data centres were thus required to carry out a full and thorough review to see if each data centre was set up to effectively distribute all available power and cooling to client areas. Once these technical studies were completed and each data centre knew their position (_ie_, each data centre would know the power and cooling capacity it had, the contracted amount of power and cooling capacity to the tenants and the amount of power and cooling capacity their tenants actually used), a separate commercial study was to be undertaken in conjunction with these technical findings. Global Switch was looking to deliver credible outputs for each data centre by 1 April 2009. There was a request for data centres to look at the extension building in light of possible savings due to application of “power diversity initiatives”.[\[note: 49\]](#Ftn_49) Various email exchanges between GSS and Arup ensued.

36     On 17 February 2009, GSS issued a “Stop Work Order” to Arup (the “Stop Work Order”). GSS accept that when this Stop Work Order was issued, GSS had not secured any tenants for the extension.[\[note: 50\]](#Ftn_50)

### Reactivation of the Project and implementation of Revised Design

37     In or around July 2009, GSS appears to have had promising negotiations with potential tenants, including Microsoft. As their talks with prospective tenants progressed, it appears GSS stated to Microsoft that the available power in the Extension was 4,000 kW.

38     The Project was reactivated around July 2009 (according to Mr Paddy) and around September 2009 (according to Mr Guth),[\[note: 51\]](#Ftn_51) several months after the Stop Work Order.[\[note: 52\]](#Ftn_52) A GSS status and recommendation report, dated 30 October 2009, stated there was an immediate client requirement for data centre space by the middle of 2010.[\[note: 53\]](#Ftn_53) Even as of 30 October 2009, it appears that tenants had not been secured for the whole of the Extension.[\[note: 54\]](#Ftn_54) Draft tender documents for the DRUPS units were prepared by October 2009.[\[note: 55\]](#Ftn_55)

39     On 29 September 2009, GSS issued the tender for, amongst others, the DRUPS units.[\[note: 56\]](#Ftn_56) GSS alleges that it was Arup who drafted the tender documents and Arup specified a 2,500 kVA DRUPS unit (which could only produce 1,400 kW NBP and 600 kW SBP per unit).[\[note: 57\]](#Ftn_57) GSS disputes that it made any variation to its requirements. Arup alleges that the 2,500 kVA DRUPS unit was the largest available at that point in time and GSS knew the NBP per unit was 1,400 kW. GSS disagrees.

40     At some point in time after 30 October 2009, it appeared that Microsoft was prepared to take up the whole Extension. With Microsoft’s requirement of, _inter alia_, 4,000 kW NBP for the IT Load, GSS (including their project consultants like T&T) and Arup began discussing how the shortfall could be met. It was then decided that three DRUPS units would be used as the “N” component and the “+1” component would come from the spare capacity of the SUPS system in the Existing Facility (the “Revised Design”). Again there are differing implications, allegations and claims in relation to the need for, design and implementation of the Revised Design and my use of the phrase “then decided” is to be taken in a neutral manner as I will examine in detail later and make my findings as to whether, for example, GSS was “forced” to accept this solution because Arup failed to provide for 4,000 kW in the circumstances that occurred or GSS agreed to the Revised Design as a result of factors for which no blame could be attached to Arup.

41     Arup then proceeded to implement the Revised Design. This included the use of:

(a)     thirty Power Distribution Units (“PDUs” or “PDU” as the case may be), where each PDU provided a “preferred” electrical feed from one of the three DRUPS units (the “Preferred Source”) and an “alternative” electrical feed from a group of SUPS units (the “Alternative Source”); and

(b)     Static Transfer Switches (“STSs” or “STS” as the case may be), which controlled the Preferred Source and the Alternative Source to each PDU so that during a fault or maintenance of a single DRUPS unit, the STS would transfer the electrical load of a PDU from the DRUPS unit to the SUPS system.

42     Microsoft moved into the Extension in tranches. It first occupied L3–L4 in September 2010 in phase 1 (after testing and commissioning (“T&C”) was carried out from 14–15 August 2010) and L5–L7 in subsequent phases 2 to 4. The commencement dates for phases 2, 3 and 4 were 1 January 2011, 1 July 2011 and 1 January 2012 respectively.[\[note: 58\]](#Ftn_58)

### The May 2013 failures

43     The next significant event occurred just under two and a half years later, on or around 2 May 2013. GSS complains that on this date the utility mains power supply experienced a disturbance and before the DRUPS units could react to supply the electrical power to the IT Load while the mains supply was unstable, the STSs transferred the electrical load of two DRUPS units to the SUPS units, resulting in overloading of the SUPS units and failure of the IT equipment of some of GSS’s tenants. GSS alleges that this caused them to breach their Service Level Agreements with those tenants.

44     GSS also complains that on or around 18 May 2013, the incoming feeders from the utility main power supply experienced disturbances and the STSs unnecessarily transferred the electrical loads of the DRUPS units to the SUPS units thereby causing a failure of their tenants’ IT equipment, and again causing GSS to breach their Service Level Agreements with those tenants.

45     As a consequence, GSS alleged it had to install a fourth DRUPS unit and implement a distributed redundant re-configuration in the Extension.

46     Following from these events, which I will collectively refer to as the “May 2013 failures”, GSS sued Arup claiming substantial damages in excess of $23.8 million, general damages, interest, costs and an indemnity. Arup denied liability and filed a counterclaim for the balance of its fees.

## The parties’ cases

47     I preface this section with my observation that parties have repeatedly gone beyond (and accused each other of going beyond) their respective pleaded cases. The general rule is that parties are bound by their pleadings and the court may not decide on a matter that the parties themselves have decided not to put into issue. But the court need not adopt an overly formalistic approach; departures are warranted in limited circumstances when no prejudice is caused to the other party. For instance, evidence given at trial can overcome defects in pleadings as long as the other party is not taken by surprise (see _V Nithia (co-administratrix of the estate of Ponnusamy Sivapakiam, deceased) v Buthmanaban s/o Vaithilingam and another_ at \[38\]–\[40\]).

48     Following this approach, I will address the parties’ departures from pleadings where these are material to the issues before me and little or no prejudice is occasioned to the other party. In this case, many of the parties’ departures from pleadings concern issues that ended up being explored, sometimes extensively, in cross-examination (see in particular, the parties’ cases at trial on T&C). It is also significant that the parties have submitted a list of 46 agreed issues; GSS have listed out a further 9 issues (which have been further broken down into 18 sub-issues), and Arup have listed out a further 23 issues (which have been further broken down into 4 sub-issues). Given that these various lists were drafted by and discussed between the parties’ lawyers, and accompanied the opening statements given in the course of trial, either party may be hard put to claim it was taken by surprise if some of the issues in these lists are addressed, although these would, on a strict reading, stray beyond the pleadings. That said, most of the issues in the agreed list would fall within the scope of the pleadings on a broad and charitable reading of the latter. However, it is another matter if a new area is explored after witnesses have completed their evidence in an earlier tranche.

49     I point out, however, that some of the issues in the agreed list of issues are worded too widely to be of assistance to the court. For example, two agreed issues were: “What were the terms of the Agreement between \[GSS\] and \[Arup\]?” and “Whether there were any implied terms in the Agreement”. It would have been appropriate to frame issues more narrowly, such as by identifying _specific_ terms that allegedly formed part of the contract (_eg_, a term for fitness for purpose). For that reason, I find it preferable to take the pleadings as my starting point, and it is to those I now turn.

### GSS’s statement of claim

#### The alleged obligations

50     GSS avers that it was an express or implied term of the Contract that Arup was to design an electrical system, comprising DRUPS units in an “N+1” configuration, that delivered at least 4,000 kW of uninterruptible and continuous power (_ie_, NBP) to critical IT equipment of GSS’s customers (“the IT Load Requirement”).[\[note: 59\]](#Ftn_59) Arup was also to provide for spare power capacity from the DRUPS units in support of the IT Load Requirement. GSS avers that the phrase “overall diversity of 0.9” in the Contract, when applied to the 4,000 kW power demand for critical IT equipment, meant that there had to be at least 4,000 and up to 4,444 kW (_ie_, 4,000 kW ÷ 0.9) of NBP for the IT Load Requirement.[\[note: 60\]](#Ftn_60)

51     GSS avers that it was an express or implied term of the Contract that Arup was to design an electrical system, comprising DRUPS units in an “N+1” configuration, that delivered sufficient power (_ie_, SBP) for mechanical equipment (“the Mechanical Load Requirement”), such as lights, CRAC units, pumping systems, chillers, and other equipment and reflected the needs of GSS.[\[note: 61\]](#Ftn_61)

52     GSS claims that it was an express or implied term of the Contract that:

(a)     Arup was to ensure adequate T&C of the electrical and mechanical systems;[\[note: 62\]](#Ftn_62) and

(b)     Arup was to establish the cooling load requirement for the Extension (“the Cooling Load Requirement”) and to design a chilled water system in an “N+1” configuration to support that requirement in a way that reflected the needs of GSS.[\[note: 63\]](#Ftn_63)

53     GSS also pleads that the Contract contains the following implied terms:

(a)     Arup was to carry out its duties under the Contract with a standard of care, skill and/or diligence of a competent M&E engineering consultant experienced in data centre design;[\[note: 64\]](#Ftn_64) and

(b)     Arup was to ensure that its designs would meet the operational needs of a data centre and be fit for GSS’s intended purposes which required, among other things, that the designs permitted effective management and maintenance to support the operation of a data centre.[\[note: 65\]](#Ftn_65)

54     Additionally, GSS avers that Arup owed it a duty of care in tort “of like content and to like effect” as the alleged duty referred to in \[53(a)\] above.[\[note: 66\]](#Ftn_66)

#### The alleged breaches and losses

55     In relation to NBP, GSS alleges that Arup breached its duties with regard to both the Original Design and the Revised Design.

56     Regarding the Original Design, GSS claims that Arup breached its duties by failing and/or neglecting to provide for 4,000 kW of NBP to be delivered to the Extension for the IT Load Requirement, using a DRUPS system in an “N+1” configuration. Under Arup’s design, three EuroDiesel DRUPS units were installed, and each unit only provided 1,400 kW of NBP (and 600 kW of SBP). Thus, the design provided for 4,200 kW of NBP in an “N” configuration, or 2,800 kW of NBP in an “N+1” configuration (instead of 4,000 kW of NBP in an “N+1” configuration).[\[note: 67\]](#Ftn_67)

57     Regarding the Revised Design, GSS claims that Arup breached its alleged duties in that the Revised Design failed to provide an uninterruptible and continuous power supply as required under the Contract. This is because Arup did not ensure that elements of the Revised Design – the DRUPS units, SUPS units, and STSs – were properly coordinated. Consequently, during the power disturbances on 2 and 18 May 2013, the STSs transferred excessive electrical load from DRUPS units to the SUPS units, which led to the failure of IT equipment of some of GSS’s clients.[\[note: 68\]](#Ftn_68)

58     In relation to SBP, GSS claims that Arup breached its duties in that Arup failed to design an electrical system, comprising the DRUPS units in an “N+1” configuration, with sufficient SBP to support the Mechanical Load Requirement. GSS avers that 1,500 kW of SBP was necessary to support the Mechanical Load Requirement, whereas each DRUPS unit only provided 600 kW of SBP. Thus, the design provided for 1,800 kW of SBP in an “N” configuration, or 1,200 kW of SBP in an “N+1” configuration (instead of 1,500 kW of SBP in an “N+1” configuration).[\[note: 69\]](#Ftn_69)

59     In relation to NBP and SBP, GSS also claims that Arup breached its duties by failing to provide for reasonable spare NBP and SBP.[\[note: 70\]](#Ftn_70)

60     In relation to T&C, GSS claims that Arup breached its duty to ensure proper T&C in the following respects:[\[note: 71\]](#Ftn_71)

(a)     Arup failed to test the Revised Design at full load.

(b)     Arup failed to ensure that the coordination of the STSs, the SUPS units and the DRUPS units were sufficiently tested.

(c)     Arup failed to adequately advise on test scenarios that should have been conducted and/or failed to ensure that they were conducted, these being: (i) an overload test whereby a 110% load is applied to the Revised Design; (ii) testing of transfer of electrical load from the Preferred Source to the Alternative Source and vice versa under various failure conditions; (iii) step load tests; (iv) a DRUPS bypass test; and (v) DRUPS operation without the control system and demonstration of load transfers between normal, emergency and bypass.

61     At this point I pause to note that while GSS’s pleaded case was that Arup failed to perform all the above tests, one of its expert witnesses conceded during cross-examination that several of these tests (testing at full load,[\[note: 72\]](#Ftn_72) the overload test,[\[note: 73\]](#Ftn_73) and testing of DRUPS operation without the control system[\[note: 74\]](#Ftn_74)) would not have detected the frequency intolerance problem that GSS alleges led to the May 2013 failures. He also admitted to being unsure if the step load test would have identified the frequency intolerance though it “probably would have”.[\[note: 75\]](#Ftn_75) I also note that not all the tests were addressed in cross-examination[\[note: 76\]](#Ftn_76) or picked up fully by counsel. In any event, GSS in its closing submissions addressed only one test (the DRUPS bypass test).[\[note: 77\]](#Ftn_77)

62     In relation to the Cooling Load Requirement, GSS claims that Arup breached its duty by failing to design a cooling system that met the Cooling Load Requirement in an “N+1” configuration

63     In breach of the contract and/or duty owed to GSS:[\[note: 78\]](#Ftn_78)

(a)     Arup wrongly determined that the Cooling Load Requirement for the Extension was 3,760 kW, whereas it was 4,400 kW (comprising a data centre heat load of 4,000 kW, and building and equipment heat load of 400 kW).

(b)     Arup’s design consisted of three chillers which provided cooling power of 1900 kW each, _ie_, 3,800 kW in an “N+1” configuration (rather than 4,400 kW in an “N+1” configuration).

64     GSS also claims that Arup performed its services improperly and/or negligently, thus causing various defects and faults to arise.[\[note: 79\]](#Ftn_79) Notably, however, GSS eventually indicated in their closing submissions – after a not insignificant time was spent at trial on some issues and despite earlier invitations by Arup to drop such claims – that it was no longer pursuing their claims of about $566,000 in relation to the failure to: [\[note: 80\]](#Ftn_80)

(a)     provide a reasonable means of access to the DRUPS units, the wasted costs and inadequacies of the cat ladder ($30,000);

(b)     provide automatic start-up and restart feature linked to the Building Management System (“BMS”) ($74,000);

(c)     use motorised isolation valves for the three cooling tower ($90,000);

(d)     provide for an alarm paging system for the Extension’s Energy Management System, as well as a failure to ensure a proper testing and commissioning of the same ($136,000);

(e)     provide remote alarms for the BMS, a failure to properly configure the BMS’s paging system, as well as failure to ensure proper testing and commissioning of the same ($86,000); and

(f)     provide an alternative power source for the lighting system ($140,000).

GSS only proceeds on the claim of about $324,806 in relation to the Powerpax Chillers, which were located on the roof of the Extension. The chillers experienced faults because condensation led to moisture forming within their control circuits. GSS claims that Arup breached its duties by failing to ensure that the chillers were located at a more suitable location, or to prevent the problems associated with condensation.

65     GSS avers that Arup’s alleged breaches of its duties caused GSS to suffer the following losses and damage:[\[note: 81\]](#Ftn_81)

(a)     the cost of implementing the Revised Design ($946,000) to remedy the inadequacies in Arup’s design of the DRUPS units which (still) resulted in a shortfall in the power supplied to the IT Load Requirement, _ie_, it was ineffective and did not remedy the shortfall;

(b)     the additional cost of installing the fourth DRUPS unit, which GSS would not have incurred if Arup had “provided in its design for a fourth DRUPS unit at the material time” ($2,972,994.19);

(c)     lost business, rental and profits which GSS would have made if the 1,400 kW of power from the Existing Facility had not been utilised as part of the Revised Design, including:

(i)       loss of profits amounting to $2,904,030 due to GSS’s inability to accommodate a customer’s request in July 2011 for an additional 220 kW of electrical power on L6 of the Existing Facility (the “Pacnet Opportunity”);

(ii)       loss of profits amounting to $13,497,612 when GSS was unable to accommodate a customer’s request in October 2012 for an additional 1,500 W of electrical power (the “Microsoft Opportunities”);

(d)     costs and expenses as a result of the failure of the Revised Design ($287,324.90);

(e)     costs and expenses of taking measures to remedy the failure of the Revised Design ($295,630.80 as at October 2014);

(f)     additional costs in relation to the provision of additional cooling power ($634,680.08);

(g)     additional costs in relation to obtaining additional SBP to support the Mechanical Load Requirement ($405,000);

(h)     costs in relation to the chillers on the roof of the Extension ($324,806); and

(i)     costs of conducting further T&C ($1,000,000) for latent defects which have yet to emerge due to Arup’s failure to ensure adequate T&C of the M&E system.

### Arup’s defence and counterclaim

#### The alleged obligations

66     Arup begins its defence and counterclaim with two general claims about the Contract:[\[note: 82\]](#Ftn_82)

(a)     First, the Contract included (the terms and conditions of) the ACEA Form Contract referred to in cl 8 of the Fee Proposal.

(b)     Secondly, the Contract “envisaged a process of \[Arup\] agreeing on the design brief with \[GSS\]”, on DRUPS capacities and configurations, electrical power density requirements and levels of redundancy required for electrical and mechanical plant and distribution systems (_ie_, “N+1”). This meant their designs should have been based on criteria agreed with GSS to suit local conditions, regulations and any restrictions imposed on the building fabric, structure and infrastructure.

67     Arup denies that it was obliged to design an electrical system comprising DRUPS units in an “N+1” configuration which delivered 4,000 kW of NBP for the IT Load Requirement. Arup avers the following:[\[note: 83\]](#Ftn_83)

(a)     Applying a diversity factor of 0.9 to 4,000 kW yields the figure of 3,600 kW: “\[i\]ntroducing diversity reduces the power requirement”.

(b)     As the development of the design progressed, GSS did not consider the original scope of work in the Fee Proposal to be technically or commercially feasible. First, GSS expressed that it had certain cost constraints, which only allowed it to acquire a maximum of three DRUPS units for the Extension.[\[note: 84\]](#Ftn_84) Secondly, the physical limitations of the site restricted the amount and size of equipment and systems that could be installed. In particular, GSS required the DRUPS units to be located above the existing loading dock on a new structural steel frame, which was only able to accommodate a maximum of three DRUPS units.[\[note: 85\]](#Ftn_85)

(c)     This led Arup to issue agreed tender documents for three DRUPS units to be installed in an “N+1” configuration, which reduced the NBP from 3,600 kW to 2,800 kW. GSS was aware of this. This constituted a variation to the Fee Proposal. In particular:

(i)       The tender documents were “agreed” in that GSS issued the tender and then placed an order for the three DRUPS units.[\[note: 86\]](#Ftn_86)

(ii)       GSS was aware that the NBP was reduced to 2,800 kW by 28 November 2008 at the latest.[\[note: 87\]](#Ftn_87)

(iii)       The three DRUPS units installed could only provide 2,800 kW of NBP in an “N+1” configuration. They were the largest capacity DRUPS unit available at the material time.[\[note: 88\]](#Ftn_88)

68     Arup also denies the aforementioned obligations alleged by GSS:[\[note: 89\]](#Ftn_89)

(a)     that it was obliged to design an electrical system comprising DRUPS units in an “N+1” configuration with sufficient SBP to support the Mechanical Load Requirement;

(b)     that it was obliged to _ensure_ proper T&C: it claims that its obligation under the Contract was only to _witness_ T&C;

(c)     that it was obliged to establish the Cooling Load Requirement and to design a chilled water system in an “N+1” configuration to support that requirement;

(d)     that it had a contractual or tortious duty of care (and, in the alternative, that it owed any duty of care in tort to GSS where such duty is “wider than the \[Fee Proposal\]”); and

(e)     that it was obliged to ensure that the electrical and mechanical systems it designed supported the operation of a data centre and was fit for their intended purposes. Arup contends that the Extension was “designed to provide for an N+1 concurrently maintainable system, in line with a Tier III Uptime Data Centre classification”.

#### The alleged breaches

69     In relation to NBP and the Original Design, Arup denies that it breached its duties by failing to design an electrical system comprising DRUPS units to deliver 4,000 kW of uninterruptible and continuous power for the IT Load Requirement in an “N+1” configuration. Arup avers as follows:[\[note: 90\]](#Ftn_90)

(a)     It was GSS who selected the three EuroDiesel DRUPS units that were installed (Arup had issued preliminary documents to GSS for review, before GSS finally issued the tender to the suppliers).[\[note: 91\]](#Ftn_91)

(b)     Its design at the end of the preliminary design stage, in consultation with GSS, provided for an “N+1” configuration comprising of two DRUPS units and one additional DRUPS unit in redundancy, and this gave 2,800 kW NBP for the IT Load.

(c)     GSS did not agree to the installation of four DRUPS units (in that GSS never decided to install four DRUPS units at the material time or communicate such an intention to Arup).[\[note: 92\]](#Ftn_92) To the best of Arup’s knowledge, this was due to GSS’s cost constraints and/or the space constraints of the Extension, which were discussed during a site visit by various persons involved in the Project – including Mr David Guth (“Mr Guth”), Mr Gordon Paddy (“Mr Paddy”), Mr Mark O’Brien (“Mr O’Brien”) for GSS; and Mr Peter Adcock (“Mr Adcock”) and/or Mr Jeff Burleigh (“Mr Burleigh”) for Arup – to investigate the feasibility of installing a fourth DRUPS unit.[\[note: 93\]](#Ftn_93)

(d)     GSS accepted Arup’s design in full knowledge that it supplied 2,800 kW of NBP in an “N+1” configuration when GSS issued the tender for three DRUPS units;

(e)     Arup informed GSS that the two DRUPS units with one additional DRUPS unit was only a temporary solution. This solution could last as long as the SUPS system in the Existing Facility remained under-loaded; a fourth DRUPS unit would need to be installed once the load on the SUPS system increased to the point that they no longer had the capacity to support the DRUPS units.[\[note: 94\]](#Ftn_94)

(f)     GSS only informed Arup in March 2010 that it required the full IT Load capacity of 1 kW/m2 for the Extension’s 4,000m2. To the best of Arup’s knowledge, this was triggered when specific negotiations with a prospective customer, Microsoft, developed around March 2010. GSS asked Arup to review the maximum available power capacity and, to the best of Arup’s knowledge, leased the entire Extension to Microsoft at the full capacity of 4,000 kW without factoring in any diversity.

70     In relation to NBP and the Revised Design, Arup denies that it breached any of its duties. In particular, Arup avers as follows:[\[note: 95\]](#Ftn_95)

(a)     GSS’s request for additional electrical power (which Arup met with the Revised Design) amounted to a variation from the Fee Proposal.

(b)     The Revised Design was an “N+1” concurrently maintainable system, in line with a Tier III Uptime Data Centre classification. GSS was aware of the limits of the Revised Design, including its inability to cater for a vector jump or frequency shift in the power supply.

(c)     GSS is experienced and knowledgeable about the requirements for the Extension and GSS has set up other facilities where GSS has installed DRUPS units.

(d)     GSS accepted the Revised Design and knew full well that it utilised spare capacity from the SUPS units in the Existing Facility and consequently, GSS’s claims for loss of profits are baseless.

(e)     Arup agrees that the electrical load was transferred to the SUPS units directly when the man power supply became unstable, however, the Revised Design was not defective. Instead, the STSs that were part of the Revised Design had an intolerance issue. GSS was familiar with the specifications of the STSs as similar STSs were installed in the Existing Facility. There were also previous power disturbances in the Extension before the incidents on 2 and 18 May 2013, which would have revealed to GSS that there was a need to investigate and re-calibrate the STSs.[\[note: 96\]](#Ftn_96)

71     In relation to SBP, Arup denies that it failed to design an electrical system comprising of DRUPS units in an “N+1” configuration with sufficient SBP to support the Mechanical Load Requirement. Arup agrees that each of the EuroDiesel DRUPS units provided 600 kW of SBP, such that three DRUPS units provided 1,200 kW of SBP in an “N+1” configuration. However, Arup claims that this 1,200 kW was adequate to support the Mechanical Load Requirement; Arup denies that 1,500 kW was necessary for the Mechanical Load Requirement.[\[note: 97\]](#Ftn_97)

72     In relation to T&C, Arup denies that it breached a duty to ensure proper T&C because its duty was only to witness T&C (see \[68(b)\] above).[\[note: 98\]](#Ftn_98)

73     In relation to the Cooling Load Requirement, Arup denies that it failed to establish the Cooling Load Requirement and to design a chilled water system in an “N+1” configuration that sufficiently supported that requirement:[\[note: 99\]](#Ftn_99)

(a)     The Cooling Load Requirement was 3,800 kW, not 4,400 kW (comprising 3,600 kW to cool the IT Load, _ie_, 4,000 kW with a diversity factor of 0.9 and 200 kW to cool the Mechanical Load).

(b)     Arup’s design provided for three chillers with the capacity to provide 3,800 kW of cooling capacity in an “N+1” configuration.

74     Arup also denies that it breached its duties in designing for the chillers to be located on the roof of the Extension.[\[note: 100\]](#Ftn_100)

75     Further, Arup denies that GSS has suffered the alleged losses and puts GSS to strict proof of its losses.[\[note: 101\]](#Ftn_101)

76     Arup also raises the following defences to GSS’s claims:[\[note: 102\]](#Ftn_102)

(a)     GSS’s claims are time-barred under the Contract and constitute an abuse of process: the “ACEA Form Contract” stipulates a limitation period of three years from the completion of the services; Arup completed its services by late 2010 at the latest; and GSS commenced this suit on 28 October 2014, more than three years after late 2010.

(b)     The ACEA Form Contract limits its liability in any event to the sum of A$300,000.[\[note: 103\]](#Ftn_103)

(c)     Arup is not liable for any indirect, consequential or special losses, including loss of profit, loss of business opportunity and payment of liquidated damages under any other agreement.[\[note: 104\]](#Ftn_104)

77     Arup makes a counterclaim for $184,362. This sum allegedly remains due and owing for works Arup did on GSS’s instructions, which Arup claims amounted to variations from the Proposals. Arup makes seven variation claims corresponding to seven invoices issued by Arup, all dated 23 May 2011.[\[note: 105\]](#Ftn_105)

78     Arup also counterclaim for various declarations regarding their pleaded time-bars, limitation of liability and their not being liable for the damage and/or loss claimed by GSS.

79     I note for completeness that Arup also pleads that:[\[note: 106\]](#Ftn_106)

(a)     GSS’s claims are time-barred under the Limitation Act (Cap 163, 1996 Rev Ed);

(b)     the dispute-resolution clause in the ACEA Form Contract require the parties to negotiate, and then attend mediation, and this action is thus in breach of contract and should be struck out; and

(c)     GSS failed to mitigate the damage and/or loss it is claiming.

However, Arup did not pursue these defences in its closing submissions. I therefore say no more about them.

### GSS’s reply and defence to counterclaim

80     GSS denies that the “ACEA Form Contract” was incorporated into and thus part of the Contract (see \[66(a)\] above). GSS claims that the parties did not intend to incorporate the “ACEA Form Contract” into the Contract:[\[note: 107\]](#Ftn_107)

(a)     Clause 8 of the Fee Proposal refers to an “attached ACEA Form Contract”. No such document was attached to the Fee Proposal. Further, GSS did not receive any such document at all material times.

(b)     Clause 8 of the Fee Proposal and the phrase “ACEA Form Contract” are ambiguous: cl 8 did not state which particular version or form of the ACEA Form Contract applied.

81     In the alternative, GSS avers that only the fee aspect of the Contract was based on the terms of the “ACEA Form Contract”, and all other aspects of the contract were not based on the “ACEA Form Contact” or its terms.

82     In relation to Arup’s obligations concerning NBP, GSS avers as follows:[\[note: 108\]](#Ftn_108)

(a)     Arup was required to provide for at least 4,000 kW of NBP. GSS did not instruct Arup to apply diversity to reduce the requirement to 3,600 kW, or instruct Arup to reduce the requirement to 2,800 kW. GSS did not agree to a variation of the requirement.

(b)     Although GSS does not deny issuing the tender documents, this was because Arup did not make clear to GSS that the three EuroDiesel DRUPS units could only provide 2,800 kW of NBP in an “N+1” configuration. GSS was not aware that Arup had “unilaterally reduced” the power requirement until around 23 February 2010.

(c)     Arup failed to advise GSS on alternative means of configuring the DRUPS system that would have satisfied the NBP requirement, including installing four EuroDiesel DRUPS units, using three DRUPS units from other suppliers, and altering the three EuroDiesel DRUPS units to increase their NBP. In this regard, GSS also avers that there was sufficient space in the Extension for a fourth DRUPS unit and in fact, GSS subsequently installed a fourth DRUPS unit in the Extension.

(d)     Even if the Contract required Arup to design an electrical system providing 3,600 kW of NBP in an “N+1” configuration, Arup still breached the Contract because Arup’s design could only provide NBP at 2,800 kW in an “N+1” configuration.[\[note: 109\]](#Ftn_109)

83     In relation to Arup’s obligations concerning T&C, GSS contends that Arup’s obligation to witness T&C involved witnessing all of the stages of T&C and providing full and proper advice or recommendations to GSS regarding the adequacy and suitability of the T&C.[\[note: 110\]](#Ftn_110)

84     In relation to Arup’s breaches concerning NBP and the Original Design, GSS avers as follows:[\[note: 111\]](#Ftn_111)

(a)     Arup did not adequately advise GSS that the three EuroDiesel DRUPS units could only provide 2,800 kW of NBP in an “N+1” configuration. Consequently, GSS did not initially install four DRUPS units in the Extension.

(b)     There was no variation of the Contract, because Arup was always obliged to provide 4,000 kW of NBP under the Contract.

85     In relation to Arup’s breaches concerning NBP and the Revised Design, GSS avers as follows:[\[note: 112\]](#Ftn_112)

(a)     The Revised Design did not constitute a variation to the Contract – Arup was obliged to rectify the power shortfall of the Original Design and proposed the Revised Design to this end.

(b)     GSS required the Revised Design to have “N+1” redundancy, be concurrently maintainable, and have a degree of fault tolerance.[\[note: 113\]](#Ftn_113) The Extension was designed to achieve a standard equivalent to Tier III of the Uptime Institute’s standards, with certain enhancements, though formal certification by the Uptime Institute was not necessary.[\[note: 114\]](#Ftn_114)

(c)     Arup failed to set out all the risk and limits of its Revised Design, and advise GSS adequately regarding such risks and limits.

(d)     GSS had no choice but to accept the Revised Design, because it had negotiated with Microsoft on the basis that the Extension was able to provide 4,000 kW of NBP, and there was no alternative solution in the timeframe available but the Revised Design.

(e)     GSS was not aware that the STSs were not properly calibrated or configured until after the incidents on 2 May 2013 and 18 May 2013.

86     In relation to Arup’s defences of time-bar and limitation of liability, GSS contends that the “ACEA Form Contract” or the relevant clauses therein were not incorporated into the Contract.[\[note: 115\]](#Ftn_115) In relation to the time-bar defence, GSS also contends that the time-bar clause is unreasonable and thus unenforceable and, in any event, GSS’s claims are not time-barred under that clause.

87     Although it does not deny that it issued tender documents for the three EuroDiesel DRUPS units to be installed, GSS contend that this was due to Arup’s failure to make clear to GSS that these DRUPS units could only provide a NBP of 2,800 kW in an “N+1” configuration instead of at least 4,000 kW. GSS denies that its agreement to issue the tender documents constituted a variation to the parties agreement,[\[note: 116\]](#Ftn_116) that it did not initially require 4,000 kW and only started to make such a request in or around March 2010 because of negotiations with Microsoft.[\[note: 117\]](#Ftn_117)

88     GSS avers that it required Arup’s Revised Design to be in an “N+1” configuration, concurrently maintainable, and also have a certain degree of fault tolerance.[\[note: 118\]](#Ftn_118) According to GSS, the Extension was designed to achieve a standard equivalent to Tier III of the Uptime Institute’s standards, with certain enhancements, though formal certification by the Uptime Institute was not necessary.[\[note: 119\]](#Ftn_119)

89     GSS denies that Arup is entitled to any additional fee as any additional work on their part was due to their negligence and/or breach of contract. GSS also contend that it was an express or implied term of the contract that Arup was not entitled to any additional fee if the significant changes in the scope of work were not brought to the attention of GSS in accordance with the terms of the Fee Proposal.

90     In relation to Arup’s counterclaims, GSS contends that:[\[note: 120\]](#Ftn_120)

(a)     some of the works Arup is claiming for fell within the scope of the Contract;

(b)     some of the works were necessitated or arose out of Arup’s negligence and/or breach of the Contract;

(c)     it is an express or implied term of the Contract that:

(i)       Arup is not entitled to any additional fee if the scope of works was not significantly altered; and

(ii)       Arup is not entitled to any additional fee if the significant changes in the scope of work (if any) was not brought to GSS’s attention before any additional work was commenced upon.

91     GSS thus contends that Arup is not entitled to payment in respect of its counterclaims.**[\[note: 121\]](#Ftn_121)** Alternatively, even if GSS were liable to Arup for all or part of the sums claimed, GSS would seek to set off these sums against sums that it may be awarded for its own claims.**[\[note: 122\]](#Ftn_122)**

## The witnesses

92     GSS called five witnesses of fact:

(a)     Mr Peter Turvey (“Mr Turvey”), previously Managing Director of Global Switch Australia Pty Limited for 3½ years before joining GSS as Managing Director on 15 January 2011; “on technical matters and for the day-to-day operation of the data centre, \[he is\] advised by a small group of Global Switch managers in Singapore and from the Regional Headquarters in Sydney, who in turn are advised by a team of Original Equipment Manufacturers … and specialist consultants”. He has a degree in economics and politics and career qualifications in marketing and general management;[\[note: 123\]](#Ftn_123)

(b)     Mr Guth, who was, at the material time, from July 2007 to December 2010, GSS’s Property Development Manager (Asia Pacific) and is presently Regional Projects Director (Asia Pacific). He trained as a construction manager, holds a Bachelor of Building and Construction Management degree from the University of New South Wales and has more than ten years of experience in the field of property development. He joined GSS in July 2007 and it was at GSS that he was first exposed to the workings of a data centre; as Property Development Manager (Asia Pacific), he claims that he had a “very limited role in the design of the M&E system”;[\[note: 124\]](#Ftn_124)

(c)     Mr Paddy, currently the Data Centre Advisory Specialist of NEXTDC Limited, a publicly-listed company in Australia, who was at all material times GSS’s Technical Director (Asia Pacific) and whose role included managing external professional engineers engaged by GSS for various projects. He is an electrician by trade and manages professional engineers in his work; he “came up with design briefs which stated the requirements of the organisations \[he\] worked for and liaised with the professional engineers accordingly”,[\[note: 125\]](#Ftn_125) but he does not involve himself in the actual engineering designs and calculations. He has been involved in data centre development and has worked with numerous professional engineers;[\[note: 126\]](#Ftn_126)

(d)     Mr Simon Jack Hamer (“Mr Hamer”), a Senior Engineer with GSS, who was originally seconded to GSS from the Swett Group on 20 May 2013 and joined GSS on 1 December 2013; he oversees the technical issues from the day-to-day operations and reports to the Regional Technical Director, Chris Heffernan who is based in Sydney, Australia. He completed an apprenticeship in control and instrumentation of critical systems and spent 31 years in designing, managing and troubleshooting engineering systems in various industries including water, oil and gas, road, rail and data centres; he first worked on data centres when he joined Commtech Asia Pte Ltd (around 2010, _ie_, 6 years from the date of his AEIC), as a Senior Commissioning Manager, where he was tasked with managing and executing the testing and commissioning of critical equipment used in data centres;[\[note: 127\]](#Ftn_127)

(e)     Mr Lim Kian Khiam (“Mr Lim”), a Senior Cost Manager with T&T (GSS’s costs consultants for the Project). He was involved (amongst other projects for GSS), in the Project from about July 2008 right through to the installation of the fourth DRUPS unit;

and three expert witnesses:

(f)     Mr Edward Michael John Ansett (“Mr Ansett”), a technical expert. He is a Chartered Engineer, FEANI registered European Engineer, a Fellow of the Institution of Engineering and Technology who holds an honours degree in Electronics Engineering from the University of the West of England, UK. He states that he has worked as an electrical engineer in the construction industry and the past 19 years of his career has been focused on data centre consultant engineering; he states he has extensive knowledge and expertise in data centre power systems design, testing and failure analysis and has designed or had technical oversight of numerous data centre projects in Europe and Singapore;

(g)     Mr Gavin Francis Moore (“Mr Moore”), a quantum expert. He is the regional director of Faithful + Gould Pte Ltd. He reviewed the documents in support of GSS’s quantum of their claims, collected and prepared the necessary cost data, collated the project information relevant to GSS’s quantum claims and put up a joint experts’ report with Mr Colin Wauchope Fox (“Mr Fox”); and

(h)     Mr Fox, a quantum expert. He is a director of Tracey Brunstrom and Hammond Pty Ltd. He reviewed the various claims made by GSS, reviewed documents in support of GSS’s claims, and reviewed the cost data and project information relevant to the quantum claims and the costs incurred/to be incurred and whether they were reasonable in the circumstances.

93     Arup called three witnesses of fact:

(a)     Mr Adcock, a Chartered Professional Electrical Engineer in Australia, who holds a Master’s Degree in Building Services Engineering; a witness by subpoena who was employed by Arup from 2 November 2005 to 17 May 2012. He held the position of a Senior Associate from 1 December 2008 to 17 May 2012. He was based in Melbourne. He is currently Vice-President of Design and Construction, Asia Pacific in Digital Realty, responsible for overseeing design and construction of all Digital Realty’s projects in the Asia Pacific, including Singapore, Australia, Hong Kong and Japan;

(b)     Mr Kenneth Ma (“Mr Ma”), a Chartered Professional Electrical Engineer, who holds a First Class Honours Bachelor degree in Building Services Engineering and a Master of Science in Environmental Engineering. He is member of the Institute of Engineers Australia, Chartered Institution of Building Services Engineers and Institution of Mechanical Engineers and American Society of Heating, Refrigerating and Air-Conditioning Engineers; he joined Arup in October 1990, transferred to Arup’s Sydney office in 1996 and is presently an Associate Mechanical Engineer responsible for designing a variety of types of buildings in Europe, Australia and Asia. Mr Ma was involved in various fit-out, replacement and upgrading works for GSS in its Existing Facility since 2003;

(c)     Mr David Martin (“Mr Martin”), a Principal in Arup, presently holding the position of Regional Science and Industry Business Leader, leading the electrical engineering team in Arup’s Sydney office, who also manages a multi-disciplinary group that specialises in technology-based projects, including data centres; he joined Arup in September 2010 as an Associate, and became Arup’s technical point of contact for this project with GSS in April 2013;

and three expert witnesses:

(d)     Mr Rowan Peck (“Mr Peck”), a technical expert. He is a director of Mission Critical Systems Pty Ltd, a privately owned consulting company operating in Australia, who has over 25 years of experience as a consulting electrical engineer, specialising in power systems and critical facilities of data centres, their power and cooling systems; his experience also covers strategic planning, peer review, power quality, design, construction, and commissioning of mission critical space. Mr Peck is also an Uptime Institute Accredited Tier Designer;[\[note: 128\]](#Ftn_128)

(e)     Mr Paul Skinner (“Mr Skinner”), a quantum expert. He is a director at Rider Levett Bucknall NSW Pty Ltd (“RLB”). He has extensive experience and expertise in quantity surveying; he has been involved in various cost management projects and is also an Associate Member of the Australian Institute of Quantity Surveyors;[\[note: 129\]](#Ftn_129) and

(f)     Mr Greg Nowak (“Mr Nowak”), a quantum expert. He is a senior associate at RLB with extensive experience and expertise in cost-planning, controlling and contract services for major projects concerning building engineering installations; he is also a member of the Institute of Engineers Australia and AACE International.[\[note: 130\]](#Ftn_130)

94     Generally, I found that the parties’ factual witnesses were by and large honest witnesses who tried to recall, to the best of their respective abilities, events that occurred many years ago (in 2008–2010). I will comment on their evidence individually at appropriate junctures and whether or not I accept their evidence on a point and the reasons for doing so, especially where their loyalties to their respective organisations overrode their objectivity and the objective evidence. However, I must mention my findings on three important witnesses, Mr Paddy, Mr Turvey, and Mr Adcock. I note that Mr Paddy and Mr Adcock, were no longer employed by GSS and Arup respectively by the time they deposed their AEICs and gave evidence on the stand. Both Mr Paddy and Mr Adcock were upfront about not being able to recall certain details due to the passage of time. Further, they were generally not hesitant to admit that their recollections might be wrong when they were shown documents which contradicted their versions of events. However:

(a)     Mr Paddy sometimes took positions in his evidence that were indefensible. I therefore do not accept all that he says and I make reference to these instances in the sections below. Many of these instances unfortunately relate to fairly crucial points; to take just one example (and I must say there are more than one), he was forced to admit in going through document after document, that he saw the figures of NBP from the DRUPS units under consideration at 1,400 kW NBP per unit, right from end June 2008 into the first quarter of 2010. He was naturally inclined to say what he could that would protect GSS’s position.

(b)     Mr Turvey at times refused to accept that his evidence was contradicted by contemporaneous documents, for example, despite the emails within his own organisation showing the application of a diversity factor by multiplication, continued to insist it should be applied by division. For someone in his position and with his intelligence to do so considerably damages his credibility. I therefore found his evidence less reliable in quite a few respects.

95     I derived assistance from the evidence of both technical experts (_ie_, Mr Ansett and Mr Peck). They were both willing and able to reach a consensus on various technical issues where they could. To varying degrees between them, they were also open to changing their views when shown to be wrong, admitting to mistakes in their calculations, or accepting qualifications to their theories. Where their evidence differed, I generally preferred the evidence of Mr Peck, whom I found more practical and whose evidence was backed up by close reasoning and a credible basis; he was also more objective and non-partisan, for example:

(a)     accepting candidly that Arup providing 2,800 kW as against the figure of 3,600 kW was a “big difference”;[\[note: 131\]](#Ftn_131)

(b)     acknowledging that Arup “got the numbers wrong from time to time” and should have brought the fact that the DRUPS units could only provide 2,800 kW to GSS’s attention “more emphatically”;[\[note: 132\]](#Ftn_132) and

(c)     openly accepting that the Piller DRUPS unit was indeed available and could have met the requirement of 3,600 kW NBP[\[note: 133\]](#Ftn_133) (although, as we shall see, the problem with the Piller DRUPS unit was that it did not have SBP and that would have required routing SBP from the Existing Facility).

As we shall see, Mr Ansett on the other hand, was not quite as objective as an expert witness should be, straying at times into advocating for his clients, by:

(d)     proffering, at times, theoretical evidence that was not necessarily backed by practice and when challenged, accepting that he had never tried a particular solution put forward by him;[\[note: 134\]](#Ftn_134)

(e)     showing partiality, for example, when giving evidence on the diversity factor, insisted that it is never applied to a data centre[\[note: 135\]](#Ftn_135) and if it was ever to be applied, it would be retrospectively, based on a track record of actual usage;[\[note: 136\]](#Ftn_136) even when he was showed clear evidence of GSS intention to apply a diversity factor, he gave a rather contrived explanation that they were merely “observing” a diversity factor and had no intention to actually apply it;[\[note: 137\]](#Ftn_137)

(f)     going beyond the question put to him (when Mr Paddy had referred to “1.1”), by volunteering the view that this showed a problem with Mr Paddy’s understanding of the diversity factor and suggesting that Arup had not adequately advised GSS;[\[note: 138\]](#Ftn_138) and

(g)     ignoring the many emails between Arup and GSS which stated the NBP provided by the two DRUPS units as the “N” was 2,800 kW, and claiming that there was “a profound duty of care in this case for the consulting engineer to shout from the rooftop \[the fact that 3,600 kW could not be achieved\]”.[\[note: 139\]](#Ftn_139)

96     I should also briefly mention that I found the evidence of GSS’s quantum experts to be wanting in some regards. In particular, CTBH appears to have failed to verify various claims against the actual work that had to be done. For example:

(a)     it had wrongly assumed that the fourth DRUPS unit could have been installed at the same location as the original three DRUPS units back in 2009 when the fourth DRUPS unit actually had to be placed in a different location;[\[note: 140\]](#Ftn_140)

(b)     it had misinterpreted the information provided by GSS as to the need for a new main switchboard,[\[note: 141\]](#Ftn_141) thereby certifying a quantum of cost that was higher than necessary;

(c)     it had wrongly assumed that the manual isolation valves for the cooling towers had been wrongly designed by Arup, thereby attributing losses for that item to Arup;[\[note: 142\]](#Ftn_142) and

(d)     it had wrongly benchmarked the cost of further piecemeal testing of the T&C of the entire Extension to the cost of T&C following a fit-out, which Mr Moore accepted was not a like for like comparison.[\[note: 143\]](#Ftn_143)

Nevertheless, these deficiencies made little difference to the eventual outcome of the case since almost all of GSS’s claims against Arup have been dismissed or withdrawn.

## My findings and decision

97     I now deal with each issue, setting out where convenient those agreed issues that fall within or are related to the respective pleaded cases.

### Whether the “ACEA Form Contract” was incorporated into the Contract

98     I first deal with Arup’s claim that the terms and conditions of the ACEA Form Contract were incorporated into the Contract and that on this basis:

(a)     GSS’s claims are time-barred under clause 8(c) of the ACEA Form of Contract which stipulates a contractual time bar of three years from the completion of Arup’s services under the Contract. Arup alleges it had completed all the services it was engaged to do by 15 or 16 August 2010 and GSS had only issued its Writ on 28 October 2014;[\[note: 144\]](#Ftn_144) and

(b)     Arup is entitled to claim a limitation of liability of A$300,000 to GSS’s claims.

As noted above, Arup has dropped its claim that the dispute procedure in the ACEA Form was not adhered to.

99     Clause 8 of the ACEA Short Form of Contract reads as follows:[\[note: 145\]](#Ftn_145)

8    To the maximum extent permitted by law:

(a)    subject to paragraphs (b), (c) and (d) below, the Consultant’s liability to the Client arising out of or in connection with this Agreement (including the performance or non-performance of the Services), whether under the law of contract, in tort, in equity, under statute or otherwise, shall be limited in aggregate to the amount specified in the accompanying letter or $300,000, if no amount is stated in the letter.

(b)    the Consultant is not liable to the Client in respect of any indirect, consequential or special losses (including loss of profit, loss of business opportunity and payment of liquidated sums or damages under any other agreement);

(c)    the Consultant shall be deemed to have been discharged from all liability in respect of the Services whether under contract, in tort, in equity, under statute or otherwise, at the expiration of the period specified in the accompanying letter, or if no date is specified, on the expiration of 3 years from the completion of the Services”

100    Arup submits that it was the ACEA _Short_ Form of Contract that was incorporated into the Contract. Mr Adcock deposes in his AEIC that the word “Short” was inadvertently omitted from para 8 of the Fee Proposal.[\[note: 146\]](#Ftn_146) I note that in its Defence and Counterclaim, Arup pleads that its Fee Proposal was based on the terms and conditions of the “ACEA Form of Contract” and it constituted part of the contract between the parties. Arup also did not plead that the word “Short” was inadvertently omitted from para 8 of its Fee Proposal.

101    Arup submits[\[note: 147\]](#Ftn_147) that while it had omitted to include the word “Short” in its Fee Proposal, it did specify the ACEA Short Form Contract in three previous proposals for work done at the Existing Facility, all of which contain the following clause:[\[note: 148\]](#Ftn_148)

8    Terms of Engagement

The above fee is based on the terms and conditions on the attached ACEA _Short_ Form Contract with monthly invoices … and payments on receipt.

\[emphasis added\]

102    Mr Paddy admits that he had seen the above clause in three other GSS contracts with Arup for works at L4 and L7 of the Existing Facility and a contract for works at L7, Suite G1 of the Existing Facility.[\[note: 149\]](#Ftn_149) Mr Adcock also deposed in his AEIC that it was Arup’s standard practice to incorporate the ACEA Short Form of Contract as the terms of engagement of its fee proposals and other contractual documents.[\[note: 150\]](#Ftn_150) Thus, Arup submits that it was clear that parties intended to incorporate the ACEA Short Form of Contract.

103    GSS submits that Arup should not be allowed to rely on its previous course of dealings with GSS to clarify the meaning of “ACEA Form Contract”, because it had failed to specifically plead the same in its Defence and Counterclaim. GSS claims that it has been prejudiced by this failure to plead – it would have otherwise adduced evidence of parties’ intentions in relation to these prior dealings and the consistency in or frequency of these dealings. GSS also points out that Arup has not demonstrated that the ACEA Short Form of Contract is incorporated as a matter of standard industry practice for data centre design consultants.[\[note: 151\]](#Ftn_151)

104    The question of whether a particular clause was incorporated by reference is a matter of contractual interpretation, and in undertaking this exercise, the court must have regard to the context and the objective circumstances attending the entry into the contract: _International Research Corp PLC v Lufthansa Systems Asia Pacific Pte Ltd and another_ at \[34\]. In the context of the building and construction industry, the court may even interpret a reference to a non-existent form to mean a reference to the correct form, where there is evidence that the correct form is a document which both parties are aware of and recognise, and would normally expect to be included: see _Newcon Builders Pte Ltd v Sino New Steel Pte Ltd_ at \[59\], referring to _Modern Building Wales Ltd v Limmer & Trinidad Co Ltd_ (“_Modern Building_”). In _Modern Building_, for example, the main contractor’s order to the subcontractor required them to supply labour plant and machinery in full accordance “with the appropriate form for nominated sub-contractors (R.I.B.A. 1965 edition)”. This was an inaccurate description of the standard form sought to be incorporated as there was no such RIBA Subcontract form. But _uncontroverted expert evidence_ – which is absent on the facts in our case – was led which showed that persons in the construction industry would have understood the term in question to refer to a F.A.S.S. “Green Form”, a subcontract published by another body for use with the RIBA conditions. The Court therefore decided to ignore the factually inaccurate reference to the RIBA Subcontract form, and held that the remaining words of the incorporating clause were sufficient to incorporate the F.A.S.S Green Form.

105    However, where a party seeks to rely on the surrounding factual context in support of its construction of the contract (including, as in this case, prior course of dealing), that party must specifically plead each fact that it wishes to rely on and the effect which such facts will have on its contended construction: _Sembcorp Marine Ltd v PPL Holdings Pte Ltd and another and another appeal_ (“_Sembcorp_”) at \[73\]; Supreme Court Practice Directions, para 35A(2). In the present case, Arup has failed to specifically plead its previous course of dealings with GSS, even though this forms the factual context which it relies on in support of its interpretation of the term “ACEA Form Contract”. GSS’s objections are valid and Arup is precluded from relying on such evidence as a basis for its contention that the ACEA Form Contract was incorporated into their Agreement with GSS. Indeed, as noted above, Arup did not even plead that it was the ACEA _Short_ Form of Contract which was incorporated into the Contract.

106    Leaving aside the point on pleadings, another possible route for the ACEA Form of Contract to be incorporated into the parties’ Agreement may be through GSS’s unqualified acceptance of Arup’s Fee Proposal. GSS never queried Arup on its reference to the ACEA Form of Contract, especially when it was not annexed to the Fee Proposal, although non-inclusion by itself was not fatal (see _eg_, _Press Automation Technology Pte Ltd v Trans-Link Exhibition Forwarding Pte Ltd_ _(_“_Press Automation_”))_._ However, the facts of _Press Automation_ can be distinguished on the facts since the standard form contract sought to be incorporated in that case was clearly referred to, in contrast with cl 8, which does not specify which version of the ACEA Form Contract was sought to be incorporated.

107    In _RI International Pte Ltd v Lonstroff AG_ (“_R1 International_”), a buyer purchased rubber from a seller on the international commodities market in five separate transactions over the course of a year. Each of these transactions proceeded in a similar fashion. Essentially, after the parties conclude their negotiations, the seller would send the buyer “email confirmations” setting out the basic terms that the parties have agreed upon. The buyer would then respond with a purchase order setting out the same. Thereafter, the seller would send the buyer a detailed contract note with a request that the buyer countersign the contract note and return a copy. The rubber would then be delivered and an invoice would be issued. Each contract note stated, amongst other terms, that the International Rubber Association Contract for “Technically Specific Rubber” would apply (“the IRAC Terms”).The IRAC Terms provided for disputes to be resolved by arbitration, with the second to fifth transactions providing for arbitration in Singapore. The buyer accepted delivery and paid for the rubber without protest in all five transactions, even though it did not countersign or return a copy of the contract note. A dispute regarding the second transaction and the buyer commenced proceedings against the seller. The seller commenced proceedings in Singapore, seeking an anti-suit injunction against the buyer for breaching the agreement to arbitrate in Singapore.

108    One issue that arose was whether the IRAC Terms had been incorporated into the contract. The Court of Appeal held at \[51\], that this “turned on ascertaining the parties’ objective intentions gleaned from their correspondence and conduct in light of the relevant background as disclosed by the evidence. The relevant background includes the industry in which the parties are in, the character of the document which contains the terms in question as well as the course of dealings between the parties”. In concluding that the IRAC Terms were incorporated into the contract, it is important to note that the Court of Appeal took into account the practice in the international rubber commodities market for parties to contract on standard terms, the fact that the buyer was known in the rubber trade, the size and scope of the subject matter of the relevant transaction, the matters dealt with by the IRAC terms and the parties’ conduct throughout the course of the five transactions.

109    This case is distinguishable from the present dispute in two regards. First, the seller relied on the trade custom in the rubber commodities market and alternatively a previous course of dealing. Both of these matters were properly in issue and the relevant evidence was placed before the court; this is unlike the present dispute before me. Secondly, the silence from the buyer may not, by itself, constitute acceptance of the terms by the other party; silence was therefore not necessarily fatal that the terms had been accepted. The effect of silence is very context-dependent.

110     _Hyder Consulting (Aust) Pty Ltd v Wilh Wilhelmsen Agency Pty Ltd_ (“_Hyder Consulting”_) involved a dispute between the owner and its consultants in a redevelopment project. The owner sued its architect for not passing relevant loading information for the pavement to the engineer when the owner decided to use larger forklifts and its engineer for making insufficient enquiries of its own as to what weights the pavement was expected to bear. As far as the engineer was concerned, the relevant issue was whether the ACEA conditions had been incorporated into their contract, which would have enabled the engineer to avail itself of the limitation of liability in those conditions as to amount and duration. In this case, the architect, on behalf of the owner, had written to the engineer with drawings, design documentation, reports and documents, asking for their proposals and fee submission for engineering services. The engineer responded and also stated: “We propose that our appointment be in accordance with the ACEA Conditions of Engagement.” The architect, on behalf of the owner, confirmed the engagement of the engineer in accordance with its request to the engineer and the engineer’s offer of services. The engineer never forwarded a copy of the ACEA Conditions nor did the owner or architect exert themselves to obtain a copy. That subject was never mentioned subsequently by anyone to anyone else. The New South Wales Court of Appeal held that when engineering services were provided and the benefit of the services had been taken by the owner, there was acceptance of the services on the terms and conditions offered by the engineer, including the ACEA terms. Where an offeree takes the benefit of a contract in circumstances indicating that the offeror be paid in accordance with the offer, the inference is open that the offer was accepted according to its terms.

111    It is important to note however that expert evidence was led in _Hyder Consulting_ to the effect that the ACEA conditions of engagement were recognised in the industry and were the most used standard conditions of engagements of engineers and others. Also, the owner assumed that they would be subject to the conditions whether or not they received the ACEA conditions. _Hyder Consulting_ is therefore of little assistance to Arup.

112    In the present case, the evidence showed there was more than one type of ACEA Form Contract. Arup initially gave discovery of the 2009 ACEA short form, which was the wrong edition of the short form. The relevant edition (this being the 2007 ACEA short form) was produced later. Mr Adcock accepts that there is more than one type of ACEA Form Contract.[\[note: 152\]](#Ftn_152) Again leaving aside the pleadings point, Arup led no evidence as to how widespread this Australian form’s use was in Singapore or how the industry would have understood what the phrase “ACEA Form Contract” meant.

113    In the circumstances, it remains unclear what is meant by “ACEA Form Contract” at cl 8 of the Fee Proposal. It is trite law that where a contractual term is unclear, the court cannot make a contract for the parties by deciding for itself what that term means: _The Law of Contract in Singapore_ (Andrew Phang Boon Leong gen ed) (Academy Publishing, 2012) at para 03.147. I therefore hold that Arup has not made out its case that the ACEA Short Form Contract has been incorporated into the Contract.

### Whether Arup owed GSS any duties in tort

114    GSS contends that Arup not only owes it an implied duty of care at law in contract (relying on _Go Dante Yap v Bank of Austria Creditanstalt AG_ (“_Go Dante Yap_”)), but also a duty of care in tort. The parties have pleaded and framed this in their Agreed Issues as:

(a)     whether Arup owed GSS any concurrent duty of care in tort; and

(b)     if so, what was the scope of such duty?

115    GSS submits that Arup has an implied duty of care in contract and a “co-extensive” duty in tort to carry out its express duties under the Contract with the standard of care, skill and diligence expected of a reasonably competent and skilled M&E consultant experienced in designing data centres as this was what Arup held itself out to be.[\[note: 153\]](#Ftn_153) While Arup denies in its Defence and Counterclaim that it owes a concurrent duty of care in tort,[\[note: 154\]](#Ftn_154) it did not pursue this point in its closing submissions. Notably, Arup accepts in its closing submissions that it owes Arup a duty in _contract_ to exercise reasonable care and skill which can be expected of an ordinarily competent M&E consultant.[\[note: 155\]](#Ftn_155) In Arup’s Defence and Counterclaim, it pleads in the alternative that it does not owe a duty of care which is wider than what was in the Fee Proposal.

116    It is possible for identical duties to exercise care and skill to exist in both contract and tort between the same parties, as a relationship of proximity may arise by virtue of the contract and the work to be performed under it, unless of course the contract expressly excludes a duty of care, or where the contractual framework is structured to demonstrate that the parties intended thereby to exclude the imposition of a tortious duty of care: see _Go Dante Yap_ at \[20\].

117    I am satisfied that, applying the framework set out in _Spandeck Engineering (S) Pte Ltd v Defence Science & Technology Agency_ , Arup owed GSS a duty of care in tort. First, on the threshold requirement, it would have been clearly foreseeable and obvious to Arup that GSS would suffer losses from its (Arup’s) carelessness. Secondly, there is legal and circumstantial proximity as Arup was engaged by GSS to be the M&E consultant of the Project. Additionally, Arup accepts that it held itself out as experienced in providing data centre solutions, being technically sophisticated and employing technically qualified people. Thirdly, I do not find any policy considerations which could negate the existence of a duty of care in tort. There is also nothing in the Fee Proposal which expressly or implied excludes a concurrent duty of care in tort.

118    It is trite that the applicable standard for determining whether a professional had breached its duty of care to its client is that of a reasonably competent practitioner in the profession concerned (_Jackson & Powell on Professional Liability_ (“_Jackson & Powell_”) (Sweet & Maxwell, 8th Ed, 2017) at para 9-099). Thus, Arup’s duty was, as submitted by GSS, a general duty to carry out its express duties under the Contract with the standard of care, skill and diligence expected of a reasonably competent M&E consultant. This is consistent with the Court of Appeal’s observation at \[19\] of _Go Dante Yap_ that “\[a\] duty of care in the tort of negligence… is necessarily a broad duty to take such care as is reasonable in the circumstances” and that “\[m\]atters of detail are best treated as part of the question of breach, not as raising sub-duties with a specific content”.

119    Additionally, this reasonably competent M&E consultant against whom Arup’s conduct is being judged must be one that also possesses the same experience in the design of data centres as Arup does (see _Jackson & Powell_ at para 2-135).

120    However, the existence of Arup’s duty in tort has little practical significance in this case. It is GSS’s case that Arup’s duty in tort is “co-extensive” to its duty under contract.[\[note: 156\]](#Ftn_156) GSS also pleads that each alleged breach is a breach of both Arup’s duties in contract and in tort,[\[note: 157\]](#Ftn_157) and does not distinguish between these when setting out the various heads of losses and damage.[\[note: 158\]](#Ftn_158) The distinction between contract and tort might sometimes make a difference in terms of limitation periods and perhaps quantification of damages, and interesting questions could arise regarding the interplay between contract and tort (for instance, the question of analytical priority of contract over tort (see further Goh Yihan and Man Yip, “Concurrent liability in tort and contract: An analysis of interplay and independence” (2017) 24 Torts Law Journal 148)). But, as will become apparent, these distinctions have little practical significance given my findings below. I will therefore not consider Arup’s alleged breaches of its duties in tort separately.

### Whether Arup owed an implied obligation to GSS to ensure its design would be fit for purpose

121    GSS pleads that it is an implied term of the Contract that Arup would ensure its designs for the M&E systems would “meet the needs of the operation of a data centre and … be fit for their intended purposes”.[\[note: 159\]](#Ftn_159) GSS alleges that this duty extended to ensuring that there was sufficient NBP for the IT Load Requirement, sufficient SBP for the Mechanical Load Requirement, and sufficient cooling capacity for the Cooling Load Requirement.[\[note: 160\]](#Ftn_160) It also claims that this implied term was breached by Arup failing to perform its M&E services properly, resulting in defects to the Extension (such defects being narrowed by the time of closing submissions to the issue of moisture forming on the chillers).[\[note: 161\]](#Ftn_161) Arup denies the existence of such an implied term.[\[note: 162\]](#Ftn_162)

122    Preliminarily, it is unclear whether GSS is seeking to argue that the fitness for purpose term should be implied as a matter of law, or as a matter of fact. The authorities cited by GSS (a passage from Stephen Furst QC and Sir Vivian Ramsey, _Keating on Construction Contracts_ (Sweet & Maxwell, 10th Ed, 2016) (“_Keating_”) at para 3-071, and the English case of _Greaves & Co (Contractors) v Baynham Meikle & Partners_ (“_Greaves & Co_”)) do not support the view that such a term should be implied as a matter of law.

123    First, the passage in _Keating_ focuses on the implied obligation of _contractors_, and is silent on whether this implied obligation extends to designers or M&E consultants. In this regard, I note that there is a general reluctance to extend that same implied obligation to professionals generally (see _George Hawkins v Chrysler (UK) and Burne Associates_ (1986) 38 BLR 36 (“_George Hawkins_”); _Platform Funding Ltd v Bank of Scotland plc (formerly Halifax plc)_ at \[16\]-\[19\], \[30\], and \[48\]). As the authors of _Jackson & Powell_ note (at para 9-124):

There will be _no absolute answer_ as to whether one who _designs but does not supply an article or build a structure_ is under a duty to ensure that it is reasonably fit for its intended purpose, but such a duty will not be implied by law. It will therefore arise either on a true construction of the parties’ agreement or as an implication from the common intention of the parties. \[emphasis added\]

124    Secondly, the court in _Greaves & Co_ made clear that the implied obligation found to have arisen on the facts was an implied term in fact, and not in law. All three judges emphasised that they were not laying down any general principle applicable to all contracts between designers and their employers (_per_ Lord Denning at 1100; _per_ Browne LJ at 1102E–F; _per_ Geoffrey Lane LJ at 1103E–F). Indeed, _Greaves & Co_ has been read narrowly by a differently constituted Court of Appeal in the subsequent case of _George Hawkins_ (see _George Hawkins_ at 48–49). In particular, Dillon LJ at 53 observed that:

The general position, as \[Fox LJ\] has shown by reference to \[_Greaves & Co_\] is that a professional man who is called to advise is bound, and impliedly undertakes, to use reasonable care and skill in advising, but is not responsible for providing a perfect result or a perfect building. _To establish a warranty that what he advises will be effective, something more is needed than his mere engagement as a professional man to advise_. \[emphasis added\]

125    I therefore decline to find any implied term in law because the threshold for implying such a term is a high one, and neither party has addressed me sufficiently on this. Thus, the only available avenue open to GSS is to show that a fitness for purpose warranty should be implied into the contract in fact. However, it has also not addressed me on whether the test for implying a term in fact as set out in _Sembcorp_ (at \[101\]) is satisfied.

126    In any case, I find that there is no such implied term in fact. When approaching this issue two questions arise: Fit for what purpose? And, “fit” to what standard? In the context of designing a data centre, the latter question is susceptible to numerous levels of quality and standards, such as the degree of redundancy – for instance, Mr Peck gave evidence of various options such as “N+N”, “N+2”, “N+25%”, or “N+1”.[\[note: 163\]](#Ftn_163) This in turn determines whether a data centre is concurrently maintainable consistent with the Uptime Institute’s Tier III rating,[\[note: 164\]](#Ftn_164) fault tolerant consistent with the Uptime Institute’s Tier IV rating,[\[note: 165\]](#Ftn_165) or otherwise – or whether the equipment is to be single-corded or double-corded.[\[note: 166\]](#Ftn_166)

127    While GSS has addressed the first question by identifying the purpose as use as a data centre, it has not dealt with the latter. One might fall back on the Fee Proposal, in that GSS would have wanted a data centre based on what was set out therein. But even that document is unclear on what standard applies. To illustrate, sections of the Fee Proposal provide as follows:[\[note: 167\]](#Ftn_167)

Develop, review _and agree_ the design brief to reflect the needs of Global Switch. Designs shall be based on design criteria _agreed with Global Switch_ to suit local conditions …

…

_Agree the method of cooling_ (chilled water, cooling tower water, refrigerant). _Agree DRUPS capacities and configurations._

\[emphasis added\]

128    Parties had set down certain matters in the Fee Proposal and claimed that those were to be agreed, but it remained vague what tier of data centre the Extension would be. The most that can be said is that:

(a)     There was some discussion between the parties on this issue. See, _eg_, the email from Mr Adcock to Mr Paddy explaining the “fundamental Tier difference between the existing facility … which electrically is an enhanced Tier IV or 2N facility … and the extension which is a Tier III or N+1 facility”.[\[note: 168\]](#Ftn_168) Mr Adcock also mentioned that “clients always want Tier IV reliability, but are only prepared to pay for Tier II or III”, and that “no one is building Tier IV … data centres anymore and this is due to both cost and sustainability issues”. However, because the parties had not pleaded this discussion which constitutes extrinsic evidence, little weight can be given to it.

(b)     Sometime in June 2010, T&T issued a report on Arup’s Revised Design stating clearly that ‘\[GSS’s\] requirement is for a concurrently maintainable system (e.g. complying with Tier III of Uptime Institute definition). \[GSS\] don \[_sic_\] not require the design to be concurrently maintainable _and fault tolerant_ … _the design is not required to survive a “second maintenance of fault event” or a “fault during a maintenance event”_’ \[emphasis in original omitted; emphasis added in italics\].[\[note: 169\]](#Ftn_169) Therefore, despite GSS’s assertion in its closing submissions that there is nowhere in the Contract that defines the data centre to be of a Tier III data centre,[\[note: 170\]](#Ftn_170) the fact of the matter is that T&T – GSS’s own consultants – were very clear that GSS was getting a Tier III-standard Extension. Indeed I note that in Mr Turvey’s affidavit he himself used the term “Tier 3 data centre”,[\[note: 171\]](#Ftn_171) in the context of alleging that the Revised Design failed to protect the IT Load from the circumstances that a Tier III data centre was designed to ride through.

(c)     That formal labels were not always used does not change the substance of the matter. This is so notwithstanding Mr Turvey’s claim during cross-examination that “we don’t really think of ourselves in terms of the Uptime Institute’s classifications” and that it was a “convenient thing when we’re commercially talking to a customer because there tend to be certain standard expressions that a customer will understand quickly”.[\[note: 172\]](#Ftn_172) Such a view also finds support in GSS’s experience with customers such as Pacnet (discussed further beginning from \[383\] below), which were clear about the different levels of service they could obtain at particular price points.

If anything, I find that parties did understand that the Revised Design was to be concurrently maintainable but not fault tolerant – _ie_, that the Extension would be Tier III in substance though they may not have used those words exactly. Regardless, absent sufficient particularisation of the applicable standard, _on GSS’s pleaded case_ an implied term of fitness for purpose is too vague and ambiguous to succeed.

129    In any case, I would not have found the _Sembcorp_ test for implication of terms to have been satisfied. Under this test, the court must consider: first, whether the gap arose because the parties did not contemplate the gap; secondly, whether it is necessary in the business or commercial sense to imply a term to give the contract efficacy; and thirdly, whether the specific term to be implied is one which the parties, having regard to the need for business efficacy, would have responded “Oh, of course!” had the proposed term been put to them at the time of the contract (_Sembcorp_ at \[101\]).

130    In relation to the first step, I find that the parties did not contemplate the question of whether Arup should be under a contractual warranty that its design would be fit for purpose. Both parties have not adduced any evidence to show that this issue was discussed during negotiations, nor do the express terms of the contract shed any light on this. However, an implied term for fitness for purpose would not have been necessary for business efficacy, because Arup would already be under a duty to use reasonable care and skill in performing its contractual obligations. The officious bystander test would also not have been met. Arup would not have agreed to guarantee more than the use of reasonable care and skill, considering its modest fee and the fact that it was to develop the design in close consultation with GSS. Accordingly, I reject GSS’s submission that it was an implied term of the Contract for Arup to ensure that its designs were fit for their intended purposes.

### What the Fee Proposal and Purchase Order provided for

131    I now deal with the issue of what did the Fee Proposal (as accepted by the Purchase Order) provide for. This answers an agreed issue: what were Arup’s obligations to GSS under the Contract with respect to the IT load requirement? There are two facets to this, the first being Arup’s claim that the 4,000 kW of NBP for the IT load was “a target” or an “aspiration” and not a fixed contractual requirement, and the second relating to the parties’ disagreement on how the diversity factor is to be applied to the stipulated 4,000 kW. I leave to one side, for now, the design of the cooling load and SBP.

#### First facet: 4,000 kW of NBP as fixed contractual requirement

132    We first look to the text. It is clear that the Contract was for Arup’s engineering design services for the Extension and associated infrastructure which included the engineering disciplines of mechanical, electrical and hydraulics and fire protection. It is stated to be based on the briefings to Mr Adcock on 1 August and 2 September 2008 as well as specified drawings from AWP and Babtie. There was no evidence led on these briefings and I take it that nothing turns on it.

133    Importantly, the scope of the Project was “**_to provide_** _five floors_” of the Extension “**_@ 1 kw/m2_** for a total of 4,000 m2 with an _overall diversity of 0.9_” \[emphasis added in italics and bold italics\].[\[note: 173\]](#Ftn_173) Leaving aside the application of diversity, it is clear, and it cannot really be in dispute that what GSS wanted was additional space in the Extension to let with an electrical system that provided 1 kW/m2 or a total of 4,000 kW for the IT Load (with an overall diversity of 0.9). That was, at the very least, the starting point.

134    Arup, however, rely on the other provisions of the Fee Proposal to support their contention that the figure of 4,000 kW was not a fixed contractual requirement but some goal or something to work towards. Arup points to their stated work for the conceptual/preliminary design stage where their proposal was to “**_Develop_**_, review_ **_and agree_** the design brief to reflect the needs of \[GSS\]” \[emphasis added in italics and bold italics\] (see \[19(i)\] above). Arup had stated in their Fee Proposal that this was one of the most critical stages of the Project as _a carefully developed and agreed_ conceptual design would ensure the smooth running of all subsequent stages. Hence their design was not fixed at the Fee Proposal stage, but only at the end of the Conceptual/Preliminary Design stage, after their design criteria was agreed with GSS.

135    The following sub-paragraphs in the Fee Proposal tend to support Arup’s contention that the 4,000 kW was not a fixed contractual stipulation, in that it could be changed:

(a)      _establish and agree_ electrical power density requirements for cabinet/racks, numbers and power consumption of cabinets/racks (at \[19(iii)\] above);

(b)      _establish_ electrical capacity and cooling load requirements based on power densities _and agreed_ spare capacity for expansion (at \[19(iv)\]);

(c)      _confirm_ the levels of redundancy required for electrical and mechanical plant and distribution systems (“N+1”) (at \[19(v)\]); and

(d)      _agree_ the method of cooling (chilled water, cooling tower water, refrigerant). _Agree_ DRUPS capacities and configurations (at \[19(vi)\]).

136    Arup’s contention also rests on the words as set out in \[19(i)\]. Besides developing, reviewing and agreeing the design brief to reflect the needs of GSS, the Fee Proposal goes on to provide: “Designs shall be _based on design criteria_ **_agreed with \[GSS\]_** _to suit local conditions_, regulations and _any restrictions imposed by the building fabric, structure and infrastructure_” \[emphasis added in italics and bold italics\].

137    What was the design brief that Arup promised to deliver? In my judgment, in relation to the power (and therefore the NBP) for the Extension, Arup was to propose and design an electrical system or scheme, comprising the necessary pieces of equipment and components, arranged in a proper sequence and layout, so as to deliver 4,000 kW (with an overall diversity of 0.9) for the IT Load in GSS’s proposed Extension which was for rental to tenants or customers. It also included a new chilled water system for the cooling load. It necessarily involved discussions with GSS to establish what it required and to agree the same – this is clear from the sub-paragraphs referred to above and at \[19\]; Arup then had to source the available suitable equipment and components, formulate a design or plan to link the equipment and components into a system (which included delivery of normal electricity from the power grid mains), to deliver what was required for the Extension. That was their design brief.

138    I do not accept Arup’s contention that the 4,000 kW was a “target” or an “aspiration” that it would work towards. As a matter of construction, it is clear from the Fee Proposal that an Extension with 4,000 kW (with an overall diversity at 0.9), was the stipulated requirement of GSS that formed the basis of Arup’s design brief under their “scope” of work in their Fee Proposal, unless GSS wanted a change or agreed to a revision of that figure during the design development.

139    It is also clear that the stipulated power for the IT Load and Arup’s design elements could be affected by any restrictions imposed by the building fabric, structure and infrastructure and “to suit local conditions” under \[19(i)\]. Any decision thereon by Arup had to be agreed with GSS and their Project consultants. As we shall see below, space was tight, and there were limited areas where, in the view of the Project structural engineers, Babtie, and the Project architects, AWP, the DRUPS units for the Extension could be located. The other potential location above the HV Transformer was ruled out by Babtie and AWP. Just to give two examples that may also have caused changes to GSS’s requirements, first, there may have been cost constraints on the provision of four (which may have been ideal and catered for future requirements) instead of three DRUPS units; secondly, some larger capacity DRUPS units may not be suitable for local conditions as they did not operate at a frequency of 50 Hz. However, the burden of proving if there were any changes or decisions by GSS which altered their obligations set out under their Fee Proposal and accepted by GSS, rests on Arup.

140    Before I leave this issue, I point out that Arup’s Defence and Counterclaim, refers to the 4,000 kW as a “power _requirement_” \[emphasis added\] and not a target:[\[note: 174\]](#Ftn_174)

15.    The Plaintiff has misapplied the formulate to calculate power required when a diversity of 0.9 is applied to 4,000 kW. The correct formula is 4,000 kW x 0.9 = 3,600 kW. Introducing diversity _reduces the power requirement_. \[emphasis added\]

The use of the word “requirement” speaks for itself and is incompatible with a “target” which could shift. However, Arup also pleads in its Defence and Counterclaim that GSS _varied_ their proposal:[\[note: 175\]](#Ftn_175)

19.    … the Defendant \[issued\] agreed tender documents for 3 DRUPS units to be installed in an N+1 configuration. _This configuration reduced the_ \[NBP\] _for the IT load from 3,600 kW as envisaged in the Proposal (see Paragraph 15 above) to 2,800 kW. The Plaintiff was aware of this. This constituted a variation from the Proposal._ \[emphasis added\]

141    Arup is therefore not precluded from trying to establish that for various reasons (just to take an example, space and cost constraints) it was limited by GSS to three DRUPS units, or that GSS agreed to lowering the NBP for the IT load from 4,000 kW (with diversity of 0.9).

#### Second facet: Application of the diversity factor

142    I now turn to the second facet, the meaning of and how a diversity factor is to be applied to the 4,000 kW NBP. GSS contends that 4,000 kW should be divided by 0.9 or be disregarded altogether, but Arup contends that 4,000 kW should be multiplied by 0.9.

143    GSS first submits that the diversity factor should not apply for two principal reasons. First, applying a diversity factor at the design stage would not make commercial sense because GSS would not know, at that stage, how much NBP its tenants would actually use. Secondly, extrinsic evidence shows that the parties intended that Arup would produce a design to provide 4,000 kW of NBP.[\[note: 176\]](#Ftn_176)

144    These two arguments must be rejected because:

(a)     First, the Fee Proposal plainly uses the words “an overall diversity of 0.9”. These words have a meaning on their plain reading and in context and must be given effect. GSS’s claim that the diversity factor should not be taken into account in determining Arup’s obligation is essentially a submission that I should disregard the plain words of the Fee Proposal. Such an approach in the construction of a term is impermissible.

(b)     Secondly, GSS did not plead that the diversity factor should not be applied in determining Arup’s contractual obligation regarding the NB Specification. It is important that GSS’s pleaded case is that the diversity factor should be applied not by multiplication but by division. GSS’s pleaded case in its Statement of Claim states:[\[note: 177\]](#Ftn_177)

With regards to the phrase “overall diversity of 0.9” in the Agreement … the Plaintiff avers that **_when a 0.9 diversity is applied_** to the power requirement of 4,000 kW, **_at least 4,000 kW, and up to 4,444 kW (i.e. 4,000 kW ÷ 0.9 = 4,444 kW), must be provided_** by the power infrastructure … \[emphasis added\]

(c)     Thirdly, GSS did not refer to the extrinsic evidence that it relies on in its submissions in its pleadings. It is settled law that where a party seeks to rely on extrinsic evidence in support of its interpretation of a contract, that evidence must be pleaded: see _Sembcorp_ at \[73\] and _Yap Son On v Ding Pei Zhen_ at \[46\]. I cannot have regard to the evidence cited by GSS (or even Arup for that matter) in its closing submissions in interpreting the Contract.

(d)     Fourthly, apart from the preceding factor, extrinsic evidence is inadmissible to subtract from the terms of a written contract that embodies the entire agreement between the parties: see _Zurich Insurance (Singapore) Pte Ltd v B-Gold Interior Design & Construction Pte Ltd_ at \[132(b)\]. Thus, even if the extrinsic evidence which GSS relies on were pleaded, I could not rely on it for the purpose of ignoring the words “an overall diversity of 0.9” in the Fee Proposal, which is the effect of GSS’s arguments.

(e)     Fifthly, I reject GSS’s claim that it does not make sense to apply a diversity factor at the design stage. This was an opinion expressed by Mr Ansett who gave expert evidence that doing so was “unheard of” and would be “commercial suicide”.[\[note: 178\]](#Ftn_178) Mr Peck took a different view. I formed the view that Mr Ansett proffered this rather partisan opinion without convincing reasons because he could not explain away the phrase being clearly stated in the parties’ agreement or the numerous emails and references in GSS contemporaneous documents as to:

(i)       the reason why a diversity factor was being applied; and

(ii)       the application of the diversity factor by GSS in the manner advocated by Arup, _ie_, by multiplying the 4,000 kW by the diversity factor.

145    I prefer Mr Peck’s view that diversity could be applied at the design stage, not only because it makes common and commercial sense but also because it is consistent with the many contemporaneous emails and documents, both from Arup as well as GSS, discussing its application in the manner pleaded by Arup. Mr Ansett appeared to be attempting to explain GSS’s position even though their pleaded case was _not_ that a diversity factor should not be applied at the design stage but that it meant that Arup’s design was required to provide 4,000 to 4,444 kW for the Extension. Mr Peck was more practical in giving evidence that diversity could be applied at the design stage; to do so was a “bet” that customers would not use the full amount of their contracted NBP, which data centre operators might take to defer expenditure and save costs.[\[note: 179\]](#Ftn_179) I accept Mr Peck’s opinion, and note that the cost-saving approach he outlined coheres with the view I have reached of GSS’s approach to the Project.

146    I find that a diversity factor is applied because it is the experience of data centre operators that their tenants do not always take up all the contracted NBP for their leases. There are quite a number of emails and contemporaneous documents, especially those emanating from GSS and Global Switch, evidencing this. I need only pick up the following examples, one before the Fee Proposal and three that came after, to illustrate my finding. In my view, these emails are very telling in more ways than one because they are contemporaneous pieces of evidence of what GSS was thinking of at that time in relation to capital expenditure and the power they were willing to provide for the Extension.

(a)     Mr Paddy’s email to Mr Adcock dated 29 August 2008[\[note: 180\]](#Ftn_180) where Mr Paddy had drafted a paper for internal use at GSS and Mr Paddy asked Mr Adcock to “add\[,\] take away or ammend \[_sic_\] this for me as you see fit if it needs it”:

The _application of a diversity factor_ to a large power and cooling system is a _legitimate way in which an installation can be viewed to gain maximum use of the infrastructure systems that have been designed and installed_ around it …

It works on the principle that _all parts of the system will not be loaded to their theoretical maximum at any one time_. In the case of a data centre very simply put this equates to saying if our customer base requests 1000w/sqm as an average over the whole building then its extremely unlikely that they will all ever reach their maximum loading.

Customers such as financial institutions design their installations very conservatively and generally _don’t reach more than 60 to 70% of their design capacity in some cases less_.

In our case _the application of a .9 diversity factor effectively allows us to sell some additional capacity that is unlikely to be otherwise used._

It has to be recognise that there is a commercial risk in this, however a .9 factor is conservative and many installations have a lower factor. The bigger the overall system the more scope there is to apply factors lower than .9 however Sydney’s power system is effectively made up of a group of smaller systems and as such we would not recommend moving to lower factors. An extended Singapore site at Tai Seng Avenue wold also be a mix of systems and therefore a .9 factor is considered to be commercially acceptable.

\[emphasis added\]

Mr Adcock replied on the same day and agreed with Mr Paddy’s draft and additionally stated that he believed Mr Paddy was “being conservative (for banks, however the Googles & Microsoft MSN are another story and will use their full limit)”.[\[note: 181\]](#Ftn_181) Mr Adcock’s warning about different tenants like Google and Microsoft MSN was a relevant portent for what was to happen in 2010.

(b)     GSS’s Global Business Change Programme (which I have already referred to at \[35\]) which clearly mandated using up all unused power and the application of “power diversity initiatives”;

(c)     A self-explanatory email dated 30 January 2009 from Mr O’Brien, Global Switch’s CEO Asia Pacific to Mr Paddy and Mr Guth:[\[note: 182\]](#Ftn_182)

John has asked us to look at the extension build in light of possible savings due to the application of power diversity initiatives etc.

For example, is it possible to reduce the power build to provide 800W/sqm with an option of adding extra power at a later stage if required?

“John” here refers to Mr John Corcoran (“Mr Corcoran”), Executive Chairman of GSS’s parent company based in the United Kingdom.

(d)     This was the position that GSS took in a letter of demand to Arup dated 25 March 2013, where GSS’s solicitors stated that:[\[note: 183\]](#Ftn_183)

You were required by \[the Contract\] to deliver 1,000W/m2 of power to 4,000m2 of floor space (at a diversity factor of 0.9) using a DRUPS system in an N+1 configuration, thereby providing 3,600 kW of IT power.

During cross-examination, Mr Turvey conceded that there was an inconsistency between the position taken in this letter, and Arup’s Statement of Claim.[\[note: 184\]](#Ftn_184) He also accepted that, at the time of the letter, he must have accepted that the diversity factor of 0.9 was to be applied when determining Arup’s obligations as to NBP under the Fee Proposal.[\[note: 185\]](#Ftn_185)

147    It is also convenient at this juncture to refer to an email of Mr Adcock dated 11 February 2009 to Mr Paddy (and Arup’s engineers, Mr Burleigh, Mr Ma and Ms Debra Kelly (“Ms Kelly”)) which was an attempt to inform GSS of some facts in relation to Global Switch’s call for “power diversity initiatives”.[\[note: 186\]](#Ftn_186) Three things are of note. First, Mr Adcock stated that typically, banks who have up to seven IT platforms have an average load of 50 to 70% of their power contracted density (and GSS counted at least one bank in their Existing Facility). Secondly he warned that one must consider the peak loads of tenants like banks, at the end of the day, week or month. Thirdly, at the end of the day, the application of power diversity was not an engineering question but more of commercial management versus risk exercise.

148    Having found that the diversity factor of 0.9 ought to be applied, I turn now to address the question of how the diversity factor ought to be applied. I note that in its reply closing submissions, GSS does not seriously dispute that the application of the diversity factor involves multiplying 4,000 kW (1 kW/m2 over 4,000m2) by 0.9 to arrive at 3,600 kW: it accepts that this is “technically correct”.[\[note: 187\]](#Ftn_187) This concession is unsurprising. When I specifically asked both experts during concurrent evidence as to what applying a diversity factor of 0.9 to 4,000 kW meant, both Mr Ansett and Mr Peck agreed that applying a 0.9 diversity factor to 4,000 kW of power would result in 3,600 kW.[\[note: 188\]](#Ftn_188) Both experts agreed that GSS’s pleaded case of dividing 4,000 kW by 0.9 was incorrect.[\[note: 189\]](#Ftn_189) Further, both Mr Paddy and Mr Guth (GSS’s factual witnesses who were involved with the Project at the relevant time), also accepted that this was how diversity was applied.[\[note: 190\]](#Ftn_190) Mr Guth accepted that at the material time, “there was no concept of 4,400”.[\[note: 191\]](#Ftn_191) Mr Turvey was maintaining GSS’s pleaded case, unreasonably in my view, in spite of all the contemporaneous evidence against that construction. When GSS’s solicitor’s letter of demand to Arup dated 25 March 2013 (which stated that the NBP requirement was 3,600 kW) was put before him during cross-examination, he was forced to concede that he must have reviewed it, agreed to its contents and authorised the issue of that letter of demand and that he, as GSS Managing Director “must have acknowledged \[3,600 kW\] at the time.”[\[note: 192\]](#Ftn_192) These factors militate against the reliability of his evidence.

149    I find that the diversity factor of 0.9 is to be applied in determining Arup’s obligation as to the NBP Specification, by _multiplying_ 4,000 kW (1 kW/m2 over 4,000m2) by 0.9 which reduces the NBP to 3,600 kW. The scope of Arup’s design brief in its Fee Proposal, which was accepted by GSS, was to design and cater for 3,600 kW for the Extension.

150    I note that in its Statement of Claim, GSS had also alleged that Arup was obliged to provide “reasonable \[NBP\] capacity from the DRUPS units”.[\[note: 193\]](#Ftn_193) However, it did not pursue this claim seriously in its closing submissions, and I therefore say no more on this, save to observe that GSS has not shown any basis how such an obligation arose from the Fee Proposal.

### Whether the requirement of 4,000 kW (3,600 kW with diversity applied) for NBP was varied to 2,800 kW

151    This is one of the central issues that lie at the heart of the disputes between the parties. It encapsulates the following agreed issue between the parties:

(a)     whether the Contract was varied such that Arup was only required to design the electrical system to deliver 2,800 kW of uninterruptible and continuous power for the IT Load Requirement.

It also touches upon the more general agreed issue which has to be answered on multiple fronts:

(b)     What were Arup’s obligations to GSS under the Contract with respect to the IT Load Requirement?

152    This issue also touches upon the following agreed factual issues. In relation to the requirements of the contract:

(a)     whether GSS relied on the representations of technical matters by Arup regarding GSS’s business, the DRUPS system and other aspects of the Project in approving Arup’s design; and

(b)     whether Arup’s design reflected the needs of GSS as set out in the Contract, whether varied or not.

In relation to the issuance of the tender documents:

(c)     whether, on or around August to September 2008, GSS agreed that the original scope of work, as set out in the Fee Proposal, was technically not feasible as there was insufficient space for a fourth DRUPS unit to be located over the existing loading dock on a new structural steel frame;

(d)     whether on or around June to December 2008 GSS considered the original scope of work as set out in the Fee Proposal to be commercially not feasible due to its financial constraints in purchasing a fourth DRUPS unit;

(e)     whether GSS was aware that the configuration proposed by the Defendant reduced the NBP for the IT load as envisaged in the Fee Proposal to 2,800 kW; and

(i)       If GSS was unaware, whether Arup caused the issuance of the tender documents for three EuroDiesel DRUPS units to be installed without taking the necessary steps to make it clear to GSS that the three EuroDiesel DRUPS units could only provide a NBP of 2,800 kW instead of at least 4,000 kW under the Contract;

(ii)       If GSS was aware, whether GSS agreed to proceed with Arup’s proposed configuration (_ie_, 2,800 kW of NBP) or whether GSS asked for Arup to adjust the proposed configuration so as to fulfil the IT Load Requirement of at least 4,000 kW under the Contract?

(f)     whether, in 2008, there was a consensus reached between the parties that the two DRUPS units with one additional DRUPS unit in redundancy in an “N+1” configuration, _ie_, the Original Design, was only a temporary solution which could be upgraded in the future.

153    It also affects GSS’s case that due to Arup’s breach of contract and breach of duty, GSS was purportedly forced to accept the Revised Design.

154    To answer these questions, it will be necessary to consider the evidence in some detail. Some of these facts (especially the emails and accompanying documents that passed between the parties) are not really in dispute, while other facts or implications relating to certain pieces of contemporaneous evidence are disputed. Insofar as any facts are disputed, then, unless otherwise indicated, what follows constitutes my findings of fact.

155    I start with three preliminary observations:

(a)     First, Arup’s Mr Ma (and later, Mr Adcock from 2006) had been involved in various designs and fit-outs of the Existing Facility since October 2003 and were not unfamiliar with the Existing Facility or indeed GSS as a client.[\[note: 194\]](#Ftn_194)

(b)     Secondly, when GSS was considering the Extension, the only available space was at the rear of the Existing Facility. As I have said before, the proposed Extension therefore comprised odd-shaped areas tucked into the rear of the existing building rising from L3 to L7 of about 800 m2 per floor.

(c)     Thirdly GSS started talking to their consultants about their expansion plans well before April 2008 and well before Arup’s formal Fee Proposal of 17 September 2008.

156    GSS must have internally carried out an assessment of their current occupancy (stated to be about 84% by the end of 2007 in an internal paper),[\[note: 195\]](#Ftn_195) the market for data centre space, their plans and envisaged a take-up rate from potential customers in the near future and conducted a cost and benefit analysis before embarking on the Project. There were discussions with T&T over costing and benefits, as well as feasibility discussions with Babtie and AWP; Arup does not appear to have been involved in these discussions (see \[158\]–\[159\] below). Arup appears to have separately prepared a set of slides for the Mechanical Services of the Extension in February 2008.[\[note: 196\]](#Ftn_196)

157    It cannot be in dispute that communications over the electrical engineering aspects of the Extension were primarily between Mr Paddy, who represented GSS (see \[92(c)\] above), and Mr Adcock who represented Arup. Of course, as one would expect in projects of this nature, at times other individuals from both these organisations would either send or join in the emails between Mr Paddy and Mr Adcock.

158    On 28 April 2008, Mr Paddy sent Mr Adcock an email (copying others, including Mr Guth), headed “Global Switch Tai Seng Avenue Expansion”:[\[note: 197\]](#Ftn_197)

Peter

_Attached are the new plans for the extened \[sic\] areas that we are seriously planning for Tai Seng Ave._ In essence we have to power and cool these areas.

_What I need_ **_to establish_** _is_ **_what extra power and cooling_** _I need to find and_ **_more importantly where I locate the equipment_** _._ With a structure being put up the full height of the building i see an opportunity to put additional weighty plant in this extened \[_sic_\] area. We should consider battery less UPS systems provided that our machines are online quickly enough to top up the units, which being MTU I am sure they can.

_We may need to find space for two extra generators_. With cooling we also need to be aware of any additional power requirements that will occur as a result.

We need to work quickly on this as we are being pressed to complete feasibility \[_sic_\] and get approval to proceed.

I have copied Jeff \[_a senior specialist at Arup_\] in on this as I am sure there will be things that you need him to look at for you.

Also I need to establish a scope for the enlivenment for level 4 and a cost.

Please advice \[_sic_\] your fees for enlivement and suite design e.g. AT&T there are some other areas that are being looked at Jeff will no doubt brief you on these as he has been talking to Mark and Kelvin.

\[emphasis added in italics and bold italics\]

159    On 16 May 2008, Mr Paddy, as GSS’s then-Technical Director (Asia Pacific), and Mr Eddy Gudijanto (“Mr Gudijanto”), GSS’s Facility Manager of the Existing Facility, met with representatives from T&T to discuss various initial concepts for the Project for the purposes of initial cost estimations. One of these initial concepts included the following:[\[note: 198\]](#Ftn_198)

Allow for 3 DRUPS x 2MW each carry x 6 ton each to be located at roof top.

The contents of this discussion were documented in an email sent by T&T’s Jenny Yeng to John McGowan (“Mr McGowan)”, a structural engineer from Babtie, as well as Claudia Lee and Jeff Allan from AWP on 19 May 2008. The email was also copied to Mr Guth and other T&T representatives. T&T had been told that GSS’s M&E consultants would be Arup, but had yet to receive the relevant contact details as of that date. The email was forwarded to Mr Adcock by Mr Gudijanto three days later on 19 May 2008.[\[note: 199\]](#Ftn_199)

160    At some point Mr Paddy also sent an undated design brief entitled “Tai Seng Extension” to Mr Adcock which stated some of GSS’s M&E requirements for the Project. Some of these requirements eventually found their way into Arup’s Fee Proposal for the Project. One of these requirements was for the use of DRUPS units in an “N+1” configuration. Relevantly, the following was stated in that document:[\[note: 200\]](#Ftn_200)

Five levels of raised floor space with 800sqm per floor for a total of 4,000sqm _@ 1,000 W/sqm_;

New dedicated electrical distribution system comprising Diesel Rotary UPS (DRUPS) _located over the existing loading dock on new structural steel frame_

…

Switchboard and associated equipment

New chilled water system ... _located on the roof_

_…_

_Overall design to provide an N+1 system._

\[emphasis added\]

161    This was a change of location of the DRUPS units from the roof to the second level above the current loading bay. There is evidence that at a relatively early stage, before the Fee Proposal, the location of the DRUPS units had already been chosen by the other consultants, in consultation with GSS; the DRUPS units would sit on a new structural steel frame, built above the loading bay and the chilled water system would be located on the roof. GSS wanted power at the Extension at 1,000 W/m2 and configured as “N+1”.

162    It appears, and I am prepared to so find, that the only other potential location for a fourth DRUPS unit, was above (or almost above) the existing HV Transformer.[\[note: 201\]](#Ftn_201) However, this was ruled out by Mr McGowan (the structural engineer from Babtie). Mr McGowan had raised concerns that micro piling works over the HV Transformer bay was too risky and might impact the existing equipment and the two electrical supply lines coming from the power grid.[\[note: 202\]](#Ftn_202) AWP agreed with this assessment by Babtie and adopted this view; this found expression in some of the emails and documents, again at a relatively early stage, and well before Arup’s Fee Proposal. On 9 July 2008, Mr Paddy asked Mr Adcock to address these concerns. Mr Adcock replied the next day. His only recommendation of significance at this point was for the parties to conduct a site inspection with Mr Burleigh,[\[note: 203\]](#Ftn_203) a Senior Specialist with Arup, and the Project’s eventual Commissioning Engineer.[\[note: 204\]](#Ftn_204) I pause here to note that Mr Adcock testified that Mr Burleigh and Mr Paddy both conducted a walk around of the Tai Seng Site at some point during the design stage which led them to conclude that there was sufficient space for three DRUPS units.[\[note: 205\]](#Ftn_205) However, Mr Adcock did not indicate the date of this site inspection, nor was he referred to his 10 July 2008 email. I accept Mr Adcock’s evidence on this. It is also consistent with the usual practice of a site visit when an engineer or building professional is retained or when some project is initiated; this is so even if that person was involved in the Existing Facility as such a project would have involved new information and new considerations.

163    Several preliminary sketches of the Extension were subsequently sent by Mr Burleigh to Mr Paddy on 28 August 2008.[\[note: 206\]](#Ftn_206) One of the sketches attached indicated the proposed location of the three DRUPS units over the loading bay.[\[note: 207\]](#Ftn_207) This proposed location was also the location of the three DRUPS units that were eventually installed. I also note that the sketches did not identify any other location for additional DRUPS units. Further, the emails do not describe how the locations were identified, nor why space was only identified for three DRUPS units. More importantly, there is no evidence that Arup suggested three DRUPS units and their location. What evidence there is points to that decision being made by either T&T or T&T in consultation with the other project consultants and GSS.

164    I therefore pause here to note, and find, that from the above, at a fairly early stage, _ie_, up to the end June 2008, when the consultants and GSS were in preliminary discussions, a decision was made by them, and not Arup, that:

(a)     three DRUPS units, each capable of 2 MW (or 2,000 kW) power, were envisaged for the NBP in the Extension (it should be noted that in an “N+1” configuration, two such DRUPS unit should be able to provide the 1 kW/m2 or 4,000 kW stipulated in the Fee Proposal, whether the 2,000 kW included both NBP and SBP was not explored by the parties at trial and whether there was a higher capacity DRUPS unit available is another matter which I deal with below);

(b)     the position for the proposed DRUPS units was designated, _viz_, above the existing loading bay and on a new structural steel frame to be constructed and that space generally was tight;

(c)     locating DRUPS units above the existing HV Transformer bay, the only other potential location, was ruled out by Babtie and/or AWP because of the risk of the micro piling work affecting the HV substation equipment and the two main electrical power lines coming in from the electrical grid;

(d)     the planned NBP was 1,000 W/m2 (diversity was being discussed by GSS);

(e)     the configuration would be “N+1”; and

(f)     the new chillers and associated equipment were to be located on the roof.

165    In an email dated 27 June 2008,[\[note: 208\]](#Ftn_208) from Mr Adcock to Mr Paddy we can see a change from the references to 2 MW DRUPS unit to a 1,670 kVA DRUPS unit. This was part of an email chain where GSS had ordered 2 HV panels (unconnected to the current disputes), but found they only needed one HV panel. Mr Paddy then asked Mr Adcock whether they could use the extra HV panel in the Extension, rather than incur cancellation charges. Mr Adcock replied that they could if the Extension went ahead. Mr Adcock wrote: “we would require this to serve 2No of the 3No 1670 kVA DRUPS required. I’m not sure yet if another HV panel and transformer would be required for the 3rd DRUPS”.

166    Mr Paddy was cross-examined on where this reference to 1,670 kVA DRUPS units had come from.[\[note: 209\]](#Ftn_209) He accepted it came from the Piller technical data sheet that was sent to him (see \[176\]–\[177\] below), which was for the Unibloc-T diesel with essential bus bar 400V/50Hz. Mr Paddy admitted that the Global Switch Sydney data centre used Piller DRUPS units and agreed that these were the 2.2 kVA (1.8 MW) and 2.5 kVA (2 MW) DRUPS units, not the 1,670 kVA units. Under further cross-examination, Mr Paddy suggested that the 1,670 kVA referred to was the NBP component.

167    I have already referred to Mr Paddy’s email to Mr Adcock on 29 August 2008 which contained Mr Paddy’s draft note on the application of a diversity factor to the design of data centres for internal circulation (see \[146(a)\] above), and Mr Adcock’s response, which read:

Gordon,

I agree with your statement and actually believe that you are being conservative (for banks, _however, the Googles & Microsoft MSN are another story and will use their full limit_)

We have looked at site where there is a 0.9 diversity per floor and also 0.9 over several floors, i.e 0.9 x 0.9 = 0.8

This is were \[sic\] GS as a global player should be comparing data and optimising performance

\[emphasis added\]

168    On 3 September 2008, Mr Paddy forwarded a “High Level Estimate Cost Plan” on the Project prepared by T&T dated August 2008, to Mr Adcock[\[note: 210\]](#Ftn_210) which stated that one of their assumptions for the electrical installations was that three DRUPS units of 2 MW each would be located at the Extension’s second level.[\[note: 211\]](#Ftn_211) This shows T&T, and perhaps the other consultants, were working on one track with references to the original “2 MW DRUPS” but there was another separate and parallel conversation between Mr Adcock and Mr Paddy which referred to a 1,670 kVA DRUPS unit.

169    I note Arup’s eventual Fee Proposal, dated 16 September 2008, refers to briefings attended by Mr Adcock on 1 August and 2 September 2008.[\[note: 212\]](#Ftn_212) However, nothing appears to turn on that as I was not referred to any notes, emails, or oral evidence relating to those briefings. As stated above, this was accepted by a Purchase Order of the same date.

170    As noted at \[29\] above, it was GSS’s Mr Paddy who asked Arup to look at the Piller DRUPS unit in an email dated 14 July 2008 as well as the EuroDiesel and Hitec DRUPS units on 22 August 2008.[\[note: 213\]](#Ftn_213) I have little doubt that this was because Global Switch had used their DRUPS units or equipment in their other data centres or that their products were known to GSS and Mr Paddy. There is some dispute as to who sent out the queries to the DRUPS manufacturers. GSS claims that Arup must have under-specified the DRUPS units required and hence did not obtain tenders for the largest DRUPS units available at that time.[\[note: 214\]](#Ftn_214) There are no emails or other evidence that shows Arup’s communications with these three DRUPS manufacturers around September to early October 2008 but I accept that there must have been some telephone conversations between Arup and these manufacturers after GSS directed Arup to contact them. Subsequently there are emails from Arup to the manufacturers, at the end October to early November 2008, with spreadsheets for them to complete as part of the tender process.

171    Significantly however, EuroDiesel (through their agent or representatives, Specialist Export Services Pty Ltd of Hamilton, Queensland), sent their technical data sheets and response dated 16 September 2008 to Mr Paddy.[\[note: 215\]](#Ftn_215) Under cross-examination, Mr Paddy admitted that he had known Mr David Schwede (“Mr Schwede”), EuroDiesel’s representative, since 1984 to 1985 and that Mr Schwede had supplied “numerous bits and pieces over the years” to Mr Paddy.[\[note: 216\]](#Ftn_216) Mr Schwede was the Managing Director of Specialist Export Services Pty Ltd, a dealer for EuroDiesel.[\[note: 217\]](#Ftn_217) He was the person with whom Arup and Mr Paddy himself liaised on issues relating to the EuroDiesel DRUPS units.[\[note: 218\]](#Ftn_218) I note that there were no questions raised as to whether he was the right person from whom information on the EuroDiesel DRUPS units could be obtained.

172    EuroDiesel sent a revised proposal to Mr Adcock on 5 November 2008.[\[note: 219\]](#Ftn_219) Piller sent theirs to Mr Paddy on 2 October 2008,[\[note: 220\]](#Ftn_220) and Hitec similarly sent theirs on 5 November 2008 to Mr Paddy.[\[note: 221\]](#Ftn_221) I therefore accept the evidence of Mr Adcock that Mr Paddy was involved in the tender process and did not leave things entirely with Arup. For example, Mr Adcock emailed Mr Paddy on 23 October 2008 with Arup’s evaluation of the Piller and EuroDiesel tender returns,[\[note: 222\]](#Ftn_222) and on 7 November 2008 with its evaluation of the tender returns from Piller, EuroDiesel and Hitec for GSS’s review and comment.[\[note: 223\]](#Ftn_223)

173    All these three submissions and communications thereon to Mr Paddy stated a NBP of 1,750 kVA/1,400 kW per DRUPS unit:

(a)     EuroDiesel: EuroDiesel NO-BREAK KS®: 3 x 1,750/2500 kVA DUPS, 400 V, 50 Hz containerised units; critical load 1,750 kVA, Non-critical load 750 kVA and power factor of 0.8.[\[note: 224\]](#Ftn_224)

(b)     Piller: 3 x UNIBLOCK UBTD 1,750/780 rated at 1,750 kVA/1,400 kW critical bus, 780 kVA/624W short break bus, 415 V, 50 Hz and “pf 0.8”. [\[note: 225\]](#Ftn_225)

(c)     On 26 September 2008, Jonathan Davis, managing director of Piller (Australia) sent Mr Paddy an email which stated: “I will be going back to Piller to reprice the DRUPS at 1,750 KVA NB/780 KVA SB as per the system at GS Sydney only in LV”.[\[note: 226\]](#Ftn_226)

(d)     This was followed up by Piller in their 1 October 2008 Budgetary Quotation, to Mr Paddy, stating that they were pleased to revise their quotation: “3 UNIBLOCK UBTD 1,750/780. Dual output Diesel UPS, rated at 1,750 kVA/1,400 kW critical bus”.[\[note: 227\]](#Ftn_227)

(e)     Hitec: “To supply, deliver, install, test & commission the following item: … 3 sets 2.5 MVA dynamic UPS in Isolated Redundant Operation … 1750 KVA (No Break) +750 KVA (Short Break), 400 V, 50 Hz at p.f 0.8 lagging, 1500 rpm, capable for the supply of 1,750 KVA clean and uninterrupted UPS power & 750KVA emergency power at full load condition”.[\[note: 228\]](#Ftn_228) Again this was a quote for three DRUPS units in an “N+1” configuration delivering 2,800 kW of NBP.

There were also other emails with attachments containing the above information. Mr Adcock did not say to Arup or to any of these suppliers that their DRUPS units were or appeared to be under-powered or unsuitable for GSS’s needs given the statements above on the NBP and SBP.

174    I have little hesitation in rejecting Mr Paddy’s suggestion that Arup must have specified the types and capacities of DRUPS units to these suppliers thereby limiting their tenders to DRUPS units with insufficient capacity for the Extension or failing to obtain larger capacity DRUPS units. As dealt with below, I find that the three suppliers offered the largest suitable DRUPS units they had at that point in time. Further, when the capacity was found wanting, no one said there were higher capacity DRUPS units in the market. That would have been the most obvious solution. Also, if there were no constraints over cost or space, it would not make any sense for a consultant engineer in Arup’s position to _limit_ his design in relation to the capacity and number of DRUPS units to be deployed. I asked both experts if they could think of a reason why a consultant engineer in Arup’s position would simply not suggest a larger capacity machine or if that was not available, to use four DRUPS units instead. They both could think of none. I was not surprised at their answer. Arup had nothing to gain, but indeed everything to lose, by putting forward three DRUPS units in an “N+1” configuration that could not achieve 3,600 kW when the obvious solution was to obtain a higher capacity DRUPS unit or, if that was not available, to use four DRUPS units instead. Arup’s fee was a fixed sum and suggesting a larger capacity DRUPS unit or a fourth would not have affected their fee. The only adverse consequence would be on GSS who would incur a higher capital expenditure.

175    GSS attempts to put forward Mr Paddy as someone who is really an electrician and not an electrical engineer. Whilst this submission is made under adversarial licence, with respect, it does stretch that licence over the bounds of credibility. Mr Paddy does not have an engineering degree but he is someone with considerable knowledge of electrical matters built up over decades starting with the London Electricity Board. He has the advantage of practical know-how built from the ground up. His first experience with data centres was whilst working for M+W Zander in Global Switch’s Sydney site after which he joined Global Switch in September 2007.[\[note: 229\]](#Ftn_229) He started off as a development manager at Global Switch Sydney and was promoted to Technical Director and looked at the further development of the Sydney site. Mr Paddy explained this further development as the addition of additional infrastructure and the development of additional floor space as not all of that data centre was fully developed at that time. This also meant liaising with the engineering consultants. [\[note: 230\]](#Ftn_230) Global Switch and GSS were comfortable holding Mr Paddy out as their Technical Director and Mr Paddy also described his role to include managing GSS’s professional engineers. Mr Paddy stated in his AEIC: “In my work, I manage professional engineers. I came up with design briefs which stated the requirements of the organisations I worked for and liaised with the professional engineers accordingly.”[\[note: 231\]](#Ftn_231) Mr Paddy said he “had been involved in data centre development” and he had worked with “numerous professional engineers”.[\[note: 232\]](#Ftn_232)

176    I therefore find that Mr Paddy could not have failed to notice but was in fact aware that the DRUPS tenders and technical and data sheets coming in showed DRUPS units that were not rated at 2,000 kW of NBP. Indeed, Mr Paddy admitted under cross-examination that he asked Mr Adcock to look at the Piller DRUPS unit and it was from Piller’s technical data sheet that the reference to a 1,670 kVA DRUPS unit came about.[\[note: 233\]](#Ftn_233)

177    There were also emails from Arup to Mr Paddy forwarding Piller’s technical data sheet by email dated 14 July 2008 to Mr Paddy[\[note: 234\]](#Ftn_234) and that clearly showed the output rated power as 1,670 kVA (1,336 kW). There is an email from Mr Adcock to Mr Paddy, copied to Mr Guth, dated 23 October 2008, attaching their comparisons of the Piller and EuroDiesel submissions for GSS’s review; that too clearly stated 1,750 KVA as the critical load of NBP (at that point in time, Hitec had yet to fill in their boxes with the relevant data and specifications).[\[note: 235\]](#Ftn_235) There were also emails from Mr Adcock to Mr Paddy with spreadsheets containing information, data and technical assessments on the DRUPS units from the three suppliers. The earliest such spreadsheet was sent by Mr Adcock to Mr Paddy in an email dated 29 October 2008.[\[note: 236\]](#Ftn_236) Mr Adcock had set out some of the suppliers’ data and technical specifications in a standard Arup format with parts of it left blank for the suppliers to fill in or amend as they saw fit. Mr Paddy approved and asked Mr Adcock to send them out.[\[note: 237\]](#Ftn_237)

178    Importantly, under cross-examination[\[note: 238\]](#Ftn_238) in relation to Piller’s budgetary quotation dated 1 October 2008,[\[note: 239\]](#Ftn_239) Mr Paddy admitted that he had a discussion with Piller and this clearly shows Mr Paddy’s involvement and knowledge of the DRUPS units being supplied by Piller:[\[note: 240\]](#Ftn_240)

Q:So from at least the wording of this budgetary quotation you had a discussion with Piller, correct?

A:Yes.

Q:You had a discussion with Piller after you had told Arup in the engineering fee proposal that the expectation was 3.6 MW in the extension, correct?

A:With the 0.9 diversity, yes.

Q:Yes, so its 4,000 with 0.9 gives you 3.6 MW, correct?

A:Yes.

Q:This must have been after that because the date is 1 October 2008, correct?

A:Yes.

Q:So you would have conveyed these requirements to Piller Power Systems, correct?

A:Yes, that was --

Q:Ie, you would have said “I need DRUPS, maybe three, because I am building an extension that needs 3.6 MW”, correct?

A:Yes

Mr Paddy was then taken through the Piller budgetary quotation and confirmed that it stated “1750 kVA/1,400 kW critical bus” which referred to the NBP and “780 kVA/624 kW short break bus” referred to the SBP and that the power factor applied was 0.8.

179    Subsequent emails contained more data and technical specifications from the suppliers. Although these spreadsheets are in rather small print and comprise a number of pages, their format is very similar, if not identical. On the first page of each spreadsheet, under each of the three columns for the three suppliers, the second to sixth row typically contained the following:

<table align="left" cellpadding="0" cellspacing="0" class="Judg-2" frame="none" pgwide="1"><colgroup><col width="51.18%"> <col width="14.34%"> <col width="20.46%"> <col width="14.02%"> </colgroup><tbody><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Piller</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">EuroDiesel</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Hitec</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Critical Load (No Break)</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1750</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1750</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1750</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Non Critical Load (Short Break)</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">750</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">750</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">750</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Output PF</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0.8</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0.8</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0.8</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Critical Load (No Break)</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Rated Output</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1,400</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1,400</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1,400</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Non-Critical Load</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">&nbsp;</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">(Short Break)</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">624</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">600</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">600</p></td></tr></tbody></table>

  
  

I cannot see how Mr Paddy could have failed to notice these very important figures and information. As GSS itself points out, the NBP and, although to a lesser extent but nonetheless important, SBP are the essential qualities of a data centre. These are not peripheral “nice-to-have” characteristics.

180    Under cross-examination, Mr Paddy said the following in relation to the comparison table sent on the 7 November 2008:[\[note: 241\]](#Ftn_241)

Q:So a review of the table again will show you that the DRUPS could only provide -- sorry, _the rated no break capacity of the DRUPS, three DRUPS in an N+1 configuration could only provide 2,800 kW of power_, correct?

A:Yes

Q:Did you review the table, Mr Paddy?

A:Probably not in detail, I’d have gone more to the summary.

Q:Well, the power is right on top, it’s the first line, did you see that?

A: _I would have seen it_.

\[emphasis added\]

Mr Paddy was taken through the documents set out in the preceding paragraphs and each time he admitted he “would have seen” the numbers, _ie_, that the NBP was 1,400 kW per machine. After having made these admissions, he then tried to salvage his position by claiming, very unconvincingly I must say, that the documents did set out the figures referred to by counsel and that was why he agreed but he was speaking from his knowledge now and not from his knowledge at that point of time.[\[note: 242\]](#Ftn_242) I do not accept his evidence on this point. Someone in Mr Paddy’s position in 2008 would have known basic concepts like NBP, SBP and diversity as applied in data centres. His knowledge of such concepts in late August 2008 is clear from his first draft of an internal paper which he asked Mr Adcock to look over and amend if necessary (see \[146(a)\] above). From my observation of his evidence under cross-examination, there was no misunderstanding of the questions being put to him and his answers were clear and unequivocal. To take just one example already referred to above, Mr Paddy was taken through the Piller quotation and he accepted it was for 1,750 kVA or 1,400 kW and accepted it was not for 3,600 kW; he was then referred to an email from Piller to him informing him that they were going to seek a re-pricing, again he agreed. He was forced to acknowledge the following:[\[note: 243\]](#Ftn_243)

Q:I’m just saying at that time when you saw these documents, you would have known what the rated no break was. That’s my only point. Is that fine, Mr Paddy?

A:Yes.

Again, he later acknowledged this:[\[note: 244\]](#Ftn_244)

Q:First, Mr Paddy, you had earlier admitted to me that when you saw the DRUPS comparison table, you also saw the output and the rated output of the machines, do you recall?

A:That’s correct. Yes.

Q:So you did see it, correct?

A:Yes.

He also agreed that he asked Arup to evaluate these two options but he never rejected the options as underpowered.[\[note: 245\]](#Ftn_245)

181    By 21 November 2008, Arup had finished their evaluation of the DRUPS units from the three suppliers and recommended final discussions with EuroDiesel on their compliant tender.[\[note: 246\]](#Ftn_246) GSS was encouraged by Arup to make a decision speedily as the lead time for delivery of the DRUPS units was 30 to 32 weeks.

182    Up to almost the end of November 2008, Mr Paddy, despite knowing that the EuroDiesel DRUPS units could only provide 1,400 kW of NBP and 600 kW of SBP, did not once object or point out that Arup had provided him with under-capacity or under-powered DRUPS units for their stipulated IT Load. I find that up to this stage, Mr Paddy was aware of the limitations of space (the non-availability of any other space, other than that above the HV Transformer, which had been ruled out by Babtie and AWP) and that the DRUPS manufacturers he had asked Arup to approach could not offer any larger capacity DRUPS units than those set out above. These were concerns and matters that he would have disagreed with if they did not fit GSS’s requirements for their data centre, unless Mr Paddy was very careless, totally ignorant about electrical matters, or went about his job in a most cavalier fashion. It would be unfair to ascribe any of these characteristics to him. But that would not be to say he was incapable of making mistakes.

183    On 28 November 2008, Mr O’Brien, GSS’s then Managing Director (and Mr Turvey’s predecessor) sent Mr Paddy an email about the power he could sell in “the facility” in an email.[\[note: 247\]](#Ftn_247) It appears there was a query from Mr Corcoran.[\[note: 248\]](#Ftn_248) Around that time there were also queries about the incoming power supplies (the two “A” and “B” feeds from the power mains coming off the power grid) to the whole facility.[\[note: 249\]](#Ftn_249) This was relayed to Mr Adcock who replied on the 28 November 2008 to Mr Paddy.[\[note: 250\]](#Ftn_250) His answer covered both the Existing Facility and the Extension, this included, _inter alia_, the following:

(a)     the existing electricity from the two main “A” and “B” feeds (coming off the power grid) could adequately support both the Existing Facility and the Extension “at the agreed power densities (specifically 1000 kW/m2 for the expansion)”;

(b)     the limiting factor for the Existing Facility was the UPS capacity (due to structural limitations);

(c)     the limiting factor for the Extension was the UPS capacity (due to space limitation, hence installing the largest DRUPS unit possible);

(d)     with the current Existing Facility UPS contractual allocations plus the Extension sold at 1 kW/m2 for 4,000m2 Arup expected the diversified total site power requirement to be ~ 14.3 MW;

(e)     there were two (A & B) ring mains supplies. Each A & B supply had capacity of 18 to 20 MW, therefore either could supply the total load whether diversified or undiversified; and

(f)     the reason why it was important to look at the total diversified load was that this determined the maximum power demand that GSS agreed to pay for, so it was not cost effective to have this too high, _ie_, exactly why Mr Gudijanto had GSS’s Professional Engineer progressively increasing this.

Mr Adcock also explained the limitations of the Existing Facility’s “N+N” configuration with a SUPS unit having a lower Power Usage Effectiveness (“PUE”) and the Extension having a better PUE with its DRUPS units, chilled water system and its “N+1” configuration. Importantly Mr Adcock’s email also included a spreadsheet which set out, in two columns, the position in the Existing Facility and for the Extension, which despite stating the “agreed power density” at 1 kW/m2, clearly set out the following:[\[note: 251\]](#Ftn_251)

<table align="left" cellpadding="0" cellspacing="0" class="Judg-2" frame="none" pgwide="1"><colgroup><col width="47.22%"> <col width="52.78%"> </colgroup><tbody><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">DRUPS</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3 in N+1 configuration</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">No-Break (UPS)</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">1750 kVA</p></td></tr><tr><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Short-Break (Gen)</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">750 kVA</p></td></tr></tbody></table>

  
  

184    Mr Paddy sent this email on to Mr O’Brien stating it was self-explanatory. Mr O’Brien responded that it was not self-explanatory and asked to speak to Mr Paddy. In the event it resulted in Mr Paddy sending an email to Mr Adcock on 28 November 2008 stating:[\[note: 252\]](#Ftn_252)

Forgetting diversity

Mark very simplay \[_sic_\] want to know how much tachnical \[_sic_\] power can he sell (and cool) for the facility.

Then we will assess any commercial risk in using diversity.

185    Mr Adcock replied the same day:[\[note: 253\]](#Ftn_253)

Without diversity, this is 2 x 1750kVA x 0.8pf = 2,800 kW for the 4,000m2 of the Expansion or 700/m2

With a 0.7 diversity 1000W/m2 over the 4000m2 would be achieved.

However, I’m not sure what has been sold on the different floors of the Existing building and the other variable is what is now the plan for upgrading the UPS power on L6 (as it converts from DC to AC power)?

186    Mr Adcock was cross-examined on this email on the basis that this was the first time he directly told Mr Paddy in writing that the DRUPS units could only provide 2,800 kW of power:[\[note: 254\]](#Ftn_254)

Q:… This is the first time you told Mr Gordon Paddy that the DRUPS system can only provide 2,800 kW of power. Do you agree or disagree?

A:It's the first time I've seen it in writing, yes, like -- simplified like this.

Q:Let me just ask you again because I think this is what you are trying to say but correct me if I am wrong. You are saying that this is the first time you have told him directly about this particular issue in writing?

A:In a single sentence, yes.

Q:Let’s be clear about this. There is no other document whereby you had informed Gordon Paddy or Global Switch directly that the DRUPS can only provide 2,800 kW of power up until this particular point of time?

A:It was clear from those other spreadsheets about the capacity, but in a simplified version like this, no.

While there was an attempt to gain some mileage of Mr Adcock’s answers to this line of cross-examination, I find that it is more than clear not only what those spreadsheets stated with respect to NBP and SBP, but more importantly the emails from the suppliers of the DRUPS manufacturers to Mr Paddy stated clearly what their respective DRUPS unit’s NBP and SBP capacities were. Mr Paddy also accepted, under cross-examination, that when he saw these documents, he knew what the NBP was. Mr Paddy was not re-examined on this point.

187    Mr Paddy responded in an email on the same day:[\[note: 255\]](#Ftn_255)

We **_may_** have to **_back up in excess of 2800kW_** with only 2 UPS units (1 being faulty).

Mark has rationalised this by simply saying exising \[_sic_\] facility 14+MW extension 4MW + cooling 2.4MW (PUE 1.6).

We are now exceeding 20MW.

In Sydney we only allow a diversity of .9 or 1.1 _whichever way you look at it_, **_you have me concerned._**

\[emphasis added in italics and bold italics\]

188    In my view, Mr Paddy’s answer on this very important point, _viz_, the claim that this was the first time Arup told him about the NBP, was very telling:

(a)     He did not, for example, protest that the 2,800 kW was well below the required power of 3,600 kW (4,000 kW with 0.9 diversity) or query why the NBP was only 2,800 kW or ask how the NBP had dropped to that level or indeed as Mr Chia, counsel for Arup, put it to him: “2,800 kW is not 3.6 which is what I want”.[\[note: 256\]](#Ftn_256) Instead, he said: “… you have me concerned”.

(b)     He also stated “we **_may_** have to back up in excess of 2800 kW…” \[emphasis added\] which was a strange way of saying that this was significantly below what GSS required in the Extension. In plain English, I would have expected an expression like: “we **_now_** have back up in excess of 2,800 kW” or words to that effect. This can be contrasted to his second paragraph where Mr Paddy shows his concern over GSS requirements as being higher that the supply of 20 MW from the power mains, there he says: “We are **_now_** exceeding 20MW” \[emphasis added\].

189    Significantly, there is also no evidence put forward as to what Mr Paddy did upon receiving Arup’s categorical answer of 2,800 kW NBP and what he reported back to Mr O’Brien’s query. This is important because Mr O’Brien wanted to know how much power he could sell in the Extension. Mr Paddy only stated in his AEIC at paragraph 45 that he “trusted that Arup would come up with the necessary solutions to meet Global Switch’s requirement”. Again he was cross-examined on this aspect and his entirely unconvincing answers speak for themselves:[\[note: 257\]](#Ftn_257)

Q:… So you have the business guys turning to you as a technical director asking, “Mr Paddy, how much can I sell?” Because they want to go out and get customers for Global Switch, correct?

A:Correct.

…

Q:… You have now just been told by Mr Peter Adcock its 2,800 kW undiversified, yes, correct?

A:Yes.

Q:You were told this after Mr Mark O’Brien asked you how much power can I sell, correct?

A:Yes, I believe so.

Q:Did you tell Mr Mark O’Brien and the business people that currently on the design it’s only 2,800 kW?

A: _I can’t recall_.

Q:Is there any email where you told them that currently on of the design it’s only 2,800 kW?

A: _I can’t recall that either_.

Q:Your affidavit of evidence-in-chief does not say that you told Mr Mark O’Brien it was only 2,800 kW at that stage. Will that assist you?

A: _If I didn’t say it in the affidavit, yes_.

Q:Can I suggest to you then that even after at this stage you were told of the limitations of the three DRUPS in an N+1 situation, you did not feedback that up to Mr Mark O’Brien or Mr David Guth even though this came as a result of a specific query from them. Do you agree?

A:If there’s no email, that would be correct. I may have told them verbally. _But I can’t recall the circumstances way back then_.

\[emphasis added\]

I do not accept Mr Paddy’s retreat into not being able to recall such an important discovery. If indeed there was such an unauthorised shortfall from the required NBP, I find it hard to believe that this did not immediately become a red flag issue as between GSS (especially their sales division), and Arup. The question of NBP was asked by the GSS Managing Director, who wanted to know how much power GSS could sell. If GSS thought this was 4,000 kW with a diversity of 0.9 and a reply came back at 2,800 kW, one would expect, at the very least, some discussions between GSS, Mr Paddy and Arup to ensue. There is surprisingly _no evidence_ put forward by GSS of Mr O’Brien’s reaction to what would have been alarming news.

190    On the other hand, I have also borne in mind the absence of a lack of protest by Arup to the effect that, for example, it was constrained by GSS to achieve the stipulated 3,600 kW because it could only cater for three DRUPS units in the only designated place for such machines, there were no bigger capacity DRUPS units that were suitable and available and GSS ruled out the only other space available for a fourth DRUPS unit as being an unacceptable risk to construct a structure therefor and/or that GSS was not prepared to incur the cost of a fourth DRUPS unit. However, having watched Mr Adcock on the stand, I find he possesses a very mild character and is a gentle person; he is certainly not aggressive or assertive. I believe he did not adopt such a hard response to GSS because not only of his character, but because he would have been someone who wanted to preserve the relationship between himself and Arup as consultants, and the client. Mr Adcock was someone who had his eye firmly on completing the Project rather than engaging in pointing fingers and he believed Mr Paddy was well aware of the power output of the DRUPS units under consideration, which after all, were from manufacturers GSS itself had asked him to approach.

191    On the contrary, after that statement of NBP of 2,800 kW from two DRUPS units, the evidence shows Mr Paddy exploring with Arup what possible solutions there were to “increasing” the NBP. On that very day, 28 November 2008, Mr Paddy asked Mr Adcock whether the DRUPS units could operate at a better power factor than 0.8.[\[note: 258\]](#Ftn_258) I note the correspondence was _not_ about putting in another DRUPS unit. I accept that Mr Adcock had relayed that enquiry to Mr Schwede who told him verbally that the EuroDiesel DRUPS power factor was ~1.0 pf, hence he gave the Total UPS capacity in the Extension as 3,500 kW (3,500 kVA at a power factor of ~1.0).[\[note: 259\]](#Ftn_259) Later that same day (_ie_, 28 November 2008), Mr Adcock sent Mr Paddy a new PUE Summary, which stated that the EuroDiesel DRUPS unit could operate at a power factor of 1.0. It also stated that the EuroDiesel DRUPS units could produce 3,500 kW of NBP in an “N+1” configuration.[\[note: 260\]](#Ftn_260)

192    The next day (_ie_, 29 November 2008) Mr Schwede sent Mr Adcock two emails in response to the latter’s queries. In the first email, Mr Schwede attached an email from EuroDiesel’s Christian Pirotte which stated that the EuroDiesel DRUPS unit in question could perform at a “leading power factor better than 0.93”.[\[note: 261\]](#Ftn_261) In the second email sent minutes after the first, Mr Schwede attached an alternator capability curve.[\[note: 262\]](#Ftn_262) I note here that the experts agreed that this curve did not indicate that the EuroDiesel DRUPS unit could perform at a better power factor than 0.93.[\[note: 263\]](#Ftn_263) Where they disagreed was whether Arup’s reliance on this curve was reasonable. Mr Ansett thought that it was a “classic 101 error” to mistake this curve (_ie_, the alternator capability curve) as indicating the actual capacity of the DRUPS unit.[\[note: 264\]](#Ftn_264) While Mr Peck agreed that the curve was the wrong curve to use, he thought Arup may have been misled by the context in which it received the information.[\[note: 265\]](#Ftn_265) Regardless, nothing turns on this because I have already found that GSS agreed to 2,800 kW of NBP. Further GSS has not pleaded that Arup was negligent in relying on the alternator capability curve.

193    Counsel for GSS sought to portray Mr Adcock as having informed GSS about the DRUPS unit’s increased power factor before receiving confirmation of the same from EuroDiesel. In response, Mr Adcock’s evidence was that his belief that the EuroDiesel DRUPS unit could operate at a power factor of 1.0 was based on information provided to him by EuroDiesel,[\[note: 266\]](#Ftn_266) including, an “alternator capability curve” sent by EuroDiesel.[\[note: 267\]](#Ftn_267) Although Mr Adcock could not point to any documents indicating such discussions between himself and Mr Schwede or EuroDiesel at the relevant time, he also stated that it was his practice to “call people first and then follow up with emails”.[\[note: 268\]](#Ftn_268) He added that a power factor of 1.0 was atypical for DRUPS units, and he would not have communicated this information to GSS without obtaining confirmation from EuroDiesel.[\[note: 269\]](#Ftn_269)

194    I accept Mr Adcock’s evidence and find that he did obtain confirmation that the EuroDiesel DRUPS unit could operate at a power factor of 1.0 before communicating this information to GSS. As he testified, his practice would have been to make the necessary enquiries over the phone prior to sending the necessary emails. Although he could not, “hand on heart” say that he had called Mr Schwede before sending the information to GSS,[\[note: 270\]](#Ftn_270) this was very likely due to the gap of about nine years between November 2008 and when this matter came to trial. Further, there is no reason for me to doubt that Mr Adcock would have obtain the necessary confirmation since he has candidly accepted that a power factor of 1.0 is “atypical”.

195    On the 1 December 2008, Mr Adcock emailed Mr Paddy and stated that EuroDiesel DRUPS unit could operate at a power factor of +0.99 and that the power available at the Extension was 2 x 1,750 x 0.99 = 3,465 kW or 85% of the nominal 4,000 kW.[\[note: 271\]](#Ftn_271) Mr Adcock also states:

Apologies if I **_did not originally explain_** the limitations behind this **_clearly enough_**, which are:

(i)     _the largest DRUPS units available (limited by the 3MW 20V cyl MTU engine_) and

(ii)   the _remaining space available_ at the Tai Seng Ave site. \[emphasis added in italics and bold italics\]

I find the tone of that email to be in keeping with Mr Adcock’s mild, rather than assertive, character as I have observed above (at \[190\]).

196    There does not appear to have been any follow-up from GSS after Mr Adcock had reassured them that Arup’s Original Design could deliver at least 3,500 kW of NBP in an “N+1” configuration on 28 November 2008. Unfortunately, as noted above at \[192\], and unbeknownst to both parties, this information was inaccurate, and EuroDiesel subsequently stated that its DRUPS units were only able to operate at a maximum power factor of 0.8.

197    On 27 January 2009, the next significant event occurred when Global Switch sent their Global Switch Directive. Mr Paddy’s email dated 27 January 2009 to Mr Adcock started with the following:[\[note: 272\]](#Ftn_272)

I believe I may have mentioned the _companies_ \[sic\] _desire to sell down the maximum power_.

Essentially I believe most of what the brief wants you and Les _have already worked on_.

Can you advise what if anythiing \[sic\] else we need to do in order to comply with the brief.

\[emphasis added\]

What this email says, especially in the first and second paragraphs, is plain and unambiguous. Its contents are also significant given my findings on why Mr Paddy varied the power requirement to 2,800 kW and GSS’s aversion to incurring capital expenditure unless there was a strong business case therefor. I have already referred to the Global Switch Directive in some detail at \[35\] and its consequence on this Project. To recapitulate, Global Switch:

(a)     called for a thorough technical review of the power and cooling capacities of their data centres to think out of the box to suggest ways to re-distribute any _spare power capacity_ so as to _maximise revenues_; and

(b)     required all their data centres to look at extension buildings in light of possible savings by the application of “power diversity initiatives”.

198    GSS asked Arup for their comments on the Global Switch directive and Arup responded in a long email dated 29 January 2009 from Mr Adcock to Mr Paddy.[\[note: 273\]](#Ftn_273) This email started with the following paragraph:

The brief broadly _outlines what we have been doing_ at the GS-Singapore _under your direction_ at the site over the _past 12 to 18 mths_, i.e. maximise the available power and cooling within the space available. \[emphasis added\]

and went on to state, _inter alia_:

The units selected are 3No 2.5MVA EuroDiesel in a N+1 configuration and _due to the site space constraints_ these will be containerised units located on a gantry over the loading dock. \[emphasis added\]

199    GSS never challenged this statement. Instead there is a very telling email from Mr O’Brien to Mr Paddy and Mr Guth dated 30 January 2009:[\[note: 274\]](#Ftn_274)

John has asked for us to look at the extension build in light of possible savings due to the application of power diversity initiatives etc.

For example, _is it_ **_possible to reduce_** _the power build_ **to provide 800W/sqm** with an option of adding extra power at a later stage if required?

\[emphasis in added in italics and bold italics\]

This was either the application of a larger diversity factor of 0.8 when addressing the “power build” of 1,000 W/m2 to prospective tenants or reducing the power they marketed to prospective tenants at 800W/m2 instead of 1,000W/m2 but with the ability to add additional NBP when it became a requirement by the tenant. It is clear that GSS was internally discussing the stipulated power and probably contemplating the latter. The suggestion of adding power at a later stage, when the demand for power from the tenants required it, was similar to GSS’s past strategy where it initially installed six generators when the Existing Facility was not fully occupied and had the option to add on generators in a “plug-and-play” model as and when more space was taken up by tenants (see \[12\]).[\[note: 275\]](#Ftn_275)

200    Mr Paddy forwarded this email to Mr Adcock the same day, asking the latter for an answer to Mr O’Brien’s query.[\[note: 276\]](#Ftn_276) Mr Adcock responded to say that there was “very limited opportunity to use diversity to achieve cost savings” and the option of installing two DRUPS units initially and delaying the third DRUPS unit’s installation to a time when the load increased would entail increased costs.[\[note: 277\]](#Ftn_277) There was an underlying assumption to this statement, _viz_, the fourth DRUPS unit was not part of the solution. If this capital expenditure (including cost for construction complexities) for a fourth DRUPS unit was not a constraint, it would have occurred to someone, whether from GSS, Arup or GSS’s other consultants, to suggest installing a fourth DRUPS unit. Nor was there any suggestion to use a higher capacity DRUPS unit that could deliver more than 1,400 kW NBP. It was obvious from the Global Switch Directive in January 2009 and the exchange of emails between GSS and Arup thereafter, that GSS was not looking at adding another DRUPS unit but reducing the power sold to tenants possibly through diversity initiatives and/or reducing the number of DRUPS units.

201    There was a further oral query raised by Mr Paddy on diversity at GSS on 10 February 2009. The relevant responses of Mr Adcock’s email on 11 February 2009 are as follows:[\[note: 278\]](#Ftn_278)

Following-up on our conversation last night, we see the issue of diversity at the Global Switch Singapore site as:

1.    Typically banks, who have upto seven IT platforms (and conservative consultants) have an average load of 50 to 70 % of their contracted power density i.e. 500W/m2 from 1000W/m2. _However, as there is often a higher peak load at times of end of day, week or month and it is this for what the design and installed plant capacity must be capable of supplying_. _Whereas tenants such as_ **_Microsoft_** _with only one or two IT platforms will load their equipment up to the limit and then want more_.

2.    While tenants may be likely loaded now, _they have planned their areas upto_ \[sic\] _7 to 10 years and are within their right to add equipment at anytime_

_3_.     _While there will also be diversity between tenants, again it is important to look at the peaks and not the average_. What we have done for the expansion is design for 100% load knowing that while the DRUPS can run at 110% it is better to have the load in the 80 to 90% range which is where we expect it to be once full occupied and this gives a good safety margin …

…

5.    With this being a relatively modern facility (initially built in 2001) the days of overdesign equipment are past.

…

7.    At the end of the day this is not an engineering question, but more of a commercial management v’s risk exercise. However, we would not be recommending it without detailed monitoring (minimum of monthly to establish the average and peaks – over 15min intervals – for individual tenants).

\[emphasis added in italics and bold italics\]

202    In this email, Mr Adcock acknowledged that typically banks (of which GSS had at least one as its current tenant) who have up to seven IT platforms, have an average load of 50% to 70% of their contracted power density, but he cautioned that there often are higher peak loads at the end of the day or week or month. He presciently noted that tenants like Microsoft with only one or two IT platforms would load their equipment up to the limit and then want more. From this email, Mr Adcock was clearly advising caution against applying diversity without considering the kinds of tenants and the typical loads those tenants have; emphasising the importance of looking at peak usages and not averages; and cautioning against banking on running the DRUPS units at 110% and that tenants would have the right, given the usually long leases, to take up the contracted loads by adding equipment as time goes on.

203    On 17 February 2009, just over two weeks after Global Switch’s directive, GSS issued the Stop Work Order. GSS couched it as awaiting “a certain trigger event” before commencing construction. This was envisaged to be September 2009.[\[note: 279\]](#Ftn_279) No doubt that trigger event meant GSS managing to secure a tenant. Under cross-examination, Mr Guth explained that this Stop Work Order was issued because at that time, GSS did not have a tenant (or any tenants) for the Extension:[\[note: 280\]](#Ftn_280)

Q:… Can you explain to the court the reason why there was a halt in February 2009 for the project?

A:The reason was at the time Global Switch didn’t have a customer. The company is generally risk averse to heavy investment without ensuring a return on the investment and, therefore, further discussions were being had with customers to ascertain the realism of it before investing in the project.

Q:It is only after some of those initial discussions start to bear fruit, or there is an indication of customer demand in around October 2009 that Global Switch re-engages the project, isn’t that correct?

A:That’s correct.

204    In addition to my findings of fact above, I find that as of 17 February 2009, GSS had agreed with Arup to install only three EuroDiesel No Break KS-5 1,750/2,500 kVA, 400 V, 50 Hz DRUPS units in the Extension. GSS, working within their limitations of space and cost constraints, were prepared to accept 1,400 kW of NBP and 600 kW of SBP per DRUPS unit in an “N+1” configuration. I accept the submissions of Arup that GSS constrained the space that was available to place the DRUPS units: that space could only accommodate three DRUPS units. GSS through their consultants ruled out the only other suitable place where another DRUPS unit could be located, _viz_, above the HV Transformer, as we shall see, the largest available and suitable DRUPS unit was capable of only delivering 1,400 kW NBP and 600 to 625 kW SBP. GSS through Mr Paddy knew about this and GSS had cost constraints in that it was risk averse to heavy investment without there being customer take-up. This was consistent with and borne out by the Global Switch Directive in January 2009 which requested for a thorough technical review of all spare capacity in their existing facilities, to innovatively re-distribute any spare power and cooling capacities to maximise revenues and to look at power diversity initiatives in all extension buildings. This is also borne out by Arup’s responses, set out at \[198\] and \[200\]–\[201\] above, when asked by GSS to respond to the Global Switch Directive for power diversity initiatives, using all spare power and not incurring any more capital expenditure in expansions without a business case.

### The Microsoft tenancy, resumption of the Project, and the Revised Design

205    The discussion here answers, but is not limited to, the agreed issue of whether Arup’s provision of the Revised Design was a variation to the Contract.

206    After the 17 February 2009 Stop Work Order, there were no developments of any note between GSS’s technical side and Arup, although there appears to be some expectation that the Project would be reactivated later in the year.

207    In or around July 2009, Mr Paddy said GSS’s discussions with Microsoft and other potential tenants were showing promise. There is no other direct evidence as to exactly when this occurred and what exactly that meant. This then led to a reactivation of the Project.[\[note: 281\]](#Ftn_281) Mr Guth deposes in his affidavit that confirmation to recommence the Project was in early September 2009.[\[note: 282\]](#Ftn_282) The Global Switch approval to go ahead with the Project is contained in an email dated 4 November 2009 from Mr Corcoran to Mr O’Brien.[\[note: 283\]](#Ftn_283) However the go-ahead was on the basis that GSS had to meet proposed handover dates in 2010 but Global Switch expected “significant lease commitment” by the end of 2009, which means that Microsoft had not yet irrevocably committed itself to the lease.

208    Obviously in response to this reactivation, on 15 September 2009, Mr Adcock sent an email to Mr Paddy restating Arup’s initial recommendation that the DRUPS units manufactured by EuroDiesel be selected for the Extension.[\[note: 284\]](#Ftn_284) Attached to the email was a comparison table which summarised the key features of the DRUPS units from three manufacturers, including EuroDiesel. The comparison table also stated that the “Critical Load (No Break) Rated Output” of the Hitec, Piller and EuroDiesel DRUPS units was 1,400 kW. It would not require much arithmetic to conclude that the use of three such DRUPS units in an “N+1” configuration, meant that the total NBP would be 2,800 kW (_ie_, 1,400 kW × 2).

209    It is important to note that Mr Paddy had also asked Mr Adcock to investigate whether GSS could rely on the Existing Facility’s spare power to satisfy the Extension’s NBP requirements.[\[note: 285\]](#Ftn_285) On 13 October 2009, Mr Adcock responded to this query in an email which, amongst other things, stated that:[\[note: 286\]](#Ftn_286)

In response to _your question_ as to whether the DRUPS (and also chillers?) for the expansion could be initially deferred, _by using spare capacity in the existing building_ to supply the expansion, we have checked the present loads and report back as follows:

The summary tab of the attached spreadsheet shows that there is presently _a_ **_total balance of 1,454kW of UPS power_** _(Available power minus Contracted power)_ over the existing UPS systems on Levels 2 to 7. _However, we do not recommend that the UPS systems be loaded to 100% of capacity as it is difficult to manage the phase balance - it is standard industry practice to limit the load to 90%_ (not that this would be an immediate concern as the maximum actual loads are only ~50% of the contracted value). This is at UPS level and we would need to check what spare circuit breakers and/or spaces are available on the UMSB's to access this power. As the UPS room locations in the existing building vary from floor to floor (done to distribute the high structural loadings from the batteries to different columns and footings) we would need to check access routes to the expansion.

\[emphasis added in italics and bold italics\]

210    Mr Guth’s AEIC also exhibits a “Status and Recommendation Report” issued by GSS on 4 November 2009 on the Project.[\[note: 287\]](#Ftn_287) This report sets out the recommendation to go ahead with the Project and the reasons therefor. There are two aspects of this document that bear pointing out in that they show the thinking behind GSS’s recommendation:

(a)     First, under a section entitled “construction”, it was stated that “\[a\] major emphasis has been placed on how to minimise the day 1 capex as well as the overall facility budget”.[\[note: 288\]](#Ftn_288)

(b)     Secondly, the report’s conclusion included a recommendation to “proceed on the development under the current design with a view if required to defer certain items of the major plant and equipment to reduce the day 1 costs and only install these when required”.[\[note: 289\]](#Ftn_289)

211    During cross-examination, Mr Guth accepted that these statements were indicative of GSS’s desire to avoid incurring more capital expenditure than it needed to as GSS had no guaranteed tenants for the entire Extension then.[\[note: 290\]](#Ftn_290) This was obviously of concern whilst Microsoft had not yet signed on the dotted line.

212    That Status and Recommendation Report also stated: “the construction works have been retendered (tender packages issued to all on 29/9/09) to both the existing final tenderers as well as new companies where appropriate. This includes: … DRUPS – 3 suppliers (Eurodiesel, Piller & Hitec)”.[\[note: 291\]](#Ftn_291) I note that the DRUPS tender package by Arup is dated October 2009.[\[note: 292\]](#Ftn_292) However nothing turns on that. I repeat my findings above that GSS’s Mr Paddy was involved in looking over and approving the tenders before they went out to tenderers.

213    On 12 November 2009 Arup submitted its first draft analysis of the tender documents for M&E works, including the DRUPS units comparison spreadsheet.[\[note: 293\]](#Ftn_293) On 20 November 2009, Arup’s Electrical Engineer, Ms Kelly, sent an email to Mr Guth, stating Arup’s recommendation that the DRUPS units from EuroDiesel be selected for the Extension.[\[note: 294\]](#Ftn_294) Attached to this email was a revised version of the earlier comparison table sent by Arup to GSS on 15 September 2009.[\[note: 295\]](#Ftn_295) The revised comparison table also stated that the “Critical Load (No Break) Rated Output” of each EuroDiesel DRUPS unit was 1,400 kW.

214    That same day, Mr Guth replied to Ms Kelly, stating that GSS was happy to accept Arup’s recommendation, and that GSS would speak with the suppliers the next week.[\[note: 296\]](#Ftn_296) GSS proceeded to place an order for the three EuroDiesel DRUPS units.[\[note: 297\]](#Ftn_297)

215    It eventually transpired that Microsoft was looking to lease the _entire_ space in the Extension, and that it required the full (undiversified) 4,000 kW of NBP. This is of significance because with this development it became impossible for GSS to apply diversity to achieve power savings, because diversity depended upon having a mix of tenants who utilised different loads in the data centre[\[note: 298\]](#Ftn_298) and that some of them would, as noted above, only utilise around 50% to 70% of their contracted power. This would not be the case if Microsoft took up the whole Extension and required 4,000 kW of NBP. Moreover, as Mr Adcock had presciently cautioned earlier, tenants like Microsoft would use the maximum contracted power, and that was 4,000 kW and not 3,600 kW.

216    This development, as acknowledged by Mr Paddy, caused a problem for GSS because the Extension, under the original terms of the Fee Proposal, was only designed to deliver 3,600 kW of NBP to its IT Load[\[note: 299\]](#Ftn_299) (as I found above, leaving aside my further finding that the initial requirement of 3,600 kW of NBP was subsequently varied to 2,800 kW). As a result, GSS approached Arup and asked that it propose a solution to increase the Extension’s available NBP to 4,000 kW.[\[note: 300\]](#Ftn_300)

217    I pause here to make a few findings as to how this occurred. First, Mr Paddy does not recall having any conversations with GSS’s business team about the amount of NBP that could be sold to Microsoft.[\[note: 301\]](#Ftn_301) Secondly, he also did not have any direct input or discussion on the contract between GSS and Microsoft.[\[note: 302\]](#Ftn_302) He could not recall if he told the GSS business team that the Extension was only capable of delivering 3,600 kW of NBP to GSS’s tenants under Arup’s Original Design.[\[note: 303\]](#Ftn_303) Thirdly, Mr Paddy also agreed that he had only gone to check with Arup if their design was able to deliver 4,000 kW of NBP to the Extension _after_ the business team informed him of Microsoft’s requirements.[\[note: 304\]](#Ftn_304)

218    I find, and the evidence shows, that at the crucial period of securing Microsoft as a tenant for the Extension, there was a lack of communication between GSS’s business team and the technical team. As pointed out above, Mr O’Brien’s query on 28 November 2008 as to how much power he could sell in the Extension and Mr Adcock’s clear reply on that same day, sent to Mr Paddy, somehow failed to get transmitted to or register with GSS’s business team. GSS’s business team had sold the Extension’s available NBP to Microsoft at 4,000 kW. The mismatch between what was required of Arup in the Fee Proposal, what the technical team on the ground was discussing with Arup before Microsoft came to look at leasing the whole Extension, and what power was sold to Microsoft, is obvious.

219    Having been informed of Microsoft’s requirements, Mr Paddy proceeded to ask Mr Adcock to investigate whether the Extension was able to deliver the 4,000 kW of NBP that Microsoft needed. This seems to have taken place during an undocumented exchange between the two men sometime before 23 February 2010.[\[note: 305\]](#Ftn_305) Thereafter, Mr Adcock sent an email to Mr Paddy informing him specifically that the total NBP capacity of Arup’s Original Design was 3,500 kW.[\[note: 306\]](#Ftn_306) Mr Paddy then sent an email to Mr Adcock:[\[note: 307\]](#Ftn_307)

I am very dissappointed \[_sic_\] I have asked the question about capacity numerous times and our expectation has always been 4000sm at 1000w/sqm

We now are 500 KW down thats assuming the units undertake pf correction to get back to unity pf. Thus I doubt.

Please enlighten me as to how this has occured \[_sic_\]. Also ha \[_sic_\] an analysis been undertaken and have ED been asked if the units can deliver more no break at the expense of short break? How much shortbreak power do we need.

Please get back to me ASAP.

I find that Mr Paddy’s claim that he asked the question “about capacity numerous times” was not true. Mr Paddy does not mention either in his AEIC or in his oral evidence, when those “numerous times” he raised the question were. I have already referred to Mr Paddy’s only other response in writing on 28 November 2008, when he claims he was first told the NBP was 2,800 kW, at \[185\] and my views on his response are at \[188\]. There is no evidence that Mr Paddy complained verbally to Mr Adcock. Indeed, there is unlikely to be any given the number of emails passing between Mr Paddy and Mr Adcock and their contents, which give no hint of unhappiness or querying the shortfall or how it came about.

220    Mr Paddy was asked this in cross-examination and his answer, unsurprisingly, evades the question:[\[note: 308\]](#Ftn_308)

Q:I have shown you the entirety of the correspondence that at all times at the highest, Arup has assured you approximately just under 3,500 kW of power based on Arup’s belief that the Euro-Diesel machine could give unity power factor. Why is it here in this email that you say and suggest that you have asked the question about capacity numerous times and your expectation was 4,000 kW?

A:Because that was my expectation at the time.

The next five pages of cross-examination in the transcript show Mr Paddy being driven to agree that Arup was only required to deliver 3,600 kW power; that he had forgotten, I must say most unconvincingly, about the application of 0.9 diversity; that Arup never indicated or stated or promised 4,000 kW and it was only after GSS’s business side informed him of Microsoft’s requirement of 4,000 kW that he checked with Arup; and that he got a shock when Arup replied that the NBP capacity was 3,500 kW, because he had forgotten that Arup was tasked to deliver only 3,600 kW.[\[note: 309\]](#Ftn_309)

221    I find that Mr Paddy was trying to find excuses for why the power was not 4,000 kW, as well as why he had not ensured that the business team and Mr O’Brien were aware that the power requirement under the Contract was 3,600 kW and that GSS had agreed, for the reasons set out above, to vary that down to 2,800 kW. They agreed to lower it to 2,800kW. Only after the Microsoft tenancy came about did questions then arise about exploring if GSS could go higher. This was done in an attempt to shore up his position that the mistake was not his. That is why he wrote that he was very disappointed and that he had asked the question numerous times when this was not true.

222    I find that questions must have been raised internally at GSS as to when the NBP had dropped from 3,600 kW to 2,800 kW (see \[228\] below when Mr Corcoran wrote to Mr Adcock and asked who in GSS agreed to the 2,800 kW). Thus, Mr Paddy wrote this email to protect himself, and to conceal his failure to ensure that the GSS sales team knew the power they were selling (see \[184\] above where there is no evidence as to what, when or how Mr Paddy answered Mr O’Brien’s query on the technical power he could sell).

223    Mr Paddy’s email at \[219\] thus represents the first time in writing that GSS was requesting that Arup’s design be capable of delivering 4,000 kW of NBP to the Extension. Indeed, Mr Paddy accepted that:

(a)     as noted above, Arup had never indicated to GSS that it would produce a design capable of delivering 4,000 kW of NBP;[\[note: 310\]](#Ftn_310)

(b)     the Fee Proposal only required Arup to produce a design that could deliver 3,600 kW of NBP in an “N+1” configuration;[\[note: 311\]](#Ftn_311) and

(c)     the scope of Arup’s works had changed and it was to “put in an additional 400 kW” of NBP into the Extension.[\[note: 312\]](#Ftn_312)

224    Mr Adcock responded to Mr Paddy’s email later that day, stating, _inter alia_, that the Extension’s space can still be sold at 1 kW/m2 because tenants are unlikely to occupy more than 85% of the space, coupled with the application of a 0.9 diversity factor.[\[note: 313\]](#Ftn_313) Mr Adcock confirmed that as requested he would write to EuroDiesel on increasing the no-break component. Mr Adcock also pointed out there was significant spare capacity in the Existing Facility which could be utilised, if required. Mr Adcock was cross-examined on this and admitted he was trying to ameliorate the situation by referring to the actual percentage of occupation of the Extension and the diversity factor.[\[note: 314\]](#Ftn_314)

225    Mr Adcock wrote to EuroDiesel to ask whether the NBP output of the DRUPS units could be increased at the expense of SBP.[\[note: 315\]](#Ftn_315) EuroDiesel’s response was that:

(a)     the 2,500 kVA is based on a power factor of 0.8 and the engine was capable of delivering 2,000 kW;

(b)     the current balance was 1,400 kW NBP and 600 kW SBP;

(c)     EuroDiesel would investigate the possibility to shift the balance to 1,500 kW (or more) NBP and 500 kW SBP;

(d)     but the total output of 2,000 kW would not change.[\[note: 316\]](#Ftn_316)

226    On 11 March 2010 Mr Guth emailed Mr Paddy and asked whether he has received a consolidated response from Arup; he stated “With Microsoft looking real for the entire space, this 4MW issue is important that we resolve adequately.”[\[note: 317\]](#Ftn_317) Mr Paddy sent Mr Adcock an email on 12 March 2010 asking for a “well rounded response to this issue after looking at alternate supply sources for the major \[mechanical\] loads”, and also to look at “what power factor the EuroDiesel units will correct the load to”.[\[note: 318\]](#Ftn_318)

227    On 28 April 2010, Mr Adcock delivered further bad news to Mr Paddy, _viz_, EuroDiesel confirmed the maximum NBP of the DRUPS unit was 1,800 kVA or 1,440 kW and the power factor was 0.8 (and no higher).[\[note: 319\]](#Ftn_319) In that same email, Mr Adcock also proposed tapping into the existing spare capacity in the Existing Facility which as of August 2009 was 1,450 kW.[\[note: 320\]](#Ftn_320) This formed the basis of Arup’s Revised Design.

228    I digress for a moment to note that there was a meeting between Mr Corcoran and Mr Adcock on 27 May 2010 where Mr Adcock was asked to provide further details on who from GSS had accepted Arup’s Original Design, and when this acceptance was communicated to Arup.[\[note: 321\]](#Ftn_321) Mr Adcock responded to this request by way of a letter on 31 May 2010, which stated:[\[note: 322\]](#Ftn_322)

Attention: John Corcoran

**Global Switch Singapore – Expansion: Microsoft Lease Agreement & UPS Capacity**

Further to our meeting on Thursday 27th May 2010 and your request that Arup check our records and provide details on when and who from Global Switch had accepted the current UPS capacity, we have prepared the following summary:

The 3No DRUPS concept and limitation of 1,400 kW Critical Load (No Break) Rated Output per unit has been shown since:

19 September 2008 - Documentation Transmittal (Prelim drgs for CM - RFP) to Joe Ng & Gordon Paddy

29 October 2008 – DRUPS Comparison Spreadsheet to Gordon Paddy

8 December 2008 – Documentation Transmittal (Tender set & addendums) David Guth & Gordon Paddy

The above is in keeping with 30 January 2009 email received from Mark O’Brien (via Gordon Paddy) stating that: “_John has asked for us to look at the extension build in light of possible savings due to the application of power diversity initiatives etc. For example, is it possible to reduce the power build to provide 800W/sqm with an option of adding extra power at a later stage if required?”_

From the “_As discussed we are satisfied where the project stands currently_...” in the 19 February 2009 – Project Status & Update letter from David Guth, Global Switch had accepted the current UPS capacity.

We trust that this clarifies this issue.

\[emphasis in original\]

There is no evidence before me as to any reply by Mr Corcoran to Mr Adcock’s letter. What I do have is Mr Guth’s AEIC where he deposes that on his review of Mr Adcock’s letter (though he does not say when he reviewed the documents), he could not see any acceptance by GSS of the “current UPS capacity” in the documents cited by Mr Adcock.[\[note: 323\]](#Ftn_323) Mr Adcock does not dispute this. When he was taken through the various documents cited in the abovementioned email, he accepted that none of them indicated that the Extension’s NBP was 2,800 kW in an “N+1” configuration. However, this does not detract from the fact that Mr Paddy was aware, as demonstrated by my review of the numerous other documents set out above, that Arup’s Original Design was only capable of delivering 2,800 kW of NBP to the Extension.

#### Arup’s alleged failure to recommend alternative larger-capacity DRUPS

229    It will be convenient at this juncture to deal with GSS’s allegation that Arup failed to search the market and select a DRUPS unit with sufficient NBP to satisfy GSS’s IT Load Requirement. GSS submits, and I have already rejected for the reasons set out above, that Arup limited the size of the DRUPS unit when asking the DRUPS suppliers to supply information and tender to those of 1,670 kVA. GSS submits that Arup failed to recommend two alternative DRUPS units of larger capacity. This raises the factual issue of whether there were suitable DRUPS units of larger NBP at that point in time.

230    GSS claims that, as of 2009, there were two other larger-capacity DRUPS units available that could have enabled GSS to meet its IT Load Requirement of 4,000 kW:[\[note: 324\]](#Ftn_324)

(a)     Piller’s 2,500 kVA 2,000 kW NB DRUPS unit; and

(b)     EuroDiesel’s 3,000 kVA **_2,000_** kW NB DRUPS unit.

231    Arup, in its closing submissions, directed its arguments towards Piller’s 2,500 kVA 2,000 kW NB DRUPS unit and EuroDiesel’s 3,000 kVA **_1,800_** kW NB DRUPS unit.[\[note: 325\]](#Ftn_325) This appears to be an error on Arup’s part. Arup cited Mr Ansett’s _first_ AEIC for EuroDiesel’s 3,000 kVA **_1,800_** kW NB DRUPS unit, but as Mr Ansett explained in his _second_ AEIC, EuroDiesel had increased the NB capacity of its DRUPS unit from 1,800 kW to 2,000 kW and reduced the DRUPS unit’s SB capacity from 600 kW to 400 kW.[\[note: 326\]](#Ftn_326) It is Ansett’s _second_ AEIC which identified the EuroDiesel 3,000 kVA **_2,000_** kW NB DRUPS unit as an available option, since he had earlier explained that the old model with 1,800 kW of NBP would only provide 3,600 kW of NBP in an “N+1” configuration.[\[note: 327\]](#Ftn_327) I will therefore analyse whether EuroDiesel’s 3,000 kVA **_2,000_** kW NB DRUPS unit (as opposed to its 1,800 kW NB DRUPS) existed in 2009 and was suitable for GSS’s purposes.

##### Piller’s 2,500 kVA 2,000 kW NB DRUPS unit

232    Both parties do not dispute that Piller did indeed have a DRUPS unit that could deliver 2,000 kW of NBP at the time when the Original Design was being formulated.[\[note: 328\]](#Ftn_328) However both experts agree that it did not have any ability to deliver SBP.[\[note: 329\]](#Ftn_329)

233    Arup’s main contention is that this DRUPS unit would not have been a viable option for GSS as it could not concurrently deliver any SBP to support the Extension’s Mechanical Load. Since utilising the Piller DRUPS unit would require GSS to tap on the Existing Facility’s spare SBP capacity, Arup could not have been expected to propose that option because the Fee Proposal stipulated that the Extension was to be a dedicated electrical plant with its own M&E systems. Additionally, Arup also contends that there was no spare SBP capacity from the Existing Facility that was available for this purpose.[\[note: 330\]](#Ftn_330)

234    I find that Mr Ansett again became an advocate for his client in testifying that this was not an insurmountable problem because “in the context of mission critical engineering, data centre engineering, the \[NBP\], the IT load capacity trumps everything.”[\[note: 331\]](#Ftn_331) If Piller’s DRUPS unit did not have any SBP capacity, Mr Ansett’s evidence that it was a suitable and superior unit in comparison is, in my mind, and given that an expert witness’s primary duty is to the court, not quite objective. He was not comparing DRUPS units with like capabilities.

235    Mr Ansett’s attempt to explain away such a characteristic is also not acceptable. I accept Arup’s submission that it was tasked to design an electrical system for the Extension with both NBP and SBP. Having DRUPS to supply the NBP in the Extension and then finding the SBP elsewhere, especially the Existing Facility, is not something within their design brief. Mr Ansett had to admit that this fell outside Arup’s design brief,[\[note: 332\]](#Ftn_332) and Mr Peck agreed.[\[note: 333\]](#Ftn_333)

236    Mr Ansett also admitted under cross-examination that his report was based on the wrong presumption that there was spare generator capacity in the Existing Facility, which could be utilised to provide SBP for the Extension.[\[note: 334\]](#Ftn_334) He was in fact wrong as by doing so, it would cut into the already contracted power to tenants of the Existing Facility.[\[note: 335\]](#Ftn_335) This was something which Mr Turvey deposes that GSS would never do.[\[note: 336\]](#Ftn_336) When Mr Ansett was confronted with this, he then sought to justify this as acceptable on the basis that GSS had no other choice.[\[note: 337\]](#Ftn_337)

237    I therefore find that Piller’s DRUPS unit was unsuitable for the Extension and Arup cannot be faulted for not putting this forward as an alternative.

##### EuroDiesel’s 3,000 kVA 2,000 kW NB DRUPS unit

238    Counsel for Arup adduced a EuroDiesel press release dated November 2009[\[note: 338\]](#Ftn_338) (“EuroDiesel’s November 2009 Press Release”) which stated that EuroDiesel has produced a 3,000 kVA NB unit. Mr Chia however pointed out that this EuroDiesel DRUPS unit operates in the 60 Hz frequency band.[\[note: 339\]](#Ftn_339) This DRUPS unit would have been incompatible with the electrical supply in Singapore which operates at a frequency of 50 Hz.[\[note: 340\]](#Ftn_340) GSS does not dispute this.[\[note: 341\]](#Ftn_341) This was therefore not an option for the Extension.

239    Mr Ho, counsel for GSS, contended that the very same article relied on by Mr Chia _also_ identifies another suitable alternative, this being EuroDiesel’s 2,500 kVA DRUPS which operates at 50 Hz. For context I reproduce the material portions of EuroDiesel’s November 2009 Press Release:[\[note: 342\]](#Ftn_342)

The new 3000 kVA is designed for operation within regions around the world operating at 60Hz in stand-alone and parallel redundant configurations, _whilst a 2500 kVA version is also available for 50HZ applications_. \[emphasis added\]

240    While Mr Ansett accepted that was no 3,000 kVA EuroDiesel unit that operated at 50 Hz,[\[note: 343\]](#Ftn_343) in relation to the italicised portions of EuroDiesel’s November 2009 Press Release, Mr Ansett testified that “what this does reveal is there was in existence a 2,000 kW no break machine in 2009” that was “the equivalent of the Piller \[DRUPS unit\]”.[\[note: 344\]](#Ftn_344) In support, Mr Ansett also relied on an undated EuroDiesel printout which stated that in 2009 there was the “\[l\]aunch of the new 2500kVA (50Hz) / 3000kVA (60Hz) NO-BREAK KS® Single Output Systems”.[\[note: 345\]](#Ftn_345) The upshot of Mr Ansett’s contention is that there remained two alterative DRUPS units in 2009, _ie_, Piller’s 2,500 kVA 2,000 kW NB DRUPS unit (which I have rejected at \[237\] above), and EuroDiesel’s 2,500 kVA 2,000 kW (50 Hz) NB DRUPS unit. Arup did not address the availability or otherwise of EuroDiesel’s 2,500 kVA 2,000 kW (50 Hz) NB DRUPS unit. Instead, it adduced a press release by EuroDiesel dated 4 March 2014 (“EuroDiesel’s March 2014 Press Release”) which stated that:[\[note: 346\]](#Ftn_346)

… EURO-DIESEL launches the next generation of \[DRUPS\] systems; the NO-BREAK KS®7e. At up to _2750kVA/2200kW (50Hz)_ or 3000kVA/2400kW (60Hz) per unit: the NO-BREAK KS®7e is engineered specially for data centre applications … \[emphasis added\]

Arup relied on this to argue that it was only in March 2014 that EuroDiesel announced the manufacture of a suitable DRUPS unit that operated at 50 Hz.[\[note: 347\]](#Ftn_347)

241    I accept that EuroDiesel’s 2,750 kVA 2,200 kW DRUPS (50 Hz) unit was not an option as it was unavailable in 2009.

242    Turning now to EuroDiesel’s 2,500 kVA 2,000 kW NB DRUPS (50 Hz) (referred to at \[240\] above), I find that GSS has not discharged the burden of showing that such a DRUPS unit existed. While Mr Marco Nijenhuis of EuroDiesel (“Mr Nijenhuis”) stated in an email to Mr Ansett that “\[i\]n 2009 we introduced the 2500 kVA”,[\[note: 348\]](#Ftn_348) this is hearsay evidence as neither party called Mr Nijenhuis to testify. I also note that Mr Nijenhaus gave contradictory answers to Mr Ansett and Mr Peck on the existence of EuroDiesel’s 3,000 kVA DRUPS unit:[\[note: 349\]](#Ftn_349)

(a)     In response to Mr Ansett’s query “to confirm that EuroDiesel had an 3000kVA DRUPS with a 1800 kW No Break and 600kW Short Break capacity 2008”, Mr Nijenhaus replied that “_this is correct_ … \[EuroDiesel\] were able to do the total power of 3000 kVA (2400 kW) …” \[emphasis added\].[\[note: 350\]](#Ftn_350) When asked further that “the data below is for Singapore 50Hz”, Mr Nijenhaus replied in the _affirmative_.[\[note: 351\]](#Ftn_351)

(b)     However, in response to Mr Peck’s query whether EuroDiesel had “a 3000 kVA 50 Hz DRUPS”, Mr Nijenhaus answered that “Euro-Diesel _cannot_ provide 3000 kVA no-break power at 50 Hz” \[emphasis added\].[\[note: 352\]](#Ftn_352)

The above demonstrates how it is unsatisfactory to rely on Mr Nijenhaus’s emails without calling him as a witness. As the evidence on the existence of EuroDiesel’s 2,500 kVA 2,000 kW NB DRUPS unit is at best equivocal, I find that GSS has not discharged its burden of proof.

243    In any case the analysis here does not change my final conclusion because the NBP specification was varied from 3,600 kW to 2,800 kW and there was no shortfall.

#### Whether Arup ought to have advised on the use of a fourth DRUPS unit

244    I also deal briefly with whether Arup ought to have advised on a solution involving a fourth DRUPS unit. GSS in its closing submissions claims that it was not fully advised on the alternative options available, which would have included a fourth DRUPS unit.[\[note: 353\]](#Ftn_353) I reject this (unpleaded) allegation because the option of a fourth DRUPS unit was ruled out from the beginning due to space and cost constraints (as discussed above at \[204\]).

245    The fact that GSS eventually installed a fourth DRUPS unit in 2012 does not affect my analysis, because GSS’s priorities at that time had changed. Mr Turvey deposed that GSS had subsequently decided to install a fourth DRUPS unit because there was an urgent need for additional NBP.[\[note: 354\]](#Ftn_354) This is supported by a GSS Request for Approval dated 23 August 2012 and drafted by Mr Chris Heffernan, which stated that Microsoft’s load was growing and that a fourth DRUPS unit had to be installed for GSS to fulfil its contractual obligations.[\[note: 355\]](#Ftn_355) This contrasts with the situation in 2010, where there was no clear indication that GSS needed more than 4,000 kW of NBP for the Extension. As mentioned above, GSS’s attitude in 2010 was that additional capital expenditure would only be justified if there was a clear demand for it. This would tie in with my observations above (at \[28\]) on the possibility of installing a fourth DRUPS unit.

#### Variation to 4,000 kW of NBP and incorporation of STSs

246    With the securing of Microsoft as a tenant for the whole Extension, GSS faced a significant problem. Whatever case GSS may have tried to run at trial, the fact of the matter is, as I have found, that GSS only asked for an Extension with 3,600 kW NBP under the Contract. I also have found that GSS knew what it was doing when stipulating 4,000 kW with a 0.9 diversity. This is a key point. Even if I am wrong in finding that the 3,600 kW requirement was varied to 2,800 kW such that Arup breached the Fee Proposal in providing for 2,800 kW (instead of 3,600 kW of NBP in an “N+1” configuration), Arup never promised 4,000 kW of NBP, something which GSS now had to deliver to Microsoft.

247    It is noteworthy that Mr Paddy admitted in cross-examination that GSS had asked Arup to provide for more power when GSS found it needed 4,000 kW for the Microsoft lease; Mr Paddy also accepted that GSS had also asked Arup to incorporate the use of STSs in its Revised Design:[\[note: 356\]](#Ftn_356)

Q: _So in early 2010, Global Switch now faces a shortfall of design -- let me rephrase that. In early 2010 Global Switch now has a problem. The extension appears to have been designed for only 3.6 MW but Microsoft requires it to be 4 MW, correct, Mr Paddy?_

_A:_ _That would be correct._

Q:You, therefore, approached Arup in the later series of emails -- which I won't take you through because it's quite clear on their face what it says -- to fix that problem. Correct, Mr Paddy?

A:Yes, I'm sure I did.

_Q:_ _Basically you are telling Arup, "Scope has changed, I now need you to put in an additional 400 kW into the extension". Correct, Mr Paddy?_

_A:_ _I certainly asked them to investigate it._

…

Q:…Let's go back to what Arup was asked to do in this period, second quarter 2010**.** _First, Arup was asked to increase the design load of the building by 400 kW, yes?_

_A:_ _I don't know that we -- we asked them to investigate it which -- the possibilities of it._

_Q:_ _Is there a difference?_

_…_

_A:_ _There is no difference._

_…_

_Q:_ _So did you tell Arup to incorporate the use of STSs switches because there was a request from Microsoft?_

_A:_ _I would have done._

Q: **_So, again, looking at the issues at the time, Global Switch has asked Arup to do two things. One, increase the design load for the extension by 400 kW as well as incorporate STSs into the design. Correct, Mr Paddy?_**

A: **_That's correct._**

Q:Yes. Neither of these are within the scope of the original engineering fee proposal, correct, Mr Paddy?

A:No, but could I clarify my response on this one?

Q:Of course.

A:Because there -- if you are incorporating STSs in a purely DRUPS system, it's very different to incorporate them to take power from another source. So there will be a difference in how they are incorporated.

Q:I understand that eventually it was incorporated in a different way and what Microsoft perhaps might have envisioned. I understand that, Mr Paddy, and I understand your point on that. My point was slightly different. My point was what was your request of Arup at the time, March 2010? **_And you did request Arup to also incorporate the STSs as per Microsoft's request. Am I correct?_**

A: **_Yes, I guess, yes._**

Q: **_Yes. This would have been a change from their original scope of works in the engineering fee proposal of September 2008, am I correct?_**

A: **_Yes. That would be the case._**

\[emphasis added in italics and bold italics\]

248    It is unclear from the evidence precisely why Microsoft would have needed STSs. In its closing submissions Arup contends that it was asked to incorporate STSs to cater to Microsoft’s single-corded equipment,[\[note: 357\]](#Ftn_357) citing paragraphs 47 to 48 of Mr Guth’s AEIC. But those two paragraphs do not specifically state that Microsoft’s equipment was single-corded. Mr Guth was cross-examined on the same and only stated that the STSs were incorporated because Microsoft wanted them.[\[note: 358\]](#Ftn_358) But the point remains that GSS had wanted STSs to accommodate Microsoft’s requirements.

249    Having found that Arup was originally only required to produce a design capable of delivering 3,600 kW of NBP and that the Original Design did not use STSs (as seen from Arup’s draft Electrical Scheme Report),[\[note: 359\]](#Ftn_359) it must follow that GSS’s request for a design that: (a) was capable of delivering 4,000 kW of NBP and (b) which incorporated the use of STSs, was a request to Arup to change the requirements of their original agreement. Arup does not dispute that it agreed to do so. I therefore find that the parties had agreed to vary, first, the original power or NBP from that set out in the Fee Proposal to 4,000 kW and secondly, to incorporate the use of STSs.

250    As noted at \[227\], on 28 April 2010, Arup proposed tapping into the spare capacity in the Existing Facility which as of August 2009 was 1,450 kW. Discussions then ensured on this solution.

251    On 29 April 2010 Mr Paddy sent Mr Adcock the following email:[\[note: 360\]](#Ftn_360)

Peter

We have a number of queries that need your urgent attention:-

The _most urgent of these is the use or otherwise of static switches._ Based on your advice we did not include them _however we can see a number of issues arising if we do not have them, in terms of system resiliance_ \[_sic_\]. Particularly when we look at operational issues and failure scenarios compared to the existing facility where failures at a high level with static switches employed still protect both the A and B source, other than a downstream failure.

This is now _causing us great concern_ and as such _we have to justify our position_ on this as to include them will _cost around $2m, I am not able to satisfactorily explain this apparent lack of resiliance_ \[_sic_\] other to myself and therefore not to senior management.

We Mark O,Brien, David and myself, will be calling you shortly to discuss this and resolution of suppying \[_sic_\] 1000w / sqm over the total 4000sqm.

\[emphasis added in italics\]

252    The language of this request and how Mr Paddy phrases his email is of some relevance. Mr Paddy states that he could see a number of issues arising in terms of systems resilience if there were no STSs. This is probably based either on Microsoft’s explanation of why it required STSs or Mr Paddy’s own experience or knowledge as the evidence shows Global Switch’s Sydney data centre used STSs. But he states he did not know how to explain and justify the need for them, as including them would involve an additional $2m in expenditure, so he asked for Mr Adcock’s assistance in drafting this justification. It is not disputed that incorporating STSs was a requirement of Microsoft,[\[note: 361\]](#Ftn_361) and there can be no doubt that this was a new request by GSS because Arup had stated in its draft Electrical Scheme Report dated 14 October 2008 that STSs were not going to be used in its Original Design.[\[note: 362\]](#Ftn_362) The real reason for GSS’s request was because Microsoft, who was by now looking to take up the whole of the Extension, required the incorporation of STSs.[\[note: 363\]](#Ftn_363) Instead, GSS asked Arup to incorporate the use of STSs in its new design[\[note: 364\]](#Ftn_364) and draft the justification for their own internal capital expenditure policies, not on the basis of a Microsoft (or tenant) requirement but because without STSs, a number of issues, in terms of system reliance, arose.

253    There was a meeting on 27 May 2010 and following that Arup sent GSS two memoranda on its Revised Design. The first, entitled “Expansion: Increasing IT (UPS/NB) Power”, was sent on 31 May 2010 and mentions, _inter alia_, the following:

(a)     The three EuroDiesel DRUPS units will run as the “N” to provide a maximum of 4,000 kW (_ie_, 1,333 kW each operating at 95% assuming no diversity) of NBP to the Extension, while the combined Static UPS supplies from the Existing Facility will provide the “+1” backup to the Extension’s DRUPS units.[\[note: 365\]](#Ftn_365)

(b)     Arup confirmed there was available surplus power from the Existing Facility’s UPS system for the “+1” back-up in the Extension based on the latest results of March 2010 (set out in a spreadsheet).[\[note: 366\]](#Ftn_366)

(c)     The Extension was confirmed to be future-proofed as a fourth DRUPS unit could be installed and integrated into the Revised Design; the transfer of loads onto the fourth DRUPS unit would be no different to programmed maintenance on an “N+1” system.[\[note: 367\]](#Ftn_367)

(d)     Under a summary of what the other possible options are and why they have been rejected, Arup stated:[\[note: 368\]](#Ftn_368)

AWP advised that the planning conditions (15m set back from the limit the KPE/Airport Rd side boundary) limit installing DRUPS units to being on a platform above the PowerGrid HV switchroom and this was evaluated at the start of the project and rejected as too high risk, i.e. this is the supply point for both the A & B 22kV supplies to the site.

There was no disagreement with the statement set out at (d) above.

254    In its memorandum dated 11 June 2010,[\[note: 369\]](#Ftn_369) Arup stated that:

(a)     All IT Load in the Extension would be supplied by the three DRUPS units. Based on the reliability details supplied, the mean time between the failure of each DRUPS unit is ten years, and it is likely that the IT Load would only need to be transferred onto the Existing Facility’s SUPS system during the maintenance of the DRUPS system.[\[note: 370\]](#Ftn_370)

(b)     When a DRUPS unit is withdrawn for maintenance, the standard operating procedure would be for someone to manually transfer the STS from the Preferred Source (DRUPS) to the Alternative Source (SUPS).[\[note: 371\]](#Ftn_371)

(c)     Given the then-loads on the SUPS, there was sufficient available capacity to implement the Revised Design as there would be a buffer when the Extension’s load is transferred onto the SUPS. However, if and when the loads on the SUPS system grow, such that the power draw approaches the contracted power, then future proofing the Extension with a fourth DRUPS unit can be implemented – subject to an acceptable location (_ie_, in compliance with government planning requirements) and without unacceptable installation risk.[\[note: 372\]](#Ftn_372)

(d)     As earlier advised, there was insufficient spare flow in the existing condenser water system to enable increasing the contracted power above the 1 kW/m2 as it is presently balanced and this must also be carefully monitored as the loads grow.[\[note: 373\]](#Ftn_373)

255    T&T, GSS’s cost consultant for the Project, issued its report on Arup’s Revised Design on 14 June 2010, which it updated on 17 June 2010.[\[note: 374\]](#Ftn_374) This was a peer review on Arup’s Revised Design, and four points mentioned therein are relevant:

(a)     First, it was specifically noted that GSS only required that the Extension’s M&E systems meet the Uptime Institute’s Tier III requirement of being concurrently maintainable. This meant that the Extension need not be concurrently maintainable _and_ fault tolerant simultaneously,[\[note: 375\]](#Ftn_375) which would have been a Tier IV requirement.

(b)     Secondly, T&T noted that existing tenants in general are operating at approximately 40% to 50% of their contracted maximum loads.

(c)     Thirdly, T&T also noted that while Arup’s Revised Design was likely to be adequate for the medium term, further upgrades may be necessary when the loads on the Existing Facility’s SUPS system increase in the future.[\[note: 376\]](#Ftn_376) That was also the view of Arup – this was only a temporary solution until the power draws in the Existing Facility reached 80% of the contracted power, whereupon a fourth DRUPS unit would have to be installed.[\[note: 377\]](#Ftn_377) I accept the evidence of Mr Adcock on this point. I note he was not challenged on this in cross-examination, and his evidence in this regard was supported by contemporaneous memoranda.[\[note: 378\]](#Ftn_378) This also coincides with the views expressed by T&T.

(d)     Fourthly, whilst agreeing with the Revised Design, T&T highlighted the risk of “second event” circumstances which could result in the entire suite’s load transferring from more than one DRUPS unit to the SUPS system in fault situations.[\[note: 379\]](#Ftn_379) From a memo created by T&T sometime after the issuance of its report on 14 June 2010, it appears that Mr Paddy concluded this was outside the scope of GSS’s requirements as GSS had required the system to be concurrently maintainable, and not concurrently maintainable and fault tolerant.[\[note: 380\]](#Ftn_380)

256    Subsequently, Mr Guth and Mr Paddy prepared a draft Request for Approval for Capital Expenditure dated 17 June 2018, in respect of Arup’s Revised Design. I highlight three relevant points made in this draft Request for Approval:

(a)     First, it was stated that Arup’s Revised Design was “a cost effective and feasible solution using the existing surplus capacity, which…cannot be used in the \[Existing Facility\] due to the cooling constraints”.[\[note: 381\]](#Ftn_381) It also added that the Revised Design was “the quickest solution given the lead time on a new DRUPS would be approximately 9 months”.[\[note: 382\]](#Ftn_382)

(b)     Secondly, it was also stated that the installation of a fourth DRUPS unit was an option that could be completed at a later stage, if required. However, there were a number of issues associated with this option, including the cost of approximately $4.5 million, and the spatial constraints of the Tai Seng site. It was also noted that the only viable location for a fourth DRUPS unit was above the HV Transformer substation, and that “the amount of in ground services would make any new structure very difficult to construct”. Nevertheless, it was concluded that the installation of a fourth DRUPS unit was a viable option which could be instigated if the Revised Design proved to be unviable, or if there was a need for increased capacity in the future.[\[note: 383\]](#Ftn_383)

(c)     I also note that the “Background” to the draft Request for Approval was carefully worded to avoid categorically stating why the “required 1 kW/Sqm in an ‘N+1’ configuration” was not met:

It is evident now that these 3 DRUPS units, being 2.5MVA units of 1750 kVA No Break and 750 kVA Short Break supply are not enough to satisfy the IT power requirements for the entire space to be delivered at the required 1 kW/Sqm in an ‘N+1’ configuration. _Due to load factor limitations the total amount of IT power supported in an N+1 configuration would be 2,800 kW, approximately 1,200 kW short of the requirement._ Therefore a solution to provide the full 4MW of IT load is required. \[emphasis added\]

It does not say that this was due to the M&E consultant’s mistake, although I further note that this draft contained the following comment immediately after the above-cited paragraph:

Need a description of why this oversight occurred. Will also need to detail what steps are being taken to recover costs.

257    There is no final version of this draft or evidence as to whether it was sent out. On 28 June 2010 there was an email from Mr Guth to Mr Paddy requesting the latter to provide a short summary conclusion that Arup’s Revised Design was acceptable and should be implemented accordingly based on Arup’s memo and T&T’s Mr Christopher Wallace’s email of 25 June 2010 which appears to be a schedule programme leading to the Phase 1 Integrated Systems Testing (“IST”) for Mr Adcock’s comments.[\[note: 384\]](#Ftn_384)

258    On 29 June 2010, Mr Paddy sends Mr Guth an email stating the following:[\[note: 385\]](#Ftn_385)

After reviewing the ARUP summary of the design criteria for the proposed N+1 scenario and taking into account the reports from Chris Wallace of Turner and Townsend I would make the following comments.

**_The design now incorporates the Static Switches and utilises reserve capacity from a number of battery static UPS systems from within the exising_** **\[sic\]** **_facility_**. Due to the constraints of the condenser water system capacity this reserve or spare UPS capacity cannot be used to increase the load densities in the existing building or suites.

_The system_ **_is fault tolerant_** _, the system is concurrently maintainable which makes it tier 3, it is not both which would be Tier 4._

…

With the proposed design _the extension will be Tier 3_. The solution is _cost effective and avoids the provision of a 4th DRUPs unit._

…

I would recommend proceeding with final detail design and implementation of the proposed N+1 solution utilising the static battery systems as the +1 solution for the expansion area.

\[emphasis added in italics and bold italics\]

259    I make two points regarding this email. First, it is apparent that Mr Paddy was warning that due to the constraints of the condenser water system capacity, this reserve or spare UPS capacity cannot be used to increase the load densities in the Existing Facility. This was a clear warning that if the tenant load increased (up to their contracted limits) or if tenants wanted to increase their load densities in the Existing Facility, it would not be possible.

260    Secondly, Mr Guth understood this email as only making sense if it read “_not_ fault tolerant”.[\[note: 386\]](#Ftn_386) However, when Mr Paddy was questioned on this he stood by his email and maintained that there was no typographical error.[\[note: 387\]](#Ftn_387) He understood “N+1” to mean that if one unit was taken offline the system could be maintained, but if during that maintenance a fault occurs it would run into trouble. Conversely if the fault happened without any unit being taken offline then the system would work fine.[\[note: 388\]](#Ftn_388) As for the experts, Mr Ansett agreed that a Tier III system was strictly speaking only concurrently maintainable and not fault tolerant, and that Mr Paddy’s definition was technically wrong.[\[note: 389\]](#Ftn_389) However he also noted that most Tier III data centres also incorporated _some_ degree of fault tolerance.[\[note: 390\]](#Ftn_390) Mr Peck did not disagree with Mr Ansett’s definition.[\[note: 391\]](#Ftn_391) Mr Guth also agreed with Mr Ansett’s strict definition of what a Tier III data centre entailed.[\[note: 392\]](#Ftn_392)

261    During cross-examination, Mr Paddy agreed that:

(a)     Using the Existing Facility’s spare capacity as the “+1” redundancy in the Extension was cost effective because the cooling restrictions prevented the spare capacity from used in the Existing Facility at that time.[\[note: 393\]](#Ftn_393)

(b)     Tapping on the Existing Facility’s spare capacity would be consistent with the Global Switch Directive, which encouraged each data centre to identify spare capacities and generate revenue from them.[\[note: 394\]](#Ftn_394)

(c)     Deferring the installation of a fourth DRUPS unit was consistent with the Global Switch Directive because it allows GSS to upgrade its facility if the need for additional power arises in the future.[\[note: 395\]](#Ftn_395)

262    Arup subsequently obtained instructions from GSS to proceed with its Revised Design on 1 July 2010 in an email from Mr Guth to Mr Adcock.[\[note: 396\]](#Ftn_396) I find this Revised Design was caused by GSS requiring 4,000 kW NBP in the Extension and the installation of STSs, which was a requirement by Microsoft.[\[note: 397\]](#Ftn_397) The electrical and back-up systems, including the STSs, were thus laid out and constructed in the Extension with the “+1” element being drawn from the Existing Facility’s SUPS.

263    To summarise my findings thus far:

(a)     The Fee Proposal and Purchase Order originally provided for 4,000 kW of NBP as a fixed contractual requirement, with a diversity factor of 0.9 to be applied. This worked out to 3,600 kW of NBP. I therefore dismiss GSS’s claim that the Contract originally provided for “at least 4,000 kW, and up to 4,444 kW” of NBP.[\[note: 398\]](#Ftn_398)

(b)     The original requirement of 3,600 kW of NBP, after applying diversity, was subsequently varied to 2,800 kW, as a result of the constraints imposed by GSS. It is inconceivable that GSS did not know of, and by logical implication accept, this lower capacity (contrary to its assertion that it was “not aware” of this).[\[note: 399\]](#Ftn_399)

(c)     The Revised Design was caused by GSS’s need to accommodate the Microsoft tenancy. The Revised Design entailed a _second_ variation of the Contract to provide 4,000 kW of NBP and incorporate STSs. The incorporation of STSs was not something that Arup wanted or introduced of its own volition.

264    The above disposes of GSS’s claim that Arup had a duty to (and failed to) warn of the alleged shortfall under the Original Design.[\[note: 400\]](#Ftn_400) GSS alleged that Arup had failed to inform GSS of the shortfall early enough for it to implement remedial measures, and claimed for (a) the increased costs of installing a fourth DRUPS unit which GSS would not otherwise have incurred,[\[note: 401\]](#Ftn_401) and (b) loss of the ability to tap on the Existing Facility’s SUPS system for the Pacnet Opportunity and the Microsoft Opportunities.[\[note: 402\]](#Ftn_402) Even if there had been a duty to warn (which I find it unnecessary to rule on given my ultimate conclusion here), that duty would not have been breached: I had found that Mr Paddy _actually knew_ of the variation to 2,800 kW and that GSS was the party who stipulated space and cost constraints. In fact, not only did Mr Paddy know of the variation he actually took part in the decision-making process – he was involved in discussions with, for instance, Piller as a DRUPS supplier (at \[178\]) and received technical specifications clearly stating the NBP of the available DRUPS that he admitted he “would have seen”. GSS also obtained opinions from Babtie and AWP (at \[27\] and \[139\]) ruling out the availability of space for a fourth DRUPS unit. In other words, GSS was not an uninformed party and the situation is far from that of a professional warning a lay client or laying out the options.

265    Mr Peck, when questioned on whether a consultant who knew that 3,600 kW could not be obtained should have brought the issue expressly to the client’s attention, agreed that this should be done and “brought to the client’s attention more emphatically”.[\[note: 403\]](#Ftn_403) In my view, all this means is that it is good practice for a professional to set out the position in writing as it stood at some point, outlining the pros and cons to the client. The fact that Arup did not do so in this case, did not prejudice GSS or enable GSS to bring a claim because GSS knowingly took part in the decision-making process, but in failing to do so Arup bought itself a lawsuit.

### The cause of the May 2013 failures

266    I next consider the issue of what caused the May 2013 failures. This lays the groundwork for addressing the agreed issues of:

(a)     whether the May 2013 failures were caused by deficiencies and/or defects in the Revised Design; and

(b)     whether Arup’s failure to meet its obligations, if any, resulted in defects and/or faults arising in the Extension.

267    It is undisputed that Arup’s Revised Design provided the Extension with uninterrupted power from the dates of handover to May 2013.[\[note: 404\]](#Ftn_404) On 2 May 2013, the STSs transferred two DRUPS units’ load onto the Existing Facility’s SUPS.[\[note: 405\]](#Ftn_405) On 18 May 2013, the STSs transferred three DRUPS units’ load to the SUPS.[\[note: 406\]](#Ftn_406) In each instance, the SUPS units (being designed only to handle the load of one DRUPS unit) overloaded.

268    The key question is therefore this: What caused the STSs to transfer their loads onto the Existing Facility’s SUPS units on these two occasions?

269    To understand what caused the STSs to transfer, it is first necessary to understand what happened on the power grid during that time. I find that there were power disruptions of significance in the power grid on 2 May 2013 and 18 May 2013. These are borne out by letters from SP Powergrid Ltd (as agents for SP Powerassets):

(a)     On 2 May 2013, there was a voltage sag of 15.2% magnitude of 80 milliseconds, as recorded at the Kaki Bukit Station.[\[note: 407\]](#Ftn_407) I accept Mr Peck’s evidence that this was of significance because whilst two of the voltage waveforms were hardly affected, the third was by about 15%, the 15.2% being the average across all three voltage waveforms.[\[note: 408\]](#Ftn_408) I note the STS logs for this incident were missing. Mr Ho confirmed they could not be found.[\[note: 409\]](#Ftn_409)

(b)     On 18 May 2013 there was a more severe power disruption. Due to a 230kV cable between the Seraya and Labrador power stations being damaged, a voltage dip of 52.9% of 120 milliseconds duration occurred and was recorded at the Kaki Bukit station.[\[note: 410\]](#Ftn_410)

270    These power disruptions were significant not only because of the magnitude of the _voltage dip_, but also because they involved additional and unusual[\[note: 411\]](#Ftn_411)_frequency disruptions_ known as “vector jumps”. There were no vector jumps involved in the earlier power disruptions to trigger any STS transfers in the Revised Design.[\[note: 412\]](#Ftn_412) A vector jump is an electrical anomaly where the frequency of the mains supply, which is normally at 50 Hz, changes almost instantaneously,[\[note: 413\]](#Ftn_413)_ie_, there is a momentary shift in phase of the supply waveshape.[\[note: 414\]](#Ftn_414) Graphically this can be envisioned as a sudden dip in the typical sinusoidal waveform (with regular rise, crest and descent) before its continues on its usual path, which also involves some displacement on the time-axis.

271    Both experts agreed that to work out the duration of the frequency disruption from the voltage waveform would require complex mathematical modelling.[\[note: 415\]](#Ftn_415) Also, what was recorded at Kaki Bukit station might have changed by the time it reached the Extension.[\[note: 416\]](#Ftn_416)

272    Next, I consider the impact of the power disruptions on the DRUPS units and STSs. STSs “sense” and measure voltage, and use these measurements to work out projections for frequency.[\[note: 417\]](#Ftn_417) But in making these measurements the STSs only sample the voltage waveform in discrete intervals and _interpolate_, because they must be able to react quickly to perceived disruptions (Mr Ansett’s evidence was that it takes an STS roughly 1 millisecond to work out whether there is an issue[\[note: 418\]](#Ftn_418)). Because STSs arrive at their “decision” whether to switch from the Preferred Source to Alternative Source through sampling, it is conceivable that erroneous “judgments” are made – a deviation that would have normalised by the next waveform cycle might be interpreted by the STSs as a frequency anomaly (in the sense that it falls outside the STSs’ pre-set frequency parameters), which warrants switching from the Preferred Source to Alternative Source. In that sense, STSs are “dumb device\[s\]” that cannot respond to the type of power disturbance that involves vector jumps. I find that this is what happened:

(a)     The DRUPS units are located upstream from the STSs in the Revised Design, meaning that power flows through (or from, depending on whether the DRUPS units have engaged) the DRUPS units before reaching the STSs.

(b)     During the May 2013 incidents, the DRUPS units interpreted the power disruptions as vector jumps,[\[note: 419\]](#Ftn_419) and would have engaged within 100 to 200 milliseconds to provide backup power.[\[note: 420\]](#Ftn_420)

(c)     But the DRUPS units were unable to react in time because this process of engagement was cut off by the STSs, which reacted much faster than the DRUPS units. The STSs, through sampling and interpolation, interpreted the vector jump as a frequency disturbance in the DRUPS’s output supply (as stated, the STSs are downstream from the DRUPS units), when it was actually a disturbance _from the mains_. Because of the perceived problem with the Preferred Source (_ie_, DRUPS), the STSs engaged and switched to the Alternative Source (_ie_, SUPS).

(d)     This overloaded the SUPS units[\[note: 421\]](#Ftn_421) because more than one DRUPS unit’s load was transferred – the 2 May 2013 incident affected Feed B of the Extension’s mains supply, which was connected to DRUPS units Nos 2 and 3, while the 18 May 2013 incident involved both Feeds A and B of the Extension and therefore all three DRUPS units.[\[note: 422\]](#Ftn_422)

273    I therefore find that the STSs switched from the Preferred Source to the Alternative Source on 2 May 2013 and 18 May 2013 in response to the power disruptions in the main feeds, which involved vector jumps that the STSs interpreted as frequency disturbances in the DRUPS units’ output supply. For completeness I note Mr Ansett’s evidence, which Mr Peck did not disagree with, that frequency disruptions would not affect the IT Load.[\[note: 423\]](#Ftn_423)

274    The exact cause of the May 2013 failures was not known in their immediate aftermath, with the above causal chain only being established after subsequent internal investigations by GSS and Arup.[\[note: 424\]](#Ftn_424) GSS obtained advice on measures that could be taken to deal with the above issues and eventually modified the STSs’ software at a cost of $54,493.60 to “desensitise” the STSs and thereby provide the DRUPS units with the opportunity to engage and pick up any load if power disturbances recurred. The software was developed by the manufacturer of the STSs (Cyberex), with supply, installation and T&C done by Technology Recovery & Development (S) Pte Ltd (“TRADS”).[\[note: 425\]](#Ftn_425)

275    Before leaving the discussion on the cause of the May 2013 failures, I deal briefly with what appears to be an alternative explanation advanced by Mr Hamer. According to Mr Hamer, the voltage dip caused the DRUPS to engage. The transfer of the load to the DRUPS resulted in a slight deviation in the frequency of the DRUPS’s output power. Because this deviation in frequency fell outside the STSs’ parameters, the STSs mistook this frequency deviation as a fault and transferred the IT Load from the Preferred Source (_ie_, the DRUPS), to the Alternative Source (_ie_, the SUPS), thereby overloading the SUPS.[\[note: 426\]](#Ftn_426)

276    The key difference between Mr Hamer’s explanation and the one I have accepted is whether the STSs were reacting to a deviation in frequency _of the DRUPS’s output electricity_ (after the DRUPS units engaged), or a frequency anomaly _in the mains_ (that passed through the DRUPS units but was interpreted by the STSs as a frequency disturbance in the DRUPS units’ output supply). I do not accept Mr Hamer’s explanation and prefer the evidence of the expert witnesses and Mr Martin. As I have found, the problem lies in the DRUPS units _not_ being able to engage in time before the STSs effected the transfer. Further, Mr Hamer’s view was proffered after conducting his tests in the aftermath of the May 2013 failures,[\[note: 427\]](#Ftn_427) rather than through a study of the contemporaneous records available. This means his conclusion is premised on the assumption that the test scenarios he conducted accurately replicated the sequence of events on those two occasions. During their testimony, the experts agreed that Mr Hamer’s tests were “in no way really relevant to the frequency events of 2 and 18 May”.[\[note: 428\]](#Ftn_428) Although Mr Hamer’s test did not shed any light on the cause of the May 2013 failures, it did nevertheless expose a problem with the pairing of the DRUPS system with STSs. This is because it highlighted another situation where the STSs were unnecessarily transferring from their Preferred Source to Alternative Source.

### T&C of the Extension

277    Arup’s Fee Proposal includes “Witness testing and commissioning” under the proposed “Scope of Works”.[\[note: 429\]](#Ftn_429) GSS’s Purchase Order, on the other hand, includes “Testing & Commissioning” under the column “Services/Goods Description”.[\[note: 430\]](#Ftn_430) Fine theoretical questions can arise as to whether that can be a true acceptance of Arup’s offer, but apart from some tentative throw-away statements of GSS’s Purchase Order being a “counter offer”, neither party ventured to take that further. It is common ground that the Fee Proposal and the Purchase Order constitute the Contract between the parties.

278    The parties’ evidence and submissions on this issue ran far afield from their pleaded cases. For instance, GSS claims in its closing submissions that Arup was obliged to witness all stages of the T&C and failed to do so, despite not having pleaded any particulars of breach in this regard.[\[note: 431\]](#Ftn_431) Similarly, Arup claims that it had advised GSS to conduct the bypass test but GSS had failed to heed its advice, even though in its defence Arup had only issued a blanket denial of any obligation to ensure that proper T&C was conducted.[\[note: 432\]](#Ftn_432) It comes as no surprise that each side has accused the other of putting forward evidence, conducting cross-examination and making submissions that are not pleaded.

279    Notwithstanding the state of the pleaded cases, I will assess the evidence and make my findings of fact following the approach outlined at \[47\]–\[49\] above. Not only have the factual and expert witnesses spent much time on this, including in their AEICSs, the question of T&C of the Extension is also covered in the agreed list of issues (see \[284\] below) and intertwined with important factual issues relating to the Revised Design, which are integral to the resolution of the claims in this suit. These include the cause of the May 2013 failures; whether the STSs and/or their coordination with the DRUPS was a problem; whether Arup should have known this and/or was negligent; whether Arup was asked to take over the testing scripts (and related to this, Arup’s counterclaim for extra fees); and whether a bypass test would have flagged a problem between the STSs and DRUPS and if so, whether Arup should have reported the problem back to GSS.

280    GSS pleaded that it was an express or alternatively an implied term of the Contract that Arup was obliged to ensure adequate T&C of the M&E system.[\[note: 433\]](#Ftn_433) It claims that Arup breached this duty and particularises what it alleges Arup should have done as follows:[\[note: 434\]](#Ftn_434)

(a)     ensuring that the Revised Design was tested at full load in order to test the performance of the electrical system, which was to cater for a total electrical load of 4,000kW for all five floors – Arup failed to do so and its T&C design only provided testing of L3 and L4 at a load of 800 kW each;

(b)     ensuring that the coordination between the STSs, SUPS units and DRUPS units were sufficiently tested; and

(c)     advising on the necessary test scenarios that should be conducted and/or failing to ensure that the necessary tests were duly conducted on the Revised Design of the DRUPS; GSS then further particularised some of the further tests that should have been done (see \[60\]–\[61\] above).

I have already pointed out the requirements of a party pleading an implied term pursuant to _Sembcorp_. Needless to say this has not been complied with.

281    In its closing submissions GSS crystallises the gravamen of its complaint as follows:

(a)     Arup failed to advise and ensure the performance of essential tests for the successful coordination of the Revised Design, in particular, the bypass test. That test involves a manual bypass back to source on no load and repeating the test on full load, and was the one that Mr Hamer performed after the May 2013 failures. The test alerted Mr Hamer to an out-of-frequency condition that had occurred during the May 2013 failures, and how the STSs transferred due to the DRUPS. The bypass test would also have provided Arup with an additional opportunity to discover the frequency issue in the Revised Design. Both experts agreed that a reasonably competent consultant should have recommended the bypass test, and that this was part of the standard basic tests of the T&C procedure.[\[note: 435\]](#Ftn_435)

(b)     Arup failed to test the suitability of Global Switch’s Sydney data centre’s set-points (“the Sydney set-points”) for the STSs in the Extension. Arup had assumed that the Sydney set-points would allow the Revised Design to function as intended.[\[note: 436\]](#Ftn_436)

(c)     The only tests performed by Arup were inadequate, these being:

(i)       a factory acceptance test (“FAT”) of the DRUPS without the STS;

(ii)       a FAT for the STS at the factory’s default set-points without the DRUPS; and

(iii)       a test of the STSs on L3 and L4 of the Extension on no load with the DRUPS after the Phase 1 Integrated Systems Test (“IST”) on the ground that the STSs had been tested on full load during their FAT. GSS alleges that this was inadequate because the L3 and L4 testing could not be done on no load just because the FAT was done on load, as the FAT was conducted on a passive load and without the STSs; it therefore did not go to testing the set-points. All the L3 and L4 testing on no load did was to prove that the STSs were wired up correctly. It was important to test the DRUPS and STSs connected on full load to test the appropriateness of the Revised Design.[\[note: 437\]](#Ftn_437)

(d)     Arup omitted to include a transfer inhibit blocking system in the Revised Design which would have prevented the overloading of the SUPS, and instead knowingly failed to deal with the risk of multiple transfers on the SUPS. The transfer inhibit blocking system would not have prevented the May 2013 failures completely, but would have prevented further transfers of IT Load onto the SUPS units once the “+1” capacity was exhausted, so that at least the IT equipment connected to the remaining functioning DRUPS unit and SUPS units would have been protected.[\[note: 438\]](#Ftn_438)

282    Arup’s defence is that it was only obliged to _witness_ T&C and not to ensure adequate T&C of the M&E system.[\[note: 439\]](#Ftn_439) In its closing submissions, it elaborates that ensuring proper T&C is different from following up on T&C since the latter includes ensuring that all issues are resolved if the T&C shows something unsatisfactory.[\[note: 440\]](#Ftn_440) That would be the responsibility of the main contractor Gammon, or Commtech Asia (Singapore) Pte Ltd (“Commtech”), the independent T&C agent engaged by GSS.[\[note: 441\]](#Ftn_441) In any event it would be unreasonable to expect Arup to conduct testing specifically to identify frequency intolerance.[\[note: 442\]](#Ftn_442)

283    In relation to the bypass test, Arup alleges that it had in fact recommended that the bypass test be carried out on the DRUPS units and STSs on full load. GSS was the one who opted not to proceed with carrying out this test because:

(a)     in respect of Phase 1 of T&C, the tight timelines meant that IST was carried out before the STSs were installed; and

(b)     in relation to Phase 2 of T&C, GSS had decided against carrying out IST on L5 to L7 because it was concerned by costs and the risk to Microsoft (which had already moved in).[\[note: 443\]](#Ftn_443)

Arup also alleges that following previous failures of the STSs in the Existing Facility, it had pointed out to GSS in February 2008 that the frequency settings should be adjusted.[\[note: 444\]](#Ftn_444)

284    The discussion here relates to the agreed issue of what Arup’s obligations to GSS under the Contract were with respect to T&C of the M&E system.

#### Arup’s obligations to GSS with respect to T&C of the M&E system

285    Arup correctly points out that the drawing-up of the protocols or test scripts for the T&C and the T&C itself were originally to be carried out by the main contractor Gammon, and not Arup. Further, GSS engaged Commtech as an independent commissioning agent and to verify the Project’s T&C.[\[note: 445\]](#Ftn_445) Mr Ansett acknowledged this. [\[note: 446\]](#Ftn_446)

286    The evidence shows that Gammon was in substantial delay in producing the T&C programme and test scripts. When Gammon eventually produced them, they were found wanting.[\[note: 447\]](#Ftn_447) Sometime in July or August 2010, Arup was asked by GSS to and did take over Gammon’s obligations to prepare the Phase 1 IST scripts (and this forms Arup’s claim in SCN 007/Rev(2) for this additional work).

287    It is undisputed that Arup was involved in _witnessing_ the FATs for various M&E equipment, including the EuroDiesel DRUPS units,[\[note: 448\]](#Ftn_448) and the STSs manufactured by Cyberex.[\[note: 449\]](#Ftn_449) However, I find that once Arup agreed to take over Gammon’s obligations to write the test scripts for the Phase 1 IST and coupled with its obligations to witness the T&C of their M&E system under their Contract with GSS, it was incumbent on Arup to _review_ the tests to be carried out and the test protocols (_ie_, procedures), to ensure that the Revised Design worked and fulfilled the functions it was designed to do. Both Mr Ansett and Mr Peck were agreed on this and I accept their evidence.[\[note: 450\]](#Ftn_450)

288    I also find that after witnessing the T&C, as was accepted by both Mr Ansett and Mr Peck, Arup had to receive the completed test sheets and satisfy itself that the submitted test sheets reflect what was actually done and achieved. If there were any shortcomings or defects discovered or errors revealed, Arup would have to notify GSS or the designated consultants like AWP or T&T, and this would include relevant suppliers or companies directly involved in the supply and/or erection of the M&E work. Indeed, Arup’s position that it was required to only witness T&C without doing anything more is contradicted by what it actually did, as stated in its Scope Change Notification dated 12 August 2010.[\[note: 451\]](#Ftn_451) That document details that following several instructions and requests of GSS in May 2010, “Arup undertook…and prepared the following key project documents … _Supervision_ during testing and commissioning (IST)” \[emphasis added\].

289    I pause here to briefly deal with GSS’s claim that Arup had breached its obligation to witness all stages of T&C.[\[note: 452\]](#Ftn_452) Nowhere in GSS’s pleadings did it allege that Arup had breached its obligations to witness _all_ stages of T&C. Instead, GSS’s claims on the issue of T&C focused solely on whether the _Revised Design_ had been sufficiently and properly tested.[\[note: 453\]](#Ftn_453) While I note that GSS did plead, in its Reply and Defence to Counterclaim, that Arup was under an obligation to witness the T&C of the Extension’s M&E system generally, this was not accompanied by any allegations or particulars of breach.[\[note: 454\]](#Ftn_454) The first time that this new claim arose was in GSS’s opening statement.[\[note: 455\]](#Ftn_455) In my view, allowing GSS to proceed on this point would cause prejudice to Arup because it did not have the opportunity to adduce sufficient evidence from its factual witnesses on this issue, given the lateness of this claim. I shall therefore say no more on this.

290    Peripherally, Mr Adcock was cross-examined on the lack of signatures on several T&C checklists.[\[note: 456\]](#Ftn_456) Counsel for GSS had sought to make the point that the signatures were missing because Arup did not witness T&C for those components and dates,[\[note: 457\]](#Ftn_457) and also took issue with the fact that some of Arup’s signatures post-dated the dates of actual testing.[\[note: 458\]](#Ftn_458) But too much cannot be made of this. As Mr Adcock pointed out, it would be “\[p\]hysically impossible” to actually witness the T&C of _all_ the items set out in these checklists.[\[note: 459\]](#Ftn_459) The tests were numerous, and the components to be tested were in various locations.[\[note: 460\]](#Ftn_460) To have 100 percent witnessing of T&C would require the hiring of an independent commissioning agent.[\[note: 461\]](#Ftn_461) As previously noted (at \[282\]), GSS itself had hired Commtech as an independent T&C agent.

#### Whether Arup breached its duty to ensure the coordination between the STSs, SUPS units and DRUPS units were sufficiently tested – the bypass test

291    The key issues are whether Arup had recommended performing the bypass test, and whether the bypass test was in fact performed, at any point during T&C.

292    The experts were agreed,[\[note: 462\]](#Ftn_462) and both parties accept, that if the bypass test had been conducted, the coordination problem would have been discovered.[\[note: 463\]](#Ftn_463) I find that the term “coordination problem” means the following:

(a)     that the STSs, if not properly configured, have a propensity to mistake harmless voltage/frequency disruptions from the mains as a fault, thereby unnecessarily causing the DRUPS units to transfer to Alternative Source; and

(b)     that the STSs, if not properly configured, have a propensity to mistake the frequency deviation caused by the DRUPS units engaging as a fault, thereby unnecessarily causing them to transfer to the Alternative Source.

The bypass test involves manually forcing the DRUPS units to transfer from normal mode into bypass mode and back again under full electrical load. I find that transferring the DRUPS units from normal to bypass mode would generate a phase shift,[\[note: 464\]](#Ftn_464) which is sufficiently large and analogous for testing purposes to the phase angle jump that a vector jump entails (see \[270\] above),[\[note: 465\]](#Ftn_465) albeit that the actual events of May 2013 were “a lot messier” because they involved a voltage dip in addition to a vector jump in the mains supply.[\[note: 466\]](#Ftn_466) Therefore, while the _reason_ for the STSs initiating a transfer would differ for the May 2013 failures and the bypass test, the _result_ would be the same in that the STSs would identify a frequency anomaly and react by transferring from their Preferred Source to their Alternative Source. The bypass test would therefore have alerted Arup to the problem because the STSs are not meant to initiate a transfer under such conditions.[\[note: 467\]](#Ftn_467)

##### Phase 1 of T&C

293    The Extension’s completion was split into two phases because of the tight timelines for construction and handover dates to Microsoft, and the T&C of the Extension was also split into the same two phases. There is no suggestion that Arup was in any way responsible for this. I find that this was a decision of GSS and its other project consultants and not Arup. The first phase (“Phase 1”) involved the completion and handing over of L3 and L4 of the Extension in September 2010. T&C of L3 and L4 of the Extension took place during Phase 1. The second phase (“Phase 2”) involved the completion and handing over of the Extension’s remaining L5 to L7 on 1 January 2011, 1 July 2011 and 1 January 2012. T&C of L5 to L7 of the Extension took place in Phase 2.

294    The T&C for Phase 1 was conducted on 14 and 15 August 2010.[\[note: 468\]](#Ftn_468) An IST was to be carried out during this phase; an IST involved the highest level of T&C whereby the entire data centre would be tested under design conditions including normal, emergency and fault modes.[\[note: 469\]](#Ftn_469) Arup was involved in drafting and producing the T&C documents, as well as the test scripts for this phase.[\[note: 470\]](#Ftn_470) Among other things, the T&C documents and test scripts addressed the necessary test scenarios for the DRUPS system and the Revised Design.

295    While it is unclear whether the test scenarios included, specifically, the bypass test, I am prepared to find that a bypass test was actually performed during the Phase 1 IST (though as I explain below this would be immaterial on the facts). First, while that test was never identified by name in the documents, the contemporaneous correspondence does refer to “test\[ing\] the bypass operation”.[\[note: 471\]](#Ftn_471) Secondly, the test scripts describe the test “Black Building Test” that in substance involves the three DRUPS units starting off by operating on the mains and the switch at the main switchboard being opened to start the DRUPS’s diesel engine, before the mains supply is eventually restored after a 30 minute running period.[\[note: 472\]](#Ftn_472) The Black Building Test was eventually performed during Phase 1 IST.[\[note: 473\]](#Ftn_473) Thirdly, Mr Peck gave evidence that the DRUPS were transferred “to and from generator, to and from bypass” during the testing that went on a week or so before 23 August 2010 (though he was not entirely sure of the dates),[\[note: 474\]](#Ftn_474) and he was not challenged on this point.

296    Regardless, it does not matter whether the bypass test was actually performed because the STSs had not been delivered or incorporated into the electrical system at that time. The tests would have proceeded without the STSs incorporated into in the system, and they would therefore be of limited use in highlighting the STSs’ frequency issues.[\[note: 475\]](#Ftn_475) For completeness, I note that there is no evidence as to why the STSs were not delivered in time for Phase 1 of T&C. But since GSS has not sought to blame Arup for this, it is more likely than not that GSS (rather than Arup as M&E consultants) was responsible for making the purchase order, and GSS must have agreed to the handover dates of L3 and L4 to Microsoft, thereby causing a problem in the proper sequence of scheduled activities before handover.

##### The events of 23 August 2010

297    I then come to the testing that took place on 23 August 2010. The 12 STSs on L3 and L4 were installed on 21 August 2010,[\[note: 476\]](#Ftn_476) sometime in between Phase 1 and Phase 2 of T&C. Testing of these units was envisioned by Mr Adcock to take place from 23 to 27 August 2010 with a 30–40 kW load bank,[\[note: 477\]](#Ftn_477) and did take place on 23 August 2010.[\[note: 478\]](#Ftn_478)

298    Again, it is unclear whether the bypass test was part of the battery of tests conducted on 23 August 2010 on the STSs. The contemporaneous correspondence, namely an email from Mr Adcock to (amongst others) Justin Emery of TRADS (“Mr Emery”) dated 18 August 2010 indicates that “\[t\]ransfer to & from DRUPS … to mains for NB load at \[main switchboard\]” and “\[t\]ransfer to & from DRUPS to bypass …” were envisioned to take place on 23 August 2010.[\[note: 479\]](#Ftn_479) However, the experts did not offer any evidence on this and were not asked to comment on this specifically. I therefore make no finding on whether bypass testing was done on this date. But if I had to make a finding, it would be that on balance, the bypass test was carried out.

299    What _is_ clear is that even if the bypass test was actually conducted with the STSs in place on 23 August 2010, the experts were agreed[\[note: 480\]](#Ftn_480) – and I find – that the test would not have revealed the STS’s frequency intolerance. These STSs were not tested under any electrical load at the Extension because by the time the STSs were tested, the load bank had already been returned to the company from which they were hired.[\[note: 481\]](#Ftn_481) It may have been that no one felt the need to bring back the load banks because they had already been tested under full load during their FAT that was conducted off-site.[\[note: 482\]](#Ftn_482) Following from this, Mr Peck took the view that all that the testing on 23 August 2010 would have revealed was that the STSs were “wired up correctly, as in they’re connected up, they power up”.[\[note: 483\]](#Ftn_483) Mr Ansett stated that the tests would not have highlighted the frequency issue, and Mr Peck did not disagree with this.[\[note: 484\]](#Ftn_484)

300    For completeness I outline the correspondence post-testing on 23 August 2010:

(a)     On 23 August 2010, Mr Emery of TRADS emailed Mr Adcock and Mr Guth, among others, to indicate that all the STSs on L3 and L4 of the Extension were “in normal operation with no active alarms present”.[\[note: 485\]](#Ftn_485)

(b)     On 4 September 2010, Mr Adcock prepared a memorandum summarising the results of the T&C for Phase 1.[\[note: 486\]](#Ftn_486) It was stated in the memorandum that all 12 STSs on L3 and L4 of the Extension successfully completed the following tests:

Transfer from Source 1 to Source 2 (Source 1 input circuit breaker opened)\\

Return from Source 2 to Source 1 (automatically after 5 sec delay)

Repeat of the above with Source 2 set as the preferred source.

The memorandum also stated that there was no further action needed with regard to the STSs.

##### Phase 2 of T&C

301    The evidence establishes, and I so find, that the tests _proposed_ by Arup for Phase 2 included the bypass test, and that Arup _did advise_ GSS to conduct the bypass test on full load during Phase 2 of T&C:

(a)     On 18 August 2010, just a few days after Phase 1 of the IST, Mr Adcock sent Mr Paddy and Mr Guth an email containing Arup’s proposed IST test scripts for Phase 2 of T&C for GSS’s review and comment before the scripts were issued to Gammon.[\[note: 487\]](#Ftn_487) Among other things, Mr Adcock stated that the following tests should be conducted with each DRUPS unit loaded at 100%:

Day 2:  Electrical (@ 100% load by using GS load bank for each DRUPS)

i.    Transfer to & from DRUPS (diesel) to mains for NB load at MSB

ii.    Transfer to & from DRUPS to bypass (direct mains) for NB Load at MSB

iii.   Transfer to & from bypass for SB load at MSB

That same day, Mr Paddy replied to Mr Adcock’s email, stating that the test scripts looked fine to him, and asked for the latter’s estimate on the anticipated date of Phase 2 of T&C.[\[note: 488\]](#Ftn_488) Mr Adcock then forwarded the test scripts to representatives from Gammon, stating that the scripts have been approved by GSS.[\[note: 489\]](#Ftn_489) Both Mr Paddy and Mr Guth were copied in this email.

(b)     On 3 September 2010, Mr Adcock wrote to Mr Guth stating that:[\[note: 490\]](#Ftn_490)

Arup’s Conclusion;

A 2nd IST is required prior to phase-2 handover, to ensure phase-2 (full load) system parameters are set, tested and operational.

Mr Peck testified that the tests Mr Adcock was referring to included testing the DRUPS units at full load and turning them to bypass mode while it was connected to the SUPS units and STSs.[\[note: 491\]](#Ftn_491) Counsel for Arup submitted that this essentially referred to the bypass test,[\[note: 492\]](#Ftn_492) and I accept that view (notwithstanding that it did not form part of Mr Peck’s expert report) given that Mr Peck’s oral evidence was not challenged.

302    However, I find that GSS declined to follow Arup’s recommendation because GSS considered it too risky to carry out the test with a live customer, namely Microsoft, already occupying L3 and L4. This is supported by the evidence:

(a)     Because Microsoft had already moved into L3 and L4 of the Extension by the time Phase 2 of T&C was to be carried out, GSS was keen to ensure that any adverse impact arising from the T&C process would not affect Microsoft’s equipment. To this end, GSS requested that Arup assess and propose measures to isolate L3 and L4 of the Extension during Phase 2 of T&C. Arup circulated a draft memorandum dated 24 August 2010 (“Arup’s 24 August 2010 memo”) containing its proposed measures for GSS’s review.[\[note: 493\]](#Ftn_493) In paragraph 1 of the memorandum, Arup recommended that:

1.    Following the successful completion of the testing and commissioning of the L3 & L4 STS units, it is now possible to transfer any Microsoft loads to the alternative source (i.e. existing Static UPS systems on L4 & L5) and this will provided totally \[_sic_\] isolation from the DRUPS testing. This does mean that the ‘+1’ redundancy will be unavailable for the duration of the testing.

(b)     This elicited the following responses from the GSS team:

(i)       Mr O’Brien stated that he had concerns over the lack of redundancy during testing as Arup had proposed transferring the entire IT Load of L3 and L4 to the SUPS units in the Existing Facility (_ie_, the backup source);[\[note: 494\]](#Ftn_494)

(ii)       Mr Gudijanto also expressed some hesitation with transferring the entire IT Load of L3 and L4 onto the Existing Facility’s SUPS, and he took the position that the project team cannot take all three DRUPS units offline at the same time. He also stated that the system was not designed to have two DRUPS units offline simultaneously.[\[note: 495\]](#Ftn_495)

(c)     These comments were forwarded to Mr Adcock, who was asked to respond to them in his revised draft memorandum.[\[note: 496\]](#Ftn_496) Arup eventually sent its revised memorandum to GSS on 30 August 2010 (“Arup’s 30 August 2010 memo”), which, among other things, amended paragraph 1 of Arup’s 24 August 2010 memo. Paragraph 1 of Arup’s 30 August 2010 memorandum stated that:

1.    Following the successful completion of the testing and commissioning of the L3 & L4 STS units, it is now possible to change the preferred source and transfer any Microsoft loads to the alternative source (i.e. existing Static UPS systems on L4 & L5) and this will provided totally \[_sic_\] isolation from the DRUPS testing. _However, the ‘+1’ redundancy will be maintained for the duration of the testing, i.e. if required, the load can return to DRUPS._ \[emphasis added\]

(d)     Before the execution of Phase 2 of the T&C, Gammon had also raised a potential claim for the cost of a second IST as their contract with GSS only provided for one IST, which in Gammon’s view, was carried out in Phase 1.[\[note: 497\]](#Ftn_497) Arup responded to this by informing GSS that a second IST was required to ensure that “phase-2 (full load) system parameters are set, tested and operational”.[\[note: 498\]](#Ftn_498) Thus, Arup stated that Gammon needed to ensure that the Extension was operating under full load conditions during Phase 2 of T&C. However, Arup’s suggestion for a second IST was met with a warning from T&T that additional cost would have to be incurred.[\[note: 499\]](#Ftn_499)

(e)     On 6 September 2010, Mr Guth clarified things by saying that “all that will happen is floor based testing & commissioning @ 100% loads to confirm that equipment performs as designed and required”. He also added that “\[t\]here is no IST so to speak, as it will not involve the same scenarios as phase 1 IST works did”.[\[note: 500\]](#Ftn_500)

(f)     Mr Guth accepted in cross-examination that GSS would not have undertaken Arup’s recommended course of action (_ie_, to conduct a bypass test on full load during Phase 2 of T&C) because of its desire to avoid any risk of damage to Microsoft, which was operating out of L3 and L4 by that time.[\[note: 501\]](#Ftn_501)

(g)     Phase 2 of T&C was eventually carried out sometime in or after September 2010. No significant faults were reported, and the entire Extension was eventually handed over to Microsoft by 1 January 2012 (see \[42\] above).

303    Accordingly, it was GSS who declined to proceed with another IST, including the bypass test, for Phase 2 of T&C and I find that Arup did not breach its duty to ensure that the coordination between the STSs, DRUPS units and SUPS units were sufficiently tested. While a question might arise as to whether Arup should have warned GSS of the risks of not proceeding with the bypass test, I find that any warning would be (at the very least) implicit in the fact that Arup had emphasised that the test was necessary in the first place.

### Whether Arup failed to ensure that the Revised Design provided a continuous supply of power

304    I have already dealt with the issue of whether Arup failed to ensure the adequate _testing_ of the coordination of the STSs, SUPS units and DRUPS units. GSS also pleaded that Arup’s Revised Design was _itself_ defective (leaving aside the question of testing for defects) because the DRUPS units and STSs were not properly coordinated.[\[note: 502\]](#Ftn_502) Due to this lack of coordination, more than one DRUPS units’ electrical load was transferred to the SUPS units directly when the main power supply became unstable.[\[note: 503\]](#Ftn_503) GSS alleges that this did not achieve the “N” capacity required and was unable to sustain the “N+1” configuration required.[\[note: 504\]](#Ftn_504)

305    Arup pleaded that GSS was aware at all times of the limits of the Revised Design, including the inability of the Revised Design to cater to a vector jump or frequency shift in the power supply, which is not a common power disruption.[\[note: 505\]](#Ftn_505) Arup further alleged that the STSs had an intolerance issue (this being the frequency tolerance band within which the STS operated[\[note: 506\]](#Ftn_506)) but that GSS was familiar with the specifications of the STSs, as similar STSs were installed in the Existing Facility. Additionally, previous power disruptions in the Extension would have revealed to GSS the need to investigate and re-calibrate the STSs.[\[note: 507\]](#Ftn_507) Arup claimed that it had in February 2008 pointed out to GSS that the frequency settings of the STSs should be adjusted.[\[note: 508\]](#Ftn_508) The Revised Design was also an “N+1” concurrently maintainable system, in line with a Tier III Uptime Data Centre classification.[\[note: 509\]](#Ftn_509)

306    While the pleadings were somewhat vague, the issues arising from the above appear to be:

(a)     whether Arup should have known of or anticipated the STSs’ susceptibility to misidentifying the frequency shift that occurs when the DRUPS units are engaged (see \[292\] above) as a fault, and therefore switching from the Preferred Source to the Alternative Source;

(b)     whether Arup should have known of or anticipated the STSs’ susceptibility to misidentifying vector jumps in the mains as frequency disturbances in the DRUPS units’ output supply (as happened during the May 2013 failures – see \[273\] above) , and therefore switching from the Preferred Source to the Alternative Source;

(c)     whether Arup should have known of or anticipated the risk of the STSs transferring more than one DRUPS unit’s load to the SUPS units; and

(d)     if the answer to any of the above is yes, then what Arup should have done.

307    I preface the discussion with the observation that GSS’s reference to “N+1” redundancy in this context does not reflect the gravamen of its complaint,[\[note: 510\]](#Ftn_510) which is that regardless of the level of backup provided in the Revised Design, the fact remains that the STSs should not have transferred from the Preferred Source to Alternative Source in the circumstances identified. If they had not transferred, the SUPS units would not have been overloaded.

#### Arup’s state of knowledge about potential issues arising from the use of STSs

308    In relation to the issue identified at \[306(a)\] above, the experts agreed that pairing DRUPS units with STSs was something that engineers would know to require careful thought.[\[note: 511\]](#Ftn_511) But the experts did not go so far as to say that this was something too risky to be done; indeed such a pairing was done in GSS’s Sydney facility. I find that being “careful” in this context simply means that Arup should have thought through the processes involved, as well as carried out proper T&C of any proposed system with a DRUPS unit and STS pairing, to acquire the necessary knowledge or understanding about whether there was a problem with that system. As I found above, the means of detecting this issue would be to carry out a bypass test – but the failure to carry out the bypass test (properly or at all) is not attributable to Arup.

309    In relation to \[306(b)\], Mr Ansett stated a vector jump was a “fairly unusual event, but it happens”.[\[note: 512\]](#Ftn_512) In similar vein, Mr Peck stated that these were “unusual” frequency shifts.[\[note: 513\]](#Ftn_513) I note however that neither expert identified these as events as ones that were unlikely to happen – simply that they were not to be expected as run-of-the-mill. Indeed Mr Ansett also stated in his report that the power disturbances of May 2013 were “typical power disturbances” that would occur “in the usual course of events”, that any data centre should have protected against.[\[note: 514\]](#Ftn_514) I therefore find that Arup should have known of the STSs’ susceptibility to misidentifying vector jumps in the mains as frequency disturbances in the DRUPS units’ output supply.

310    In relation to \[306(c)\], I find that Arup did know of the risk of multiple transfers. First, Mr Adcock had accepted this proposition when it was put to him during cross examination:[\[note: 515\]](#Ftn_515)

Q:Let me move on to a different point. Mr Adcock, I believe in respect of the revised design that you have provided to Global Switch, that you have actually identified that there is a risk of the load of more than one DRUPS transferring to the SUPS, yes?

A:Yes.

311    Second, the documents also show that Arup did in fact know of transfer inhibitors as a potential solution to the risk of multiple transfers in 2010:

(a)     In a memorandum dated 11 June 2010, Mr Adcock had recommended the following:[\[note: 516\]](#Ftn_516)

Control wiring between each group of ASTS units – to lock out the other two from transferring after the first has transferred – will be provided, i.e. to protect from the extremely unlikely event of multiple DRUPS failures impacting on the Static UPS systems. Whether the alternative (+1) supply is from either the Static UPS system or a 4th DRUPS, this control wiring would be recommended.

(b)     On 30 July 2010, Mr Adcock had written to TRADS’s Mr Emery to enquire whether such a control wiring mechanism would have prevented more than one STS from transferring to their Alternative Source.[\[note: 517\]](#Ftn_517) Mr Emery had responded to say that he had to check with the STSs manufacturers (Cyberex) to confirm whether this was indeed the case.[\[note: 518\]](#Ftn_518)

312    It appears that the question of multiple transfer inhibitors was raised but there was simply insufficient follow-up. On 6 August 2010, Mr Emery informed Mr Adcock that Cyberex was looking into the feature which the latter had referred to in his 30 July 2010 email, and that he was personally convinced that the feature was meant to stop the STSs from returning to their Preferred Source after a transfer, rather than to inhibit a transfer in the first place.[\[note: 519\]](#Ftn_519) Mr Adcock accepted that the control wiring was eventually not installed, nor was there any follow-up on a similar mechanism.[\[note: 520\]](#Ftn_520) That said, the lack of follow-up might possibly be attributable to Mr Emery’s initial answer and/or the tight timelines that Arup was under due to the knock-on effects of GSS’s contract with Microsoft. I therefore proceed on the basis that Arup knew of the risk of multiple transfers and the use of multiple transfer inhibitors as a potential solution. I will return to the question of what Arup could have done to prevent multiple transfers from occurring.

313    Given my findings above on what Arup should reasonably have known, I proceed to examine what measures it should have taken (and if any usch measures were indeed available). The measures identified were:

(a)     the proper configuration of the STSs’ setpoints, and the use of delay transfer timers, in relation to the issue at \[306(b)\] above (though I note these same solutions would have applied to the issue at \[306(a)\]); and

(b)     the use of multiple transfer inhibitors, in relation to the issue at \[306(c)\] above.

#### Whether Arup was under a duty to, and if so whether it failed to, properly configure the STS set-points such as to prevent the May 2013 failures

314    I note that during the trial a dispute arose over whether the set-points installed in the STSs during T&C, which both parties agreed were the same as the Sydney set-points,[\[note: 521\]](#Ftn_521) were the same set-points installed in the STSs during the May 2013 failures.[\[note: 522\]](#Ftn_522) This dispute arose as a result of an observation by Mr Peck in his expert report that the STSs set-points might have been reconfigured after T&C in 2010, but before the May 2013 failures.[\[note: 523\]](#Ftn_523)

315    However, Arup did not pursue this line of argument in its closing submissions, and I take this to mean that this is no longer part of Arup’s case. In any case, I would not have allowed Arup to pursue the allegation that GSS had changed the STSs’ set-point settings after T&C was carried out in 2010 because these facts were not pleaded. Allowing Arup to raise this argument at this late stage would cause prejudice to GSS because GSS would have been deprived of the opportunity to adduce evidence as to what the Sydney set-points were, and whether the STSs installed during the May 2013 failures were different. As it stands, there is no evidence from the factual witnesses as to what the Sydney set-points were.

316    I shall therefore proceed on the basis that the STSs set-points at the time of the May 2013 failures were the same as those installed at the time of T&C in 2010 (_ie_, the Sydney set-points).

317    According to Mr Ansett, the idea that one could take the Sydney set-points just because they were used for a different DRUPS system and STS pair and transplant them to Singapore was a “folly road” because even devices from the same manufacturer, being handmade, have different characteristics.[\[note: 524\]](#Ftn_524) Further, Arup would not have known that the Sydney settings were right just because the system had not failed yet.[\[note: 525\]](#Ftn_525)

318    Mr Peck agreed that Arup should have been cautious when pairing the DRUPS units with STSs.[\[note: 526\]](#Ftn_526) He also agreed that the Sydney set-points were inappropriate for the Extension as their “frequency band \[was\] too narrow, and the response time of the voltage \[was\] too quick”.[\[note: 527\]](#Ftn_527) Nevertheless, he thought that Arup had reasonable grounds to believe that the Sydney set-points would work, _on the assumption that the system would subsequently be tested_ to ensure that the set-points were indeed appropriate.[\[note: 528\]](#Ftn_528) While he did mention that he had never heard of problems at Global Switch’s Sydney facility, he recognised that this is only anecdotal.[\[note: 529\]](#Ftn_529)

319    I find that Arup did not provide any advice to GSS as to the suitability, or unsuitability, of the Sydney set-points, despite Arup’s claims in its further and better particulars that: (a) following previous failure of the STSs in the Existing Facility it had pointed out to GSS in February 2008 that the frequency settings of the STSs should be adjusted,[\[note: 530\]](#Ftn_530) and (b) that there were previous power disturbances due to incorrect STS settings (arising from either voltage or frequency intolerance) which would have been averted if the settings had been correct.[\[note: 531\]](#Ftn_531)

320    In relation to point (a) there is an email from Mr Adcock to Mr Gudijanto in February 2008 where the STSs in the Existing Facility are discussed.[\[note: 532\]](#Ftn_532) However, Arup did not seriously pursue this line of argument at trial or in its closing submissions, and it can therefore be taken to have abandoned it. In relation to (b), the parties appear to have agreed that there were power disruption events that occurred up to and on 29 April 2013.[\[note: 533\]](#Ftn_533) But Arup again did not seriously pursue this argument in its closing submissions, nor did it do so during the trial.

321    Although I have found that Arup did not advise GSS on the suitability of the Sydney set-points, it does not follow from that fact – or indeed, even the fact that the set-points were ultimately unsuitable – that Arup breached any duties. Even if Arup had proceeded on the basis that the settings were fine for Sydney and would therefore be fine for the Extension, it would have discovered the problem but for GSS’s interference with the conduct of the bypass test (as I have found above). Accordingly, Arup was not in breach of its duties and was not negligent in failing to realise that the STSs posed a problem.

#### Whether Arup was under a duty to, and if so whether it failed to, recommend or implement transfer inhibitors in the Revised Design such as to prevent the May 2013 failures

322    Apart from ensuring that the STSs were configured with the appropriate set-points, GSS also claims that Arup should have recommended or implemented transfer inhibitors in the Revised Design to ensure that the STSs would not:

(a)     unnecessarily transfer the Extension’s load from the DRUPS units to the SUPS units during harmless transient frequency events; and/or

(b)     transfer more than one DRUPS unit’s load onto the SUPS units (which I shall hereinafter refer to as “multiple transfers”).

323    GSS has not, in its pleadings, specifically referred to the solution that Arup should have implemented to deal with these problems. Instead, it only makes a broad and vague allegation that the Revised Design “was defective and was not fit for its intended purpose because \[Arup\] failed and/or neglected to ensure that the DRUPS units and STS were properly coordinated”.[\[note: 534\]](#Ftn_534) At trial, however, GSS sought to propose various measures that Arup could have taken to deal with the issues mentioned at \[309\].[\[note: 535\]](#Ftn_535) In my view, it is entirely unsatisfactory for GSS to have simply alleged in its pleadings that Arup should have done something, without being specific about the measures that should have been taken. I note Arup’s objection that the transfer inhibit blocking mechanism solution was unpleaded.[\[note: 536\]](#Ftn_536) Having said that, it would have been open to Arup to pursue further and better particulars for this allegation or at least to invite GSS to provide particulars, failing which Arup would object to any positive case at trial based on particulars which could have been furnished. I also note these points were canvassed in the Joint Expert Report and the parties’ experts had an opportunity to reply at trial.[\[note: 537\]](#Ftn_537) I therefore proceed to consider whether Arup had breached its obligations by failing to recommend or implement the measures proposed by GSS. These measures fall into two categories:

(a)     first, an 8-millisecond delay transfer timer, which would essentially force the STSs to ignore transient electrical events which do not last longer than a pre-defined duration;[\[note: 538\]](#Ftn_538)

(b)     secondly, two kinds of multiple transfer inhibitors namely a multiple transfer inhibitor that Mr Ansett proposed in his expert report which would prevent multiple transfers;[\[note: 539\]](#Ftn_539) or a control wiring of the type that Arup had enquired about in August 2010 which would prevent multiple transfers.[\[note: 540\]](#Ftn_540)

The distinction between a delay transfer timer and a multiple transfer inhibitor is this: a delay timer would prevent all STSs from switching from their Preferred Source to the Alternative Source for a pre-defined duration, while a multiple transfer inhibitor prevents more than one DRUPS unit’s load from being transferred onto the SUPS units (rather than preventing the STSs from switching to the Alternative Source from the start).

324    GSS contends that but for Arup’s failure to recommend or implement these measures, the damages caused by the May 2013 failures would have been prevented.[\[note: 541\]](#Ftn_541) Additionally, GSS also claims that such measures were necessary to protect against the inherent risk of common mode failures (_ie_, situations where more than one electrical component in the Extension’s system gets disrupted).[\[note: 542\]](#Ftn_542) It therefore claims against Arup for the cost of implementing some of these measures post-May 2013.

##### The 8-millisecond delay transfer timer

325    Essentially, such a timer would force the STSs to ignore any frequency event that lasts for 8 milliseconds or less.[\[note: 543\]](#Ftn_543) During this period, all the STSs will not transfer from their Preferred Source to the Alternative Source. This would not endanger the IT equipment in the Extension in any way since the equipment is insensitive to such frequency fluctuations.[\[note: 544\]](#Ftn_544) It is GSS’s case that implementing such a mechanism would have prevented the STSs from transferring the DRUPS units’ load onto the SUPS units in May 2013, thereby preventing the SUPS units from being overloaded.

326    Two sub-issues arise:

(a)     whether it is reasonable to expect Arup to have recommended or implemented such a delay transfer timer in 2010; and

(b)     whether such a measure would have prevented the May 2013 failures.

327    In my view, it was not reasonable for Arup to have been expected to recommend the use of a delay transfer timer in 2010. This is because Mr Peck very much doubted that it would have come into the mind of a reasonably competent electrical engineer to implement a time delay or frequency delay as a first solution, considering where the industry was at that time.[\[note: 545\]](#Ftn_545) He also added that an inhibit timer was not something available on STSs either back in 2010, or at the time of trial.[\[note: 546\]](#Ftn_546) I note that Mr Ansett initially testified that it was “electrical fundamentals” or “basic electrical engineering”.[\[note: 547\]](#Ftn_547) However, when I asked the technical experts about the answer that I would expect if 100 engineers were asked in 2008/2009 about delay timers on STSs, both experts agreed that most of these hypothetical 100 experts would not have thought of using transfer inhibitors.[\[note: 548\]](#Ftn_548)

328    In any case, I also note that the 8-millisecond delay transfer timer proposed by GSS was unavailable at the material time, as Mr Ansett himself has accepted.[\[note: 549\]](#Ftn_549) Further, I note that Mr Peck had also testified that Cyberex has not implemented this inhibit timer even in their newer STS models.[\[note: 550\]](#Ftn_550) This therefore suggests, and I find, that this delay timer was not a known remedial measure in 2010.

329    I also find that this proposed 8-millisecond delay transfer timer would not have prevented the losses caused by the May 2013 failures.

330    As Mr Peck testified, the evidence available did not show that an 8-millisecond delay transfer timer would have prevented the May 2013 failures,[\[note: 551\]](#Ftn_551) because the STS logs suggests that there were frequency disturbances which lasted for more than 10 milliseconds on 2 and 18 May 2013.[\[note: 552\]](#Ftn_552) I accept his evidence. Mr Ansett himself also accepted that there is insufficient evidence to suggest that an 8-millisecond delay transfer timer would have prevented the May 2013 failures.[\[note: 553\]](#Ftn_553) This was because the exact duration of those frequency disruptions are unknown.[\[note: 554\]](#Ftn_554)

331    I note that Mr Ansett did also put forward the belief that an 8-millisecond delay transfer timer would probably have been sufficient to prevent the May 2013 failures since the disruptions were recorded as “vector jumps”, which were almost instantaneous frequency events that lasted for less than 8 milliseconds.[\[note: 555\]](#Ftn_555) However, I reject this explanation on the basis that it is speculative for the following reasons:

(a)     First, this is inconsistent with Mr Ansett’s own concession that he does not know for certain if an 8-millisecond delay transfer timer would have been sufficient to prevent the STSs from transferring their load in May 2013.[\[note: 556\]](#Ftn_556)

(b)     Secondly, the sole basis for Mr Ansett’s opinion that the May 2013 disruptions lasted for less than 8 milliseconds is that the DRUPS units recorded the frequency disruption as a vector jump. However, and as Mr Peck has pointed out, the DRUPS units would only record the first event that passed through its system. Thus, it will not indicate whether there were subsequent frequency disruptions that occurred between the initial event and the 200 milliseconds the DRUPS units take to reset their logs.[\[note: 557\]](#Ftn_557) I note that Mr Ansett did not dispute this.[\[note: 558\]](#Ftn_558)

(c)     Thirdly, Mr Ansett equivocated at trial on how certain he was that an 8 millisecond delay transfer timer would have prevented the May 2013 failures. While initially claiming this was “would have” done so,[\[note: 559\]](#Ftn_559) he later stated it was “highly probable”[\[note: 560\]](#Ftn_560) or “with a high probability”,[\[note: 561\]](#Ftn_561) and subsequently that it was “possible” or “conceivable” that the 8 millisecond delay transfer time “likely would have” prevented the failures.[\[note: 562\]](#Ftn_562)

For these reasons, I find that GSS has not shown that Arup had breached its obligations by failing to recommend or implement an 8 millisecond delay transfer timer. I find that the implementation of this delay transfer timer would not have prevented the May 2013 failures.

332    Independent of whether an 8-millisecond delay transfer timer would have prevented the May 2013 failures, I also find that Arup would not have been in breach of any duty by failing to recommend the implementation of such an transfer inhibitor. This is because such a system was not available at the material time (see \[315\] above).

##### Solutions to deal with the risk of multiple transfers

333    I now turn to analyse whether Arup should have implemented or recommended solutions to deal with the risk of multiple transfers. This raises the following three sub-issues:

(a)     whether an M&E consultant in Arup’s position should have been aware of the problem of multiple transfers;

(b)     whether Arup could have been reasonably expected to recommend or implement the potential solutions proposed by GSS; and

(c)     whether these solutions would have prevented the May 2013 failures.

Arup’s awareness of the risk of multiple transfers and potential solutions

334    As I have found, Arup was aware of the risk that more than one DRUPS unit’s load might be transferred onto the SUPS units (in short, a situation of multiple transfer). The question then is what Arup should have done.

335    GSS contends that Arup should have implemented a transfer inhibitor in its Revised Design, and its failure to do so was negligent. In response to these claims, Arup asserts that none of the proposed solutions would have prevented the May 2013 failures; and it was not required to install these transfer inhibitors because it fell outside of GSS’s requirement that the Extension meet the Uptime Institute’s Tier III standard, which only required the Extension to be concurrently maintainable.

Mr Ansett’s proposed multiple transfer inhibitor

336    In his expert report, Mr Ansett proposed a multiple transfer inhibitor system that would have prevented the STSs from transferring more than one DRUPS unit’s load onto the SUPS units. Basically, the system assigns a priority to the various STSs, such that if those on the higher priority range have already transferred one DRUPS unit’s load onto the SUPS units, then those with lower priority will be inhibited from transferring any further loads onto the SUPS units.[\[note: 563\]](#Ftn_563) According to him, the STSs can perform this task within the 10 millisecond window that is required of them.[\[note: 564\]](#Ftn_564) Indeed, he is confident that the operation time of this entire system will take about the same time as the amount of time required by a single STS to perform its task of determining whether to transfer its load.[\[note: 565\]](#Ftn_565)

337    Mr Peck doubted whether the STSs can indeed perform the task of deciding whether to initiate a transfer of the IT Load within the 10 millisecond window.[\[note: 566\]](#Ftn_566) While he did not doubt the theoretical underpinnings of Mr Ansett’s proposed system, he was unsure whether it was practically workable due to the insurmountable difficulties in testing such a system.[\[note: 567\]](#Ftn_567) This is especially so as we are talking about time frames of milliseconds.

338    In my view, Mr Ansett has not satisfactorily explained how his proposed system can be tested in order to verify that it works in an operational data centre. He was unable to rebut Mr Peck’s criticisms. He agreed that the system was “not the easiest thing to test”.[\[note: 568\]](#Ftn_568) I accept Mr Peck’s view that although he could test it, “\[he\] just can’t prove that it will work when \[he\] do\[es\] it, because \[he\] can’t assemble the test so that it can be done reliably”.[\[note: 569\]](#Ftn_569) He also did not dispute that this system is a novel one that has not been implemented or tested in an operational data centre.[\[note: 570\]](#Ftn_570) Moreover, although Mr Ansett stated in his second expert report that this system could be implemented through upgrading the STSs’ firmware, he did not indicate whether such an upgrade could have been installed by Arup prior to the handover of the Revised Design, although I note in fairness to him that this question was not put to him.

The transfer inhibitor that Arup had discussed with TRADS in 2010

339    TRADS discussed a possible transfer inhibitor (via the use of control wiring) with Arup in 2010 (see \[322\] above), but this can be disposed of briefly. Both experts agree that it is not a feasible solution since it depends on the operation of electrical contacts or electromagnetic relays, which will not react quickly enough to be fit for this purpose.[\[note: 571\]](#Ftn_571)

340    I therefore find that Arup was not in breach of its duties in contract or in tort for failing to advise on the implementation of multiple transfer inhibitors in the Revised Design.

341    To summarise my findings with regard to the coordination of the STSs, DRUPS units, and SUPS units:

(a)     Arup was not in breach of its obligations to ensure that the coordination of the STSs, DRUPS units, and SUPS units was properly tested because it did recommend the bypass test to GSS, but GSS chose not to proceed with it.

(b)     Arup did not fail to properly configure the STS set-points. Even if it had proceeded on the basis that the Sydney set-points were suitable, any problems with those settings would have been discovered, but for GSS’s refusal to conduct the bypass test on full load during Phase 2 of T&C.

(c)     GSS’s proposed solutions regarding transfer inhibitors were either not feasible or unavailable at the material time.

The above suffices to dispose of the parties’ respective cases in this regard. I would however further observe that as a consequence of my finding on the cause of the May 2013 failures:

(d)     Arup would not in any event have been able to configure the set-points such that the STSs ignored the voltage read as frequency deviations that occurred in May 2013, since the extent of the frequency deviations from the _mains_ (as opposed to those arising from the engagement of the DRUPS’s diesel engines) could not have been predicted in advance; and

(e)     GSS cannot show that the implementation of an 8-millisecond delay transfer timer would have prevented the May 2013 failures since the duration of the May 2013 frequency disruptions was not (and could not have been) predicted.

### Short Break Power

342    GSS submits that Arup was under an obligation to ensure that its design delivered sufficient SBP to support the Extension’s Mechanical Load. However, Arup was in breach of this obligation as its Original and Revised Designs only provided the Extension with 1,200 kW of SBP, when the Extension’s Mechanical Load was above that figure.[\[note: 572\]](#Ftn_572) I note that in its pleadings, GSS had contended that the Extension’s Mechanical Load was 1,500 kW.[\[note: 573\]](#Ftn_573) However, in its closing submissions, it had revised this figure downwards to 1,131 kW (based on Mr Peck’s reasoning) or 1,182.4 kW (based on a document submitted to the Building and Construction Authority (“BCA”) (see below at \[337\]) in the alternative.[\[note: 574\]](#Ftn_574)

343    Arup denies that its designs had failed to provide the Extension with SBP to support the Mechanical Load. Instead, it asserts that the Mechanical Load under the Original and Revised Design was less than the 1,200 kW of SBP that both designs could deliver.[\[note: 575\]](#Ftn_575)

344    The discussion on SBP also touches on the agreed issue of what were Arup’s obligations to GSS under the Contract, with respect to the Mechanical Load Requirement.

#### Arup’s contractual obligations in respect of SBP under the Fee Proposal

345    GSS contends that Arup was under an obligation to ensure that its design provided sufficient SBP to the Extension’s Mechanical Load. Although Arup denied that it owed such an obligation in its defence,[\[note: 576\]](#Ftn_576) it did not contest this issue at trial or in its closing submissions.

346    I do not think it can be seriously disputed that Arup’s design had to ensure that the Extension would be able to generate sufficient SBP to support its Mechanical Load. This obligation flowed from the fact that Arup’s design brief, according to Arup (see above at \[18\]), was for the Extension to operate as a self-sustaining facility. In addition, various terms in the Fee Proposal indicate that Arup’s scope of work extended to the design of the Extension’s mechanical systems. These include references to the scope of work being to “\[c\]onfirm the levels of redundancy required for electrical _and mechanical_ plant and distribution systems” and “\[p\]repare single line diagrams for _mechanical_, plumbing and electrical services” \[emphasis added in italics\].[\[note: 577\]](#Ftn_577) These terms impose an obligation on Arup to ensure that its design provided the Extension with sufficient SBP to support the Mechanical Load.

#### The Extension’s Mechanical Load

347    While the experts for both GSS and Arup had their own calculations of the Extension’s Mechanical Load under the Original Design, they subsequently agreed that the Extension’s Mechanical Load was correctly reflected in a document prepared by Arup for submission to the BCA for the purposes of obtaining certification under the BCA’s Green Mark Scheme.[\[note: 578\]](#Ftn_578) This document, which I will refer to as the “Green Mark Document”, summarises the Mechanical Loads of both the Existing Facility and the Extension.[\[note: 579\]](#Ftn_579)

348    The Green Mark Document states the Extension’s Mechanical Load as 1,182.4 kW based on an IT Load of 4,000 kW.[\[note: 580\]](#Ftn_580) It is unclear when this document was actually authored, though both parties do not dispute that the document accurately reflected the Extension’s Mechanical Load under Arup’s Original Design.[\[note: 581\]](#Ftn_581) I therefore find that the Extension’s Mechanical Load under Arup’s Original Design was 1,182.4 kW.

349    GSS asserts that the Extension’s Mechanical Load under Arup’s Revised Design would be higher than its Mechanical Load under the Original Design. However, it has failed to adduce sufficient evidence to support this assertion. Indeed, Mr Ansett himself accepted that the Green Mark Document’s calculation of the Extension’s Mechanical Load was based on an IT Load of 4,000 kW, the same IT Load as Arup’s Revised Design.[\[note: 582\]](#Ftn_582) I also note that although Mr Ansett stated in his expert report that the Extension’s Mechanical Load was 1,500 kW, he subsequently abandoned this conclusion.[\[note: 583\]](#Ftn_583) I therefore find that the Extension’s Mechanical Load under the Revised Design remained at 1,182.4 kW.

#### Whether Arup had breached its contractual obligation to ensure that its designs delivered sufficient SBP to the Extension

350    Since both parties do not dispute that Arup’s designs were able to deliver 1,200 kW of SBP to the Extension,[\[note: 584\]](#Ftn_584) I find that the Arup had discharged its contractual obligation to provide sufficient SBP to the Extension.

#### Whether Arup had breached its duty of care to GSS by failing to ensure that its designs provided an additional 10% of SBP to the Extension

351    GSS also contends that Arup had breached its duty of care as it should have, but failed to, to provide 10% more SBP than what was required. It relies on Mr Ansett’s evidence that Arup should have factored in a 10% buffer when calculating the amount of SBP required for the Extension.[\[note: 585\]](#Ftn_585) Arup objects to this argument on the basis that the requirement for a 10% buffer was not pleaded.[\[note: 586\]](#Ftn_586)

352    I reject GSS’s argument. First, this requirement for an additional 10% buffer was not pleaded by GSS or mentioned anywhere in its opening statement or AEICs. Instead, GSS appears to base this argument on what Mr Ansett said during his oral testimony. I note that Mr Ansett did not even mention the need to factor in a 10% buffer in his expert report. Allowing GSS to rely on this at this late stage would cause prejudice to Arup as its expert would not have had adequate opportunity to consider the issue before taking the stand. While I note that GSS did allege, in its Statement of Claim, that Arup was obliged to provide spare SBP for the Extension,[\[note: 587\]](#Ftn_587) that relates to a wholly different point. Here, GSS is arguing that Arup should have included a 10% buffer when _calculating_ the Extension’s SBP requirements. This is contrasted with its pleadings, which I understand to mean that Arup has to provide additional SBP capacity over and above what the Extension actually needs.

353    Secondly, and even if I were to allow GSS to proceed with this argument, I do not accept Mr Ansett’s evidence that Arup should have factored in a 10% buffer for the following reasons:

(a)     This requirement for a 10% buffer is actually contradicted by Mr Ansett’s conclusions in his expert report, where he stated that the SBP shortfall is derived by simply subtracting the SBP capacity of Arup’s designs from the Extension’s Mechanical Load, without the need to take into account any buffer, as is obvious from the following passage:[\[note: 588\]](#Ftn_588)

The amount of power that is actually required to support the mechanical equipment load based upon site measurement is approximately 1,500kW.

Each DRUPS unit has a short break capacity of 750kVA i.e. 600kW. Collectively the DRUPS are capable of providing only 1,200kW in N+1 configuration. _There is therefore a shortfall of 300kW DRUPS short break capacity._

\[emphasis added\]

(b)     It is unclear whether Arup had factored in a 10% buffer when calculating the Extension’s Mechanical Load in the Green Mark Document, and Mr Ansett agreed that he did not know whether Arup might have done so.[\[note: 589\]](#Ftn_589)

354    I therefore find that Arup was not in breach of its duty of care in relation to providing the Extension with sufficient SBP.

355    For completeness, I note that GSS did not seriously pursue its claim that Arup had breached its obligations by failing to provide for spare SBP capacity to the Extension. I shall therefore say no more on this, save to note again that GSS has not shown how this obligation arose despite the lack of any express term to this effect in the Fee Proposal.

### Cooling capacity

356    I deal here with the agreed issue of what were Arup’s obligations to GSS under the Contract with respect to the cooling load requirement.

#### Whether Arup was under an obligation to ensure that its design provided sufficient cooling for the Extension

357    GSS contends that Arup was under a contractual obligation to produce a design that would deliver sufficient cooling to the Extension to fulfil the Extension’s Cooling Load Requirement. Although Arup initially denied that it was under such an obligation in its defence,[\[note: 590\]](#Ftn_590) it did not contest this issue in its closing submissions where it only addressed the issue of whether its designs did provide sufficient cooling to the Extension.[\[note: 591\]](#Ftn_591) I therefore take it that Arup has abandoned its denial of such an obligation, and rightly so, for in my view Arup’s obligation with regard to cooling is clear on a plain reading of the Fee Proposal.[\[note: 592\]](#Ftn_592) Amongst others the scope of works refers to “a new chilled water system comprising of chillers … located on the roof of the new building”, as well as Arup’s obligations to “\[e\]stablish electrical capacity _and cooling load requirements_ based on power densities and agreed spare capacity for expansion”, and to “\[a\]gree the _method of cooling_ (chilled water, cooling tower water, refrigerant)” \[emphasis added\].

358    Indeed, I also note that Arup’s conduct throughout the Project indicates that it understood that it was under such an obligation. For example, it assigned a mechanical engineer, Mr Ma, as its Lead Mechanical Engineer for the Project, whose role included the design of the Extension’s cooling system.[\[note: 593\]](#Ftn_593) Additionally, Arup had also sent GSS various documents, including a Draft Mechanical Scheme Report detailing its plans for the Extension’s cooling system.[\[note: 594\]](#Ftn_594) I therefore find that Arup was under an obligation to ensure that its design provided sufficient cooling for the Extension.

#### Whether Arup’s designs provided sufficient cooling for the Extension

359    GSS contends that Arup’s designs were unable to deliver sufficient cooling to meet the Extension’s Cooling Load Requirement. Arup did not deny that its initial calculations of the Extension’s Cooling Load Requirement were erroneous. Instead, it sought to suggest that there was no shortfall in any case.

360    I note that in its draft Mechanical Scheme Report for the Extension dated 9 October 2008, Arup had estimated that the Cooling Load Requirement of the Extension was 3,760 kW.[\[note: 595\]](#Ftn_595) Mr Ma agreed that this figure was wrong because it was erroneously assumed that the Air Handling Units (“AHUs”) could provide 200 kW of cooling capacity, when the AHUs could only provide up to 25–30 kW of cooling capacity.[\[note: 596\]](#Ftn_596)

361    Both experts agreed that that Extension’s Cooling Load Requirement was 3,889 kW under Arup’s Original Design and 4,296 kW under Arup’s Revised Design.[\[note: 597\]](#Ftn_597) However, they disagreed on the amount of cooling that Arup’s designs can provide, and their respective calculations are set out in the following table:

<table align="left" cellpadding="0" cellspacing="0" class="Judg-2-tblr" frame="all" pgwide="1"><colgroup><col width="24.7849569913983%"> <col width="19.5239047809562%"> <col width="18.0836167233447%"> <col width="19.5239047809562%"> <col width="18.0836167233447%"> </colgroup><tbody><tr><td align="left" class="br" rowspan="2" valign="top"><p align="center" class="Table-Para-1"><b>Cooling capacity provided by equipment</b></p></td><td align="left" class="br" colspan="2" rowspan="1" valign="top"><p class="Table-Heading-Center">Original Design</p></td><td align="left" class="b" colspan="2" rowspan="1" valign="top"><p class="Table-Heading-Center">Revised Design</p></td></tr><tr><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Mr&nbsp;Ansett</p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Mr&nbsp;Peck</p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Mr&nbsp;Ansett</p></td><td align="left" class="b" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">Mr&nbsp;Peck</p></td></tr><tr><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1"><b>Chillers</b></p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3,800 kW</p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3,800 kW</p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3,796 kW</p></td><td align="left" class="b" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">4,240 kW</p></td></tr><tr><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1"><b>AHU</b></p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0 kW</p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0–27 kW</p></td><td align="left" class="br" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0 kW</p></td><td align="left" class="b" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">0–27 kW</p></td></tr><tr><td align="left" class="r" rowspan="1" valign="top"><p align="justify" class="Table-Para-1"><b>Total cooling capacity</b></p></td><td align="left" class="r" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3,800 kW</p></td><td align="left" class="r" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3,800–3,827 kW</p></td><td align="left" class="r" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">3796 kW</p></td><td align="left" class="" rowspan="1" valign="top"><p align="justify" class="Table-Para-1">4,240–4,267 kW</p></td></tr></tbody></table>

  
  

362    Essentially, the experts differed on two points:

(a)     whether the AHUs can be used to provide additional cooling for the Extension;[\[note: 598\]](#Ftn_598) and

(b)     whether the chillers’ cooling capacity can be increased from 1,900 kW each to 2,120 kW each.[\[note: 599\]](#Ftn_599)

363    According to Mr Ansett:

(a)     Although the AHUs potentially can provide some cooling capacity, that potential cooling capacity cannot be relied upon when designing a cooling system because it is difficult to determine how much that cooling capacity actually is.[\[note: 600\]](#Ftn_600) Nevertheless, he was sure that the AHUs certainly could not deliver the 27 kW of cooling capacity that Mr Peck had suggested, although he also could not give an accurate estimate of the actual cooling capacity.[\[note: 601\]](#Ftn_601)

(b)     The chillers recommended by Arup were not proven to be capable of delivering 2,120 kW of cooling capacity each. Instead, they were only proven to be capable of delivering 1,898 kW of cooling capacity each during their FATs.[\[note: 602\]](#Ftn_602) He accepted that it is possible for the chillers to actually operate at 2,120 kW or somewhere “very close to that number” unless the manufacturer had lied about their capacity.[\[note: 603\]](#Ftn_603) He also accepted that the chillers were not tested at their full capacity.[\[note: 604\]](#Ftn_604) However, he had doubts over whether this could actually be achieved in this case because the chillers had only managed to achieve 1,898 kW of cooling capacity even when tested at 1,900 kW.[\[note: 605\]](#Ftn_605)

364    According to Mr Peck:

(a)     He accepted that the AHUs could not deliver as much cooling as he originally though they could. However, he still maintained his view that the AHUs could deliver _some_ cooling capacity,[\[note: 606\]](#Ftn_606) though he also agreed with Mr Ansett that it would be difficult to determine how much cooling capacity they could actually provide.[\[note: 607\]](#Ftn_607)

(b)     The chillers that Arup had recommended were capable of delivering 2,120 kW of cooling capacity each as was stated in the manufacturer’s specifications.[\[note: 608\]](#Ftn_608)

365    I do not accept that Arup had provided sufficient cooling capacity for the Extension because the chillers could potentially operate at up to 2,120 kW each:

(a)     First, this potential increase in chiller capacity was not pleaded by Arup as a defence to GSS’s claim that the Extension’s cooling system did not provide sufficient cooling capacity, and I find that allowing Arup to advance this point at this late stage would cause prejudice to GSS because GSS would be deprived of the chance to adduce evidence to respond to this allegation properly.

(b)     Secondly, the potential increase was only theoretical, as Arup did not actually take the necessary steps to increase the chiller capacities. The necessary steps would include speaking to the manufacturers about making the chillers operate at 2,120 kW each,[\[note: 609\]](#Ftn_609) as well as commissioning them for the increased capacity.[\[note: 610\]](#Ftn_610) This meant that as far as the Extension’s cooling was concerned, the chillers could only operate at 1,900 kW unless it was proved otherwise.

366    For completeness, I should state that I accept Mr Peck’s evidence that the chillers could be made to operate at an increased capacity as this was consistent with the manufacturer’s specifications. Indeed, even Mr Ansett agreed that such an increase was possible unless the manufacturer had misrepresented the equipment’s capacity. He also agreed that manufacturers tend to under-state the maximum capacities of their equipment.[\[note: 611\]](#Ftn_611) I will also state that I do not accept GSS’s argument that this potential increase cannot be realised as recommissioning the equipment would present very high risks to the Extension. As Mr Peck stated, there were ways to go about commissioning the equipment without presenting undue risks to the live equipment.[\[note: 612\]](#Ftn_612) Indeed, although Mr Peck accepted that there were risks involved, data centre operators still carry out this exercise regularly.[\[note: 613\]](#Ftn_613)

367    In any case, Mr Peck readily admitted that even if each chiller could provide 2,120 kW of cooling, Arup would still have failed to provide sufficient cooling for the Revised Design as there would still be a cooling shortfall of 56 kW.[\[note: 614\]](#Ftn_614) He also accepted that Arup had also misunderstood the amount of cooling that could be provided by the AHUs, such that they wrongly concluded that the Extension’s Cooling Load Requirement under the Original Design was 3,760 kW, thereby recommending chillers that were inadequate.[\[note: 615\]](#Ftn_615)

368    I therefore find that Arup was in breach of its obligation to provide the Extension with sufficient cooling capacity.

#### Damages to be awarded to GSS for Arup’s breaches

369    In its pleadings, GSS had claimed the sum of $634,680.08 as the costs that it would incur in providing additional cooling capacity to the Extension.[\[note: 616\]](#Ftn_616) This sum was eventually revised downwards to $130,381.70 by its own cost experts.[\[note: 617\]](#Ftn_617)

370    In my view, GSS has not proved its entitlement to the damages that it claims for Arup’s breach of its obligations regarding cooling capacity. First, the quantum of $130,381.70 is not justifiable. This figure is based on a rough estimate by Mr Lim on the cost of rectification. Mr Lim accepted that he did not take into account the actual drawings and plans,[\[note: 618\]](#Ftn_618) and also that his estimates of the preliminaries required for the rectification works were based on the preliminaries for the installation of the fourth DRUPS unit. When pressed by Mr Chia, he conceded that the installation of the fourth DRUPS unit was significantly different from the rectification scheme for the Extension’s cooling capacity.[\[note: 619\]](#Ftn_619)

371    Secondly, and more fundamentally, it is unclear whether the rectification scheme upon which the figure of $130,381.70 was based[\[note: 620\]](#Ftn_620) was even the correct remedial measure for the shortfall in issue. GSS mainly relied on the rectification scheme put forward by two of its _factual_ witnesses, Mr Turvey and Mr Hamer, with Mr Turvey simply relying on Mr Hamer’s estimates,[\[note: 621\]](#Ftn_621) without asking the technical experts to review or comment on this scheme.[\[note: 622\]](#Ftn_622) Mr Chia, correctly in my view, objected to much of Mr Hamer’s evidence as opinion evidence. It would have been very different if Mr Hamer or Mr Turvey gave evidence of what GSS did to remedy the shortfall, the cost incurred for such rectification, along with proof or quotes and relevant details. It would then be open to the experts to opine if the remedial measure was correct and/or reasonable and give their views, perhaps with input from a cost consultant/quantity surveyor, on the amount incurred. The point remains that Mr Hamer did not properly explain how he derived this scheme. After stating that there was a shortfall in cooling capacity he claimed that “\[he\] was instructed to devise solutions to make up this shortfall”, and that _“\[p\]lans_ **_are being considered_** at the moment but it is _very likely that \[GSS\]_ **_will have to incur_** _significant costs_ to install a fourth chiller unit and additional CRACs”\[emphasis added in italics and bold italics\].[\[note: 623\]](#Ftn_623) He then estimated the cost for this additional work at $1,500,000. That is not proof of the damages suffered. I digress to point out that Mr Hamer had also stated that “\[t\]he isolation valves should have been designed to be automatic (motorised) to reduce the risk of human error” and that this work _would_ cost $100,000.[\[note: 624\]](#Ftn_624) However, Mr Ansett later gave evidence that it was not a standard measure for isolation valves to be automatic and that he himself would have preferred not to automate these components.[\[note: 625\]](#Ftn_625) Mr Peck did not disagree with this. Significantly, GSS ended up abandoning its claim that Arup provided manual valves instead of motorised isolation valves.[\[note: 626\]](#Ftn_626) I find that Mr Hamer’s proposed rectification scheme, much like his proposal in relation to isolation valves, cannot be said to be a reliable measure with a sound technical basis. Mr Hamer’s other evidence also suffers from similar shortcomings in straightforward factual matters. To pick another example, GSS complains about Arup’s failure to provide a reasonable means of access to the DRUPS units (see above at \[64(a)\]). Mr Hamer then states that a proper set of stairs (as opposed to a cat ladder) should be installed and he _estimates_ the cost therefor at $65,000, which estimate is based on the cost of stairs that were installed by another contractor for another project. There were no quotations or even details of the other stairs installed provided by GSS to fulfil its burden of proving its damage.[\[note: 627\]](#Ftn_627) This claim was abandoned by GSS in their closing submissions. For these reasons, I decline to give any weight to Mr Hamer’s proposed rectification scheme for the cooling shortfall.

372    That GSS has not acted quickly to implement this scheme also raises questions about the genuineness of the proposed scheme. Given how critical cooling is to the Extension, one would have expected such rectification works to have been conducted expediently upon discovering the problem. According to Mr Turvey, GSS approached T&T in 2014 to prepare a cost estimate on the necessary measures to resolve the cooling issue.[\[note: 628\]](#Ftn_628) This means that GSS would have had at least two years to implement any necessary rectification works by the time of his AEIC in October 2016.[\[note: 629\]](#Ftn_629) In my view, the fact that GSS has not attempted to remedy what would be a critical issue raises doubts as to whether the rectification scheme proposed is genuine. Given that I find this scheme unacceptable, there would be no need for me to consider the quantum of damages, as Mr Ho himself admitted.[\[note: 630\]](#Ftn_630)

373    The net effect is that GSS has failed to adduce sufficient evidence to show that its rectification scheme is reasonable, and cannot show that it is entitled to the quantum of damages that it claims for this breach. I therefore find that GSS is only entitled to nominal damages of $1,000.

### The chiller system

374    GSS submits that the chiller faults were caused by condensation, and that the condensation was due to Arup’s failure to ensure that the chillers were sufficiently protected from the elements. It contends that Arup was under a duty to ensure that the chillers were so protected because of their location on the roof, which exposed the equipment to moisture and humidity.[\[note: 631\]](#Ftn_631) I note that in its Statement of Claim, GSS attributed these faults to “moisture forming within the control circuits” of the chillers.[\[note: 632\]](#Ftn_632)

375    Arup contends that GSS has not proved that the chiller faults were caused by condensation, or that the condensation was caused by Arup’s negligence. Instead, Arup alleges that the chiller faults were caused by manufacturing defects, and that GSS’s proper recourse was against the manufacturers, and not against Arup.[\[note: 633\]](#Ftn_633) It also contends that the issue of whether the chillers were sufficiently protected from the weather is different from whether the chillers suffered from a condensation problem, and GSS’s pleaded case was only that Arup had failed to properly protect the chillers from condensation.

376    The following issues arise for determination:

(a)     whether the chiller faults were caused by condensation; and

(b)     whether the condensation was caused by Arup’s failure to ensure that the chillers were properly protected.

377    On the first issue, in his AEIC, Mr Hamer asserted that the chillers had suffered from multiple failures “due to the heat and humidity of their location”.[\[note: 634\]](#Ftn_634) However, Mr Hamer did not specifically show how the multiple failures he referred to were indeed caused by heat and humidity. He also accepted that these assertions were actually based on the vendor Powerpax’s assessment of the cause of the chillers’ failure, and were not his own.[\[note: 635\]](#Ftn_635) No one from Powerpax was called to give evidence.

378    In its 2011 Engineering Assessment Report of the Existing Facility and the Extension prepared for GSS, AECOM Australia Pty Ltd (“AECOM”) noted that:[\[note: 636\]](#Ftn_636)

The rooftop chiller plant consists of three (3) x1900kW containerised Powerpax chillers. These chillers are entirely dedicated to the Extension Building, and were installed in 2010. …

The proprietary containerised solution that has been adopted with these chillers utilises fully louvered “shipping containers”. The louvers selected, are not of a weatherproof design, and regularly allow the ingress of rainwater into the container. Of critical concern, is the fact that rainwater on occasion impacts and penetrates electrical circuits, switchboards, and the like. As a result, there is a degree of corrosion and general water damage evident on the control panel and its components. This is a potential point of failure, and at worst, a potential fire risk. …

There is evidence of early corrosion associated with a valve located between valve 68 and SCHWP3. This indicates a poor standard of insulation in that area, allowing excessive condensation to occur. Apart from the loss of energy at that point, this particular valve will be rendered inoperable within the short to medium term, and also could indicate a more generalised insulation problem with the installation (although it is noted that other such instances were not observed). …

379    I note that valve 68 and SCHWP3 are not located in the chillers themselves, though they are located within the chiller enclosures.[\[note: 637\]](#Ftn_637)

380    Mr Ansett stated, in his second expert report, that AECOM’s observations indicated that the chillers were “not suitable for the location within which they were installed”.[\[note: 638\]](#Ftn_638) While he accepted that the question of whether the chillers were suitable for their rooftop location and the question of whether they suffered from condensation are different,[\[note: 639\]](#Ftn_639) he thought that the mention of corrosion in the AECOM report was sufficient evidence of condensation. This is because both condensation and corrosion are linked.[\[note: 640\]](#Ftn_640) However, he accepted during cross-examination that he did not actually witness the condensation problem, nor did he personally inspect the chillers.[\[note: 641\]](#Ftn_641)

381    Mr Peck did not give any evidence as to whether the chiller faults were actually caused by condensation within the chillers’ control panel, nor was he cross-examined on this issue.

382    As I mentioned above at \[364\], GSS’s pleaded case was that the chiller faults were caused by condensation and moisture forming _within the control circuits_ of the chillers. In my view, GSS has failed to discharge its burden of proving its pleaded case for the following reasons:

(a)     The AECOM report does not specifically mention that the chillers’ control circuits were affected by moisture or condensation. While it does mention that rainwater did penetrate and impact the chillers’ electrical circuits on occasion, it did not state that this problem afflicted the chillers’ control circuits specifically.

(b)     None of its factual witnesses were able to show any documents which indicated that the chillers’ control circuits were afflicted by moisture or condensation.

(c)     Its own expert was unable to point to any evidence of condensation within the chillers’ control circuits.

383    For these reasons, I dismiss GSS’s claims against Arup in this regard. As GSS has not been able to show that the chiller faults were caused by condensation, there is strictly no need for me to discuss the second issue identified above at \[366\].

384    For completeness, I would also observe that as far as GSS’s allegations that the chiller faults were caused by moisture and condensation within their control circuits are concerned, Arup’s specification that the chiller control panels were to meet an IP56 standard was sufficient for it to have discharged its duty of care. Both experts agree that the IP56 specification for the chillers’ control panels was entirely appropriate,[\[note: 642\]](#Ftn_642) and there is no reason for me to disagree with them.

385    Although GSS adduced a fair amount of evidence on whether Arup had ensured that the chillers themselves, and not merely their control panels, were properly protected from the weather, this fell outside the scope of their pleaded case and I shall say no more about those claims.

### GSS’s claims for the Microsoft and Pacnet Opportunities

386    Given my findings that the necessity of the Revised Design is not attributable to any breach of any obligations on Arup’s part, there is strictly no need for me to determine whether these breaches also caused GSS to lose profits or profitable opportunities. However, in the event that this is taken up elsewhere, I shall nevertheless proceed to make my findings and give my reasons as to why GSS would not have succeeded in its claims for loss of profits or opportunities in any case.

#### A point on pleadings – loss of chance versus loss of profits

387    GSS pleaded that it had lost profits which it would have made if the spare capacity of the Existing Facility’s SUPS system was not used as part of the Revised Design for remedying the NBP shortfall in Arup’s Original Design.[\[note: 643\]](#Ftn_643) In its opening statement, GSS also made it clear that its claim was for loss of profits, and not for loss of opportunities to earn profits.[\[note: 644\]](#Ftn_644) In its closing submissions, it also cited multiple authorities on the standard that it had to satisfy in order to succeed in a loss of profits claim.[\[note: 645\]](#Ftn_645)

388    However, and when questioned on this point during the trial, Mr Ho conceded that GSS’s claim is “actually a claim for a lost opportunity”.[\[note: 646\]](#Ftn_646) Additionally, in dealing with its loss of profits claim in its closing submissions, GSS had also used language that casts doubt on whether its claim was for lost profits, or loss of chance. For example, it submitted that there was a “high chance” that Pacnet would have entered into an agreement with GSS for additional power if not for the fact that GSS did not have spare NBP readily available for commercial use.[\[note: 647\]](#Ftn_647)

389    Arup takes the position that GSS should not be allowed to advance this unpleaded claim for a loss of opportunity.[\[note: 648\]](#Ftn_648)

390    To succeed in a loss of profits claim, a claimant needs to show, on a balance of probabilities, that but for the defendant’s breach, it _would_ have had made the profits alleged: _Super Continental Pte Ltd v Essential Engineering & Construction Pte Ltd_ at \[142\]; _AKM v AKN_ at \[184\]–\[185\]; _Vasiliou v Hajigeorgiou_ \[2010\] EWCA Civ 1475. This is merely an application of the general principle that the claimant must prove that “but for” the defendant’s breach, it would not have suffered the loss for which it claims. That test is applicable to cases involving breach of both tortious and contractual duties: _Sunny Metal & Engineering Pte Ltd v Ng Khim Ming Eric_ at \[63\]. Applying that test, GSS must show that “but for” Arup’s breaches: (i) it would have secured the Pacnet or Microsoft Opportunities; and (ii) that doing so would have resulted in it earning profits.

391    To succeed in a loss of chance claim, a claimant must show on a balance of probabilities, that the defendant’s breach had caused it to lose the chance of securing the benefit in question; and having established causation for the loss of that chance, the claimant must also show that the lost chance was “real or substantial”, and not merely speculative. (see _Asia Hotel Investments Ltd v Starwood Asia Pacific Management Pte Ltd and another_ at \[132\]–\[135\] and \[137\]; _McGregor on Damages_ (James Edelman ed) (Sweet & Maxwell, 20th Ed, 2018) at para 10-051). Applying that test, GSS must show that: (i) but for Arup’s breaches, it would have had a chance of securing the Pacnet or Microsoft contracts, and; (ii) that its chance of securing either of those contracts was real or substantial and not merely speculative.

392    I allowed GSS to proceed on its claim for loss of chance, notwithstanding its pleaded claim for loss of profits. While there is indeed a distinction between a claim for loss of profits, and a claim for loss of chance, I am not convinced that Arup would be prejudiced if GSS were allowed to advance its case on the basis of loss of chance, considering the way the defence was run by Arup and the way the issues were explored at trial. The question then becomes how sure GSS is of that party entering into the contract, and the factual issues that would have arisen in both a loss of profit and loss of chance claim in the context of this case would be largely the same – essentially, whether GSS could have realistically accommodated either Pacnet’s or Microsoft’s requests for more power in the Existing Facility. These facts were pleaded by GSS[\[note: 649\]](#Ftn_649) and were fully explored at trial, thus Arup could not be said to have been taken by surprise. Indeed Arup was unable to point me to any prejudice, making only a token objection to GSS advancing its claim on this basis.[\[note: 650\]](#Ftn_650) But I hasten to add that my finding in this regard is _not_ an endorsement of equivalence between loss of chance and loss of profit claims more generally. Each case turns on its own facts.

#### The Pacnet Opportunity

393    In 2011, Pacnet was one of GSS’s tenants in Suites F1, F2, F3, and F4 of the Existing Facility. On 11 July 2011, a representative of Pacnet wrote to GSS to enquire if GSS could provide it with an additional 252 kVA of power and cooling for Suite F3, and an additional 32 kVA of power in Suite F4, which translates into a total of 255 kW.[\[note: 651\]](#Ftn_651) Over the course of negotiations between GSS and Pacnet, the latter’s requirements for additional power evolved until it eventually settled at a requirement for a total of 21 kW of additional power in Suite F4 by the end of 2011, and 220 kW of additional power to Suite F3 by the first quarter of 2012.[\[note: 652\]](#Ftn_652)

394    During this period, GSS was also trying to find internal solutions that would allow it to provide Pacnet with the additional power. As Mr Turvey accepted, over and above being able to deliver additional power to the respective suites, GSS also had to ensure that there was sufficient space and cooling to accommodate Pacnet’s additional power requirements.[\[note: 653\]](#Ftn_653) Thus, Mr Gudijanto was asked to conduct a feasibility study of GSS’s ability to meet Pacnet’s requirements. On 11 July 2011, he emailed Mr Turvey stating that Pacnet’s total requirement for 255 kW might be more than the total spare SUPS capacity that GSS had, and that GSS could only provide Pacnet with a total of 131 kW.[\[note: 654\]](#Ftn_654) In another email sent to Mr Turvey on 12 July 2011, Mr Gudijanto stated that GSS had to be “very careful” in providing the additional power 252 kVA (226 kW) that Pacnet was requesting for Suite F3 as this would increase the suite’s power density, which in turn required additional cooling.[\[note: 655\]](#Ftn_655) Mr Turvey accepted, during cross-examination, that Mr Gudijanto thought that it would be very difficult for GSS to accommodate the additional 226 kW of power in Suite F3.[\[note: 656\]](#Ftn_656)

395    Mr Turvey also agreed that at the time of Pacnet’s request for additional power, the Existing Facility was full from a spatial perspective.[\[note: 657\]](#Ftn_657) At some point, GSS was exploring the option of moving Pacnet into L7 of the Extension, though this plan was eventually dropped as GSS needed to reserve that space for Microsoft.[\[note: 658\]](#Ftn_658) Thus, GSS had no other option but to try and find additional power for Pacnet in the Existing Facility, and then try to redistribute that additional power within acceptable power densities.[\[note: 659\]](#Ftn_659) It is undisputed that GSS had to eventually obtain this power from pockets of uncontracted power from the Existing Facility’s SUPS system. Eventually, it settled on the following plan to obtain the additional power for Pacnet:[\[note: 660\]](#Ftn_660)

(a)     conduct power-rebalancing works on L6 of the Existing Facility in order to obtain the additional 21 kW of power for Suite F4; and

(b)     obtain 110 kW of power each from the SUPS units on L3 and L7 of the Existing Facility to obtain the additional 220 kW of power for Suite F3.

396    According to Mr Turvey, the significant capital expenditure necessary to obtain the power from these various locations meant that GSS had to price the additional power at about S$10,000 per kW over a five-year term in order to ensure that it was financially viable for GSS. In his view, the capital expenditure needed for this opportunity would have been significantly lower if GSS had been able to cable the additional power from a single location in the Existing Facility. However, because available SUPS power had been diverted to the Extension, GSS would have had to cable it from various SUPS units scattered around the Existing Facility, which was expensive.[\[note: 661\]](#Ftn_661) For comparison, its competitor, Digital Realty, was willing to offer potential customers power at S$3,500 per kW at that time.[\[note: 662\]](#Ftn_662) However, the facts also show that GSS’s plan to redistribute power within the Existing Facility was expensive not only because of the cabling works, but for other reasons which had nothing to do with the implementation of the Revised Design.

397    As Mr Turvey accepted during cross-examination, GSS had to undertake major upgrades in order to even provide Pacnet with the additional 21 kW of power to Suite F4. In particular, it would have had to upgrade its cooling system to cope with the increase in power density.[\[note: 663\]](#Ftn_663) On 14 November 2011, Mr Gudijanto sent an email to Pacnet to inform it that GSS needed to install an additional CRAC unit in Suite F4 to accommodate the additional 21 kW.[\[note: 664\]](#Ftn_664) Mr Gudijanto also mentioned that there might be spatial difficulties in doing so if Pacnet was going to install a new equipment cage in that suite as intended.[\[note: 665\]](#Ftn_665)

398    As Suite F3 was previously being used as a storage space by Pacnet, Mr Turvey agreed that a raised floor had to be installed for cooling purposes in order for it to be utilised as technical space.[\[note: 666\]](#Ftn_666) He also agreed that, in addition to the cabling costs that GSS had to incur, it would also have to install new water chillers, CRACs, STSs, PDUs, and Rack Distribution Units in that suite because the Existing Facility’s cooling system was inadequate for the increased power density.[\[note: 667\]](#Ftn_667)

399    On 14 September 2011, GSS sent Pacnet a letter containing two alternative offers:[\[note: 668\]](#Ftn_668)

(a)     annual rent of S$4,686,500 over a five-year period if Pacnet signed for an additional 241 kW of power and extended its lease for the 225 kW that Pacnet had already contracted for (“GSS’s first offer”); or

(b)     alternatively, annual rent of S$3,442,448 over a ten-year period if Pacnet signed for an additional 221 kW of power and extended its lease for the 225 kW that Pacnet had already contracted for (“GSS’s second offer”).

400    This was followed by an email from Mr Chris Heffernan to Pacnet on 25 September 2011 which set out a high-level breakdown of the works that were required to accommodate the additional power.[\[note: 669\]](#Ftn_669)

401    Pacnet responded on 25 September 2011 stating:[\[note: 670\]](#Ftn_670)

Hi Chris,

Thanks for the brief explanation of the works required to provide both the 21 kW and 220 kW.

From reading through it would seem that in all honesty you are at the limits of your systems capacity and to provide a modest 21 kW will require quite a major upgrade.

To install the 220 kW will require considerable reworking.

All in all the cost is some 14.1k/kW which is fairly excessive and is more than for a new build to a high Tier III standard.

We will have to review this internally before we can make any decision on what to do but realistically we would not have expected a cost of this level to furnish us with a relatively modest load.

…

402    On 20 October 2011, GSS sent yet another set of proposals to Pacnet. This time, the offers were for:[\[note: 671\]](#Ftn_671)

(a)     annual rent of rent of S$3,387,500 over a ten-year period if GSS took up the additional 241 kW of power and extended its lease for the existing 225 kW (“GSS’s discounted second offer”); or

(b)     annual rent of S$3,267,000 over a 15-year period if GSS took up the additional 241 kW of power and extended its lease for the existing 225 kW (“GSS’s third offer”).

403    These offers was not suitable for Pacnet, however, and on 15 November 2011, Pacnet finally informed GSS that it had elected not to contract with GSS for any additional power, but was content to merely extend its existing lease.[\[note: 672\]](#Ftn_672)

##### The parties’ cases and issues to be determined

404    GSS’s claim is in relation to only the 220 kW of NBP.[\[note: 673\]](#Ftn_673) It contends that Pacnet had rejected its offer for additional power because of the high price that GSS had quoted. It attributes this high price to the fact that GSS was forced to source for additional power from multiple locations in the Existing Facility, which necessitated significant capital expenditure and therefore prevented GSS from making a competitive offer to Pacnet.[\[note: 674\]](#Ftn_674)

405    Arup denies that Pacnet refused to contract for the additional power because of the high price quoted by GSS. Instead, it asserts that Pacnet’s refusal was a result of the Existing Facility’s infrastructure limitations. In any event, GSS also contends that the high price quoted by GSS to Pacnet was not attributable to Arup’s Revised Design, and that GSS could not accommodate Pacnet’s request for additional power in the Existing Facility to begin with.[\[note: 675\]](#Ftn_675)

406    The issues are whether Arup’s breaches (on the assumption that I am wrong and so the Revised Design was, contrary to my findings, necessitated by Arup’s breaches of the Contract) caused GSS to be deprived of a chance to contract with Pacnet for additional power, and whether that chance was real and substantial as opposed to merely fanciful. The resolution of these issues turns on the following:

(a)     Could GSS have accommodated Pacnet’s request for additional power to begin with (_ie_, even if the Revised Design had not been implemented)?

(b)     Did Pacnet reject GSS’s proposals because of the high price quoted by GSS?

(c)     If so, were Arup’s breaches the cause of the high capital expenditure?

407    GSS must succeed on all three issues to prevail in its Pacnet claim. In my view, it has succeeded on the first and second issues but not the third.

##### Whether GSS could have accommodated Pacnet’s request

408    In my view, although GSS would have faced significant difficulties in accommodating Pacnet’s request for additional power, these were not insurmountable. Though Mr Gudijanto did raise concerns about the provision of sufficient cooling for the increased power density in Pacnet’s existing suites, he did not go as far as to state that it was _impossible_ to accommodate the request for additional power. Indeed, the very fact that GSS made various offers to Pacnet that, if accepted, would have bound GSS, is strong evidence that it did find or could have found a suitable solution to the cooling difficulties.

##### Pacnet’s rejection of GSS’s proposals due to price

409    The evidence establishes that Pacnet’s primary concern was with the price quoted by GSS for the additional power. This was made clear in Pacnet’s 25 September 2011 email to GSS, where Pacnet expressed obvious disappointment with the price it had been quoted:[\[note: 676\]](#Ftn_676)

…

From reading through it would seem that in all honesty you are at the limits of your systems capacity and to provide a modest 21 kW will require quite a major upgrade.

_To install the 220 kW will require considerable reworking._

_All in all the cost is some 14.1k/kW which is fairly excessive and is more than for a new build to a high Tier III standard._

We will have to review this internally before we can make any decision on what to do but **_realistically we would not have expected a cost of this level to furnish us with a relatively modest load._**

\[emphasis added in italics and bold italics\]

410    Though Pacnet also mentioned that GSS was “at the limits of \[its\] system capacity” and that its proposal would “require considerable reworking”, it is reasonable to conclude that Pacnet, a commercial entity, was primarily concerned about the price it would have to pay for their additional requirements. This is strongly suggested by the last paragraph, in which Pacnet mentioned that it would have to review GSS’s proposal internally but hinted that it was unlikely to accept because “\[it\] would not have expected a cost of this level to furnish \[it\] with a relatively modest load”.

411    I recognise that Pacnet may have had other unarticulated concerns, for example major upgrading works being undertaken in a live environment, and GSS’s ability to continue providing it with additional power in the future for its business needs. Indeed, Mr Turvey himself accepted that Pacnet would have been influenced by these considerations.[\[note: 677\]](#Ftn_677) However, given the emphasis that Pacnet placed on pricing in its email of 25 September 2011, I do not think these other concerns would have been insurmountable if GSS had been able to quote a lower price. I also disagree with Arup that Pacnet’s refusal of GSS’s discounted second offer suggests that its first refusal had nothing to do with price.[\[note: 678\]](#Ftn_678) Even though GSS had reduced the price of its second offer, there is no indication that this reduction caused the offer to become significantly more competitive to Pacnet; its competitors might still have been offering much lower prices on more favourable terms. The reality was that GSS could not meet Pacnet’s expectations of a reasonable cost for its requirements.

##### Arup’s responsibility for high capital expenditure

412    However, GSS has failed to show that the high capital expenditure was a result of Arup’s breaches. In particular, GSS has not shown that the entirety of the high capital expenditure was attributable to Arup rather than to the major upgrading works that had to be undertaken regardless of Arup’s Revised Design. Mr Turvey accepted that GSS needed to undertake more than just cabling works (arising from Arup’s Revised Design) in order to provide the additional power to Pacnet.[\[note: 679\]](#Ftn_679) The requisite non-cabling works (not attributable to Arup’s Revised Design) were fairly major and included the installation of a new raised floor, the addition of new chillers, and CRACs.[\[note: 680\]](#Ftn_680) These would have cost a significant amount of money and may well have prevented GSS from presenting a competitive offer to Pacnet. Mr Turvey’s email of 5 September 2011, which stated that the estimated cabling costs would have required GSS to price Pacnet’s additional power in the region of S$10,000 per kW (see above at \[386\]), did not address the non-cabling costs, and is therefore of limited assistance to me on this issue.

413    As Mr Turvey eventually accepted during cross-examination, GSS was in no position to indicate how much capital expenditure it would have had to undertake if not for Arup’s Revised Design. In my view, GSS’s failure to do so is fatal on the facts of this case.[\[note: 681\]](#Ftn_681) It is for GSS to prove that that it could not present a competitive offer to Pacnet because of Arup’s breaches, which it has failed to do. I therefore dismiss its claim for a loss of chance in securing the Pacnet opportunity.

414    Even if I am wrong on the preceding issue, and there was a chance that Pacnet would have contracted with GSS for the additional power, I find that the chance was not a real and substantial one for the same reasons that I have given above. Essentially, Pacnet had multiple and significant reservations about accepting GSS’s proposal, the terms of which may not have been much more favourable even if the Revised Design had never been implemented. I am hence unable to conclude that there was a real and substantial chance of Pacnet accepting the same. It also follows from this that because GSS has not shown that there was a chance that it would have secured the Pacnet opportunity, it has also failed in its claim for loss of profits.

#### The Microsoft Opportunities

415    A bit more factual background is necessary to understand GSS’s claims for the Microsoft Opportunities.

416    Microsoft was a tenant of both the Existing Facility and the Extension. On 19 June 2012, Mr Turvey emailed Mr Corcoran and various other GSS staff to inform them that Microsoft had indicated in its monthly site report that it was looking for an additional 1,500 kW to meet its future growth demands. This 1,500 kW was to be delivered in three equal tranches of 500 kW each in April, July and October 2013.[\[note: 682\]](#Ftn_682) Mr Turvey added that GSS’s only option for accommodating this request for additional power was by increasing the Extension’s power densities, as there was no space in the Existing Facility to do so.[\[note: 683\]](#Ftn_683) I note that if GSS had taken on this additional commitment, it would have increased the Extension’s NB capacity to 5,500 kW, which is 1,500 kW more than the Revised Design was originally designed for.[\[note: 684\]](#Ftn_684) During cross-examination, Mr Turvey agreed that in order to meet Microsoft’s request for an additional 1,500 kW of power, GSS would have had to increase the Extension’s cooling capacity.[\[note: 685\]](#Ftn_685)

417    Microsoft’s requirements then evolved over the next few months:

(a)     On 23 August 2012, Microsoft stated that it required 500 kW by 1 April 2013, or 1 June 2013 if it was delivered to Microsoft’s existing space, with another 1,000 kW to be made available on a “right of first refusal” basis subsequently.[\[note: 686\]](#Ftn_686)

(b)     On 29 August 2012, Microsoft indicated that it would require 2,000 kW of additional power, with the first 1,000 kW to be delivered by February or March 2013, the next 500 kW to be delivered by May or June 2013, and the final 500 kW to be delivered by August or September 2013.[\[note: 687\]](#Ftn_687)

(c)     On 3 September 2012, Microsoft indicated to GSS that it was agreeable to the arrangement that was communicated to GSS on 23 August 2012.[\[note: 688\]](#Ftn_688)

(d)     Around 21 September 2012, Microsoft indicated that it only needed an additional 800 kW of power from GSS.[\[note: 689\]](#Ftn_689)

(e)     On 17 October 2012, GSS received indication from Microsoft that it would be agreeable to accepting a proposal for 1,500 kW of additional power, with the first tranche of 600 kW to be delivered by 1 April 2013, a subsequent tranche of 300 kW to be delivered by 1 July 2013, and the last tranche of 600 kW to be delivered by 1 September 2013.[\[note: 690\]](#Ftn_690)

(f)     Around 30 November 2012, GSS received an indication that Microsoft was willing to accept a proposal for an additional 1,000 kW of power to be delivered in three tranches in April, July, and September 2013.[\[note: 691\]](#Ftn_691)

(g)     Finally, on 5 December 2012, GSS was informed by Microsoft that its requirements for additional power had increased to 2,500 kW, with the first tranche of 1,000 kW to be delivered by 1 April 2013.[\[note: 692\]](#Ftn_692) Mr Turvey agreed that this requirement was beyond GSS’s capabilities, and there were no further negotiations between Microsoft and GSS thereafter.[\[note: 693\]](#Ftn_693)

418    Internally, GSS was trying to put together a competitive offer for Microsoft’s request for the additional 1,500 kW of power (“the 1,500 kW Microsoft Opportunity”) after learning of Microsoft’s request in June 2012. Initial estimates of the capital expenditure required to meet this commitment was around $12 million. However, it subsequently turned out that the true expected capital expenditure for this project was between $17 million and $18 million.[\[note: 694\]](#Ftn_694) When informed of this increased estimate on 12 November 2012, Mr Corcoran gave the following reply:[\[note: 695\]](#Ftn_695)

Chris and Peter,

I thought the estimate was S$12.7m (which is what we based our commercial negotiation on)? What are the differences. _I suspect this will kill the deal as it takes an extra year to repay the capex._ REW will rework the TCI numbers.

\[emphasis added\]

419    When it was confirmed that the capital expenditure for the 1,500 kW Microsoft Opportunity was $18 million, Mr Corcoran replied to state:[\[note: 696\]](#Ftn_696)

Gents,

_This clearly no longer works_. Any thoughts on how the budget can be reduced?

\[emphasis added\]

420    In the email correspondence between the GSS staff, there was no indication why the expected capital expenditure was estimated to be so high. GSS also did not address me on the significance of this in their closing or reply submissions. More significantly for present purposes, it did not seek to attribute this deal-killing capital expenditure to Arup’s breaches.

421    Thereafter, GSS sought to explore ways in which it could make an alternative offer to Microsoft that would have required much less capital expenditure. On 20 November 2012, Mr Turvey emailed Mr Chris Heffernan to state that GSS should make an offer to deliver an additional 732 kW of power to Microsoft in two tranches.[\[note: 697\]](#Ftn_697) In that same email, he also stated that the estimated capital expenditure for this offer would be in the region of $5 million.

422    On 22 November 2012, another internal GSS proposal was put forward to offer Microsoft 720 kW of additional power at a capital expenditure of $6.15 million (“the 720 kW Microsoft Opportunity”).[\[note: 698\]](#Ftn_698) This is the lost opportunity that GSS is claiming for in this suit. That proposal appeared to have been acceptable to GSS, and Mr Turvey emailed Microsoft on 4 December 2012 to formally make the offer.[\[note: 699\]](#Ftn_699) The next day (_ie_, 5 December 2012), GSS was informed that Microsoft’s requirements for additional power had increased to 2,500 kW.[\[note: 700\]](#Ftn_700)

##### The 1,500 kW Microsoft Opportunity

423    GSS attributes its failure to secure the 1,500 kW Microsoft Opportunity to the shortfall caused by Arup’s Original Design. According to GSS, it could have delivered the initial 500 kW by April 2013 if Arup’s Revised Design had not utilised 1,400 kW of spare capacity in the Existing Facility’s SUPS system. Essentially, GSS contends that had there been sufficient spare capacity available in the Existing Facility’s SUPS system in June 2012, it could have agreed to Microsoft’s additional power requirements in June 2012 and immediately placed orders for the additional power and cooling equipment to meet its commitments.[\[note: 701\]](#Ftn_701) Although GSS recognises that it would have faced difficulties in obtaining additional cooling to meet this increased power density, it maintains that these difficulties were not insurmountable.[\[note: 702\]](#Ftn_702)

424    Arup, on the other hand, denies that its Revised Design was the cause of GSS’s inability to secure the 1,500 kW Microsoft opportunity. Instead, it alleges that GSS was unable to do so because of:

(a)     the high capital expenditure that GSS had to incur to secure the 1,500 kW Microsoft Opportunity;

(b)     GSS’s inability to meet the deadline for the latter two tranches due to the long lead time needed to order a fifth DRUPS unit; and

(c)     GSS’s inability to obtain additional cooling equipment in time.

425    In my judgment, GSS has not succeeded in showing that it would have had a chance of securing the 1,500 kW Microsoft Opportunity but for Arup’s breaches. This is because it has failed to show that it was Arup’s breaches which caused the expenditure for the proposal to become unsustainably high, which in turn caused GSS to pull the plug on this project. As mentioned above at \[411\]–\[412\], GSS only set about putting together a proposal for the 720 kW offer because it realised that the capital expenditure it would have had to incur for the 1,500 kW project was prohibitively high. As the party that bears the burden of proof, GSS has to show that this high capital expenditure was caused by Arup’s breaches. However, it has failed to adduce any evidence to show that this was the case. Indeed, GSS did not even seek to argue that this high capital expenditure was due to Arup’s breaches. It did not address this issue altogether in its closing submissions and reply submissions. Nor did Mr Turvey offer any evidence to show that it was Arup’s breaches which caused this project’s capital expenditure to become prohibitively high for GSS. I therefore find that GSS has failed to satisfy its burden of proof for loss of profits and/or loss of chance on this issue, and dismiss its claim.

426    For completeness I deal with the other two points raised by Arup, _viz_, GSS’s inability to obtain additional cooling equipment and a fifth DRUPS unit in time.

427    In relation to additional cooling, an email from Mr Franc Coles (“Mr Coles”) of AECOM suggests that GSS could potentially have met the deadlines for the additional cooling equipment. According to that email, GSS’s existing cooling system had 600 kW of spare capacity at that point.[\[note: 703\]](#Ftn_703) This would have been enough to provide cooling for the initial 500 kW increase in power density for the first tranche in April 2013. While GSS would have had to order additional chillers and CRACs to deal with the subsequent two tranches of additional power,[\[note: 704\]](#Ftn_704) there would have been sufficient time for them to do so by July and September 2013. In the abovementioned email, Mr Coles estimated that installation and delivery of the chillers would have required a lead time of about 2.5 to 3 months and 4 to 5 months respectively,[\[note: 705\]](#Ftn_705) while installation and delivery of the CRACs would have required a lead time of about 5 to 7 weeks and 10 to 12 weeks respectively.[\[note: 706\]](#Ftn_706) Thus, if an order for the equipment was placed by the end of October 2012, the chillers could have been delivered by March 2013, and the CRACs two months earlier; both well before the July 2013 deadline. However, I make no definitive finding on this as this is unnecessary given my findings above (at \[415\]). I also note that when taken to these emails in cross-examination, Mr Turvey stated as follows:[\[note: 707\]](#Ftn_707)

Q:… I pause here, we'll go on to power later. So what AECOM is basically telling Global Switch is that, “If we were to order for the cooling solution today, the earliest that we are going to look at for expected completion is going to be late April 2013 and at least in respect of the earlier requirement of Microsoft to have 500 kW by April 2013, there might be an issue because the cooling is only going to be finalised in late April 2013.”

A:That’s correct.

428    In relation to the fifth DRUPS unit, it is unclear whether GSS would have been able to place that order in time. As indicated by Mr Turvey, the estimated lead time for the delivery and installation of a DRUPS unit was about 10 to 12 months.[\[note: 708\]](#Ftn_708) While an order placed at the end of June 2012 might have allowed the DRUPS to be delivered by June 2013 at the latest, it is unclear if GSS could have placed such an order that quickly. I am unable to find, on balance, that GSS could have done so. Even before agreeing to Microsoft’s 1,500 kW requirements in June 2012, GSS’s practice indicates that it would have at least undertaken internal feasibility studies (considering that these are significant investments), and was also likely to have engaged third party consultants, such as AECOM, to advise it on its ability to meet Microsoft’s requirements. There is no clear indication of how long such studies and discussions would have taken. As the party which bears the burden of proof, GSS should have adduced evidence to show that it could have placed an order for the fifth DRUPS unit in time for it to be delivered by July 2013 even after undertaking the necessary preliminary enquiries. In my view, it has failed to discharge this burden as it has failed to adduce any evidence to this effect.

##### The 720 kW Microsoft Opportunity

429    GSS has also not succeeded in showing that it would have had a chance of securing a contract with Microsoft for 720 kW of additional power.

430    GSS has not shown that Microsoft would have accepted the 720 kW proposal. As indicated above at \[412\], GSS presented the 720 kW offer to Microsoft on its own initiative as it was desperate to keep Microsoft as a tenant after it realised that the capital expenditure it needed to fulfil the 1,500 kW Microsoft Opportunity was too high. But the parameters of Microsoft’s search for additional power were always defined by Microsoft alone. Although its requirements evolved over time, the evidence does not show that Microsoft was willing to _negotiate_ the amount of additional power it was going to get. GSS was not in any position to influence Microsoft’s requirements for additional power. In this light, GSS’s argument that negotiations between it and Microsoft tended to move very quickly such that it was “entirely possible for \[GSS\] and Microsoft to enter into a formal agreement on the spot if \[GSS\] had a technical solution that aligned with Microsoft’s specified requirements” takes it nowhere.[\[note: 709\]](#Ftn_709) The speed at which negotiations move has nothing to do with whether the Microsoft was willing to exercise any flexibility in the negotiations. Against this backdrop, GSS must show that its 720 kW offer would either have met Microsoft’s requirements, or would have caused Microsoft to compromise its own requirements at that time. It has failed to do either.

431    Even if it can be shown that Microsoft would have been open to accepting its 720 kW offer, GSS has not shown how Arup’s breaches caused it to lose this opportunity. By the time GSS had made its 720 kW offer to Microsoft, the latter’s requirements had increased to 2,500 kW, and nothing suggests that Microsoft would have been willing to accept anything lower. As Mr Turvey agreed during cross-examination, GSS’s ability to secure the 720 kW contract was “frustrated not by an act of Arup, but by the fact that Microsoft increas\[ed\] their \[power\] requirements … unexpectedly”.[\[note: 710\]](#Ftn_710) Indeed, GSS did not even address the issue of how Arup’s breaches caused it to lose the opportunity in its closing and reply submissions. I therefore find that GSS’s inability to secure the 720 kW opportunity was due to Microsoft increasing its requirements for additional power, rather than Arup’s beaches. For completeness, I also find that GSS has failed in its claim for lost profits arising from this claim.

## GSS’s heads of claim

432    In summary, I deal with each of GSS’s claims in the order presented in the agreed list of issues. For the reasons set out above:

(a)     I dismiss GSS’s claim for the cost of $946,000.00 in implementing the Revised Design to remedy the alleged inadequacies in Arup’s Original Design that GSS alleges results in a shortfall in the Extension’s NBP. There was no NBP shortfall given my finding that parties had varied the original specification downwards to 2,800 kW in the first instance. The Revised Design was also necessitated by the Microsoft tenancy that GSS itself wanted to secure.

(b)     I dismiss GSS’s claim for the additional cost of $2,972,994.19 in relation to the subsequent installation of the fourth DRUPS unit, as a separate project. I have found that the installation of a fourth DRUPS unit had been ruled out at the material time because GSS was facing space and cost constraints (at \[204\]).

(c)     I dismiss GSS’s claim for business/rental/profits, whether on a loss of profits or loss of chance analysis, for both the Pacnet Opportunity and the Microsoft Opportunities. Consequent upon my finding that there was _no_ shortfall in power supplied to the Extension but only a variation of the Contract, GSS has not made out its claim that it would have made these profits if only the spare capacity from the Existing Facility’s SUPS units had not been used to remedy the shortfall in power supplied to the Extension.[\[note: 711\]](#Ftn_711) Even if I leave this reason to one side, I have given my reasons for disallowing the claim above (at \[376\]–\[421\]).

(d)     I dismiss GSS’s claim for costs and expenses amounting to $287,324.90, as at October 2014 and continuing, as a result of the failure of the Revised Design in May 2013.

(e)     I dismiss GSS’s claim for costs and expenses amounting to $295,630.80 for taking measures to remedy the failure of the Revised Design.

(f)     I allow GSS’s claim for additional costs for the provision of additional cooling to rectify Arup’s breaches, but find that GSS is only entitled to nominal damages of $1,000.

(g)     I dismiss GSS’s claim for additional costs amounting to $405,000 to obtain additional SBP to support the Mechanical Load Requirement. Arup was not in breach of its duties in providing the SBP that it did.

(h)     I dismiss GSS’s claims in relation to the chillers, these being $136,000 for the cost of sealing the louvers providing for water leakage detection for the fan control units and BMS monitoring for the three chiller units; $118,806 to repair the faults in the chiller units; and $24,000.00 in respect of the staff time expended to restart the chillers, stabilise the cooling system and conduct checks in the Extension for any faults, trips or temperature-related issues.

(i)     I dismiss GSS’s claim for $1,000,000 to conduct further T&C of the M&E system for latent defects that have yet to emerge. GSS had alleged that this was necessitated by Arup’s breaches of its obligations to ensure proper T&C of the Extension.[\[note: 712\]](#Ftn_712) But I have found there to be no such breach; Arup had recommended the bypass test and, whether in relation to Phase 1 or Phase 2 T&C, any inadequacy in testing was attributable to instructions given or constraints imposed by GSS (such as the STSs not being available on the tight timeline, or Microsoft being a live customer). GSS’s claim under this head is also unmeritorious for other reasons. First, given its pleading that _further_ T&C had to be carried out to check for latent defects, it is surprising that GSS had not already done so by the time of trial. GSS would have been aware of such a need by 2014, after Mr Hamer conducted his various tests on the DRUPS and STSs.[\[note: 713\]](#Ftn_713) This would have given them at least two to three years to carry out such further T&C. While I acknowledge that T&C in a live environment requires more time than usual, a delay of such magnitude raises doubts as to whether this claim is a genuine one. Secondly, GSS has not even sought to particularise what these alleged latent defects would be, making its claim speculative.

433    I dismiss GSS’s claim for further damages in addition to the foregoing. GSS has not established that Arup is under any additional duties.

## Arup’s counterclaims

434    Arup also brought various counterclaims against GSS for work that allegedly fell outside its original scope of works under various invoices referred to by Arup as Scope Change Notifications (“SCNs”). I turn now to analyse whether these counterclaims should be allowed.

### SCN 003(a)/Rev(2) dated 17 May 2011**[\[note: 714\]](#Ftn_714)**

435    Arup alleges that this SCN for the sum of $17,590.80 was for work done by Arup with regard to the design and construction review of an additional 30 STSs for the Extension for the purposes of the Microsoft lease. This work fell outside the scope of Arup’s original obligations under the Fee Proposal, which did not require the incorporation of STSs.[\[note: 715\]](#Ftn_715) GSS’s case is that this SCN was necessitated by Arup’s breach of the original NB specification, and therefore was work done to rectify its own breaches.[\[note: 716\]](#Ftn_716)

436    As I have found above at \[249\], the inclusion of STSs fell outside of Arup’s original scope of works under the Fee Proposal, and amounted to a variation. Mr Guth also admitted that the work undertaken by Arup on the incorporation of STSs into its design was in addition to Arup’s original scope of works.[\[note: 717\]](#Ftn_717) I therefore allow Arup’s counterclaim under this SCN.

### SCN 003(b)/Rev(2) dated 17 May 2011**[\[note: 718\]](#Ftn_718)**

437    According to Arup, this SCN for $33,940.40 reflects work done for the design and construction review of the additional power requirements after GSS had revised the original NB specification upwards to 4,000 kW, above and beyond Arup’s original scope of works.[\[note: 719\]](#Ftn_719) GSS’s case is that this SCN was necessitated by Arup’s breach of the original NB specification, and therefore was work done to rectify its own breaches.[\[note: 720\]](#Ftn_720)

438    Following from my finding that the increase to 4,000 kW was a variation occasioned by GSS’s need to meet its contractual obligations with Microsoft and not a breach on Arup’s part, I allow Arup’s counterclaim under this SCN.

### SCN 004/Rev(2) dated 17 May 2011**[\[note: 721\]](#Ftn_721)**

439    According to Arup, this SCN for the sum of $18,832 reflects work done in respect of fit-out coordination requested by GSS whereby Arup was asked to:[\[note: 722\]](#Ftn_722)

(a)     review, monitor, and assist the main contractor to produce a combined coordinated service layout, including review of Microsoft’s intended lease rack arrangements and lighting layout/circuiting;

(b)     ensure that all high level and low level coordination and mounting heights are in accordance with GSS’s and the Microsoft lease requirements; and

(c)     attend to the coordination and construction review of the coordinate M&E, fire, lighting, and security system layouts for May to September 2010, including T&C of fit-out services.

As Arup was only the consultant in respect of M&E issues, these works fell outside its original scope of works.

440    GSS objects to this claim and alleges there is no evidence that Arup actually undertook the abovementioned works. This is compounded by the fact that there were no time sheets attached to the SCN which showed what additional works were performed by Arup. Further, GSS contends that Arup was merely asked to design various aspects of the base building services, which fell within its obligation to review and approve all contractors’ and manufacturers’ shop drawings to ensure that they accurately reflect design intent.[\[note: 723\]](#Ftn_723) Finally, GSS also points to Mr Adcock’s admission that none of the documents attached to the SCN actually showed that Arup had actually undertaken the additional works.[\[note: 724\]](#Ftn_724)

441    I disallow Arup’s counterclaim for SCN 004/Rev(2) on the basis that there is no evidence that Arup actually undertook the abovementioned works. The SCN and the minutes of meeting do not support Arup’s claim. As Mr Adcock admitted,[\[note: 725\]](#Ftn_725) none of the documents attached to the SCN showed that Arup had actually undertaken these works.

### SCN 005/Rev(2) dated 17 May 2011**[\[note: 726\]](#Ftn_726)**

442    According to Arup, this SCN for the sum of $6,719.60 covers work done by Arup in reviewing the CRAC pipework design that was issued for construction, and ensuring that it matched GSS’s Sydney facility.[\[note: 727\]](#Ftn_727) GSS objects to this claim on the basis that the work undertaken concerns a further development of the design for the CRAC pipework, which fell within Arup’s original scope of works.[\[note: 728\]](#Ftn_728)

443    I allow Arup’s counterclaim for SCN 005/Rev(2). I find that Arup performed these works under a request from BurnsBridge Sweett to issue change control proposal forms,[\[note: 729\]](#Ftn_729) which indicates that there was a change in the scope of work. This finding is supported by Mr Guth’s concession that GSS had asked Arup to “review and potentially change the CRAC pipework design”.[\[note: 730\]](#Ftn_730)

### SCN 006/Rev(2) dated 17 May 2011**[\[note: 731\]](#Ftn_731)**

444    According to Arup, this SCN for the sum of $6,420 covers work done by Arup to undertake an investigation and re-design of the existing fuel system pipework as requested by GSS.[\[note: 732\]](#Ftn_732) I note that GSS did not object to this claim in its closing submissions. More significantly, Mr Guth admitted that the work described in this SCN was for additional work that fell outside of Arup’s original scope of works.[\[note: 733\]](#Ftn_733) I therefore allow Arup’s counterclaim for SCN 006/Rev(2).

### SCN 007/Rev(2) dated 17 May 2011**[\[note: 734\]](#Ftn_734)**

445    According to Arup, this SCN is for the sum of $6,676.80 for work done by Arup in preparing Phase 1 of the IST test documents and scripts. This went beyond Arup’s obligation to witness T&C, and therefore constituted a variation to Arup’s original scope of works.[\[note: 735\]](#Ftn_735) GSS objects to this claim on the basis that Mr Adcock had admitted that the work done pursuant to this SCN fell within Arup’s original scope of works to assist Gammon to produce the IST test scripts.[\[note: 736\]](#Ftn_736)

446    In my view, Arup’s counterclaim for SCN 007/Rev(2) should be allowed since it fell outside of Arup’s original scope of works. As I have found earlier at \[282\]–\[283\], Gammon was originally responsible for producing the IST test scripts for Phase 1 of T&C, and Arup was asked to take over Gammon’s responsibilities as there were genuine concerns over Gammon’s ability to produce the test scripts in time and to an acceptable standard. I note that Mr Adcock had admitted that Arup’s original scope of works included an obligation to produce the Phase 1 IST test scripts.[\[note: 737\]](#Ftn_737) Given my findings on the sequence of events leading up to Arup assuming responsibility for producing the Phase 1 IST test scripts, I find that this Mr Adcock was likely to have been mistaken when he made this admission.

### SCN 008/Rev(1) dated 17 May 2011**[\[note: 738\]](#Ftn_738)**

447    According to Arup, this SCN is for the sum of $94,802 and covers work done by Arup to attend to coordinate the installation of the M&E equipment so as to ensure a successful Phase 1 completion and client handover to Microsoft on 15 August 2010.[\[note: 739\]](#Ftn_739) GSS objects to this claim on the basis that the work done was within Arup’s original scope of works, even though the timeline for carrying out the works was delayed. Additionally, Mr Adcock had also admitted that Arup’s scope of works had not increased in any way.[\[note: 740\]](#Ftn_740)

448    I disallow Arup’s counterclaim for SCN 008/Rev(2) since it has not shown that the work done pursuant to this SCN fell outside of its original scope of works. In my view, Mr Adcock’s admission that Arup would have had to spend the time to carry out the same work in any case shows that Arup’s scope of works had not changed in any way.[\[note: 741\]](#Ftn_741)

## Conclusion

449    I have found that GSS is entitled to only nominal damages of $1,000 for Arup’s breach of its obligations regarding the provision of additional cooling. I allow Arup’s counterclaims for a total of $71,347.60 under SCN003(a), SCN003(b), SCN005, SCN006 and SCN007. The net result is that $70,347.60 is due from GSS to Arup, given that GSS accepts that Arup’s counterclaims should be set off against its own claims.[\[note: 742\]](#Ftn_742)

450    Unless parties can agree, I will hear the parties on costs.

* * *

[\[note: 1\]](#Ftn_1_1)AEIC of Mr Paddy dated 01.11.2016 at para 7.

[\[note: 2\]](#Ftn_2_1)1AB5.

[\[note: 3\]](#Ftn_3_1)AEIC of Mr Turvey dated 31.10.2016 at para 6.

[\[note: 4\]](#Ftn_4_1)AEIC of Mr Peck dated 20.12.2016 at p 26.

[\[note: 5\]](#Ftn_5_1)Tr/15.08.2017/190, 147/2-6, 6-7.

[\[note: 6\]](#Ftn_6_1)AEIC of Mr Ansett dated 13.12.2016 at p 114.

[\[note: 7\]](#Ftn_7_1)1AB7.

[\[note: 8\]](#Ftn_8_1)AEIC of Mr Ansett dated 13.12.2016 at p 109.

[\[note: 9\]](#Ftn_9_1)AEIC of Mr Peck dated 20.12.2016 at p 26; AEIC of Mr Ansett dated 13.12.2016 at p 105.

[\[note: 10\]](#Ftn_10_1)AEIC of Mr Peck dated 20.12.2016 at p 26, lines 589-593.

[\[note: 11\]](#Ftn_11_1)AEIC of Mr Ansett dated 13.12.2016 at p 110.

[\[note: 12\]](#Ftn_12_1)AEIC of Mr Peck dated 20.12.2016 at p 26, lines 589-602.

[\[note: 13\]](#Ftn_13_1)AEIC of Mr Peck dated 20.12.2016 at p 29.

[\[note: 14\]](#Ftn_14_1)1AB3.

[\[note: 15\]](#Ftn_15_1)1AB3; 6AB3405.

[\[note: 16\]](#Ftn_16_1)1AB588; AEIC of Mr Turvey dated 31.10.2016 at para 13.

[\[note: 17\]](#Ftn_17_1)AEIC of Mr Peck dated 20.12.2016 at p 29, lines 678-684.

[\[note: 18\]](#Ftn_18_1)1AB3.

[\[note: 19\]](#Ftn_19_1)1AB3; AEIC of Mr Turvey dated 31.10.2016 at para 11.

[\[note: 20\]](#Ftn_20_1)Tr/15.08.2017/84/1-10; AEIC of Mr Ma dated 28.10.2016 at para 48; Tr 15.03.2017/36-38.

[\[note: 21\]](#Ftn_21_1)2AB742; AEIC of Mr Ma dated 28.10.2016 at para 50.

[\[note: 22\]](#Ftn_22_1)AEIC of Mr Peck dated 20.12.2016 at p 57; AEIC of Mr Ma dated 28.10.2016 at paras 50-51.

[\[note: 23\]](#Ftn_23_1)AEIC of Mr Ma dated 28.10.2016 at paras 47-49.

[\[note: 24\]](#Ftn_24_1)2AB741; AEIC of Mr Ma dated 28.10.2016 at paras 27-28.

[\[note: 25\]](#Ftn_25_1)Tr/16.03.2017/101.

[\[note: 26\]](#Ftn_26_1)1AB588.

[\[note: 27\]](#Ftn_27_1)1AB588-589.

[\[note: 28\]](#Ftn_28_1)1AB585.

[\[note: 29\]](#Ftn_29_1)1AB591.

[\[note: 30\]](#Ftn_30_1)1AB592.

[\[note: 31\]](#Ftn_31_1)Tr/17.08.2017/59-60/19-25.

[\[note: 32\]](#Ftn_32_1)Tr/17.08.2017/60, 85/1-6, 2-4.

[\[note: 33\]](#Ftn_33_1)DBD247–25.

[\[note: 34\]](#Ftn_34_1)Tr/17.08.2017/64/13-25.

[\[note: 35\]](#Ftn_35_1)Tr/17.08.2017/64/13-25.

[\[note: 36\]](#Ftn_36_1)14AB8341.

[\[note: 37\]](#Ftn_37_1)AEIC of Mr Hamer dated 28.10.2016 at para 85.

[\[note: 38\]](#Ftn_38_1)1AB230.

[\[note: 39\]](#Ftn_39_1)1AB396 and 1AB240-241.

[\[note: 40\]](#Ftn_40_1)11AB6289.

[\[note: 41\]](#Ftn_41_1)1AB245, 1AB290.

[\[note: 42\]](#Ftn_42_1)1AB474, Tr/01.03.2017/61/16-17.

[\[note: 43\]](#Ftn_43_1)1AB557, 604 and 2AB695 and 908-971.

[\[note: 44\]](#Ftn_44_1)5AB2511.

[\[note: 45\]](#Ftn_45_1)5AB2515.

[\[note: 46\]](#Ftn_46_1)2AB1056.

[\[note: 47\]](#Ftn_47_1)5AB2593.

[\[note: 48\]](#Ftn_48_1)6AB3361.

[\[note: 49\]](#Ftn_49_1)6AB3434.

[\[note: 50\]](#Ftn_50_1)Tr/28.02.2017/139/14-19.

[\[note: 51\]](#Ftn_51_1)7AB4134; AEIC of Mr Paddy dated 1.11.2016 at para 65; AEIC of Mr Guth dated 31.10.2016 at para 27.

[\[note: 52\]](#Ftn_52_1)AEIC of Mr Paddy dated 1.11.2016 at para 65.

[\[note: 53\]](#Ftn_53_1)8AB4410.

[\[note: 54\]](#Ftn_54_1)Tr/28.2.2017/142/9-143/6.

[\[note: 55\]](#Ftn_55_1)7AB4174.

[\[note: 56\]](#Ftn_56_1)AEIC of Mr Guth dated 31.10.2016 at para.31.

[\[note: 57\]](#Ftn_57_1)7AB4249.

[\[note: 58\]](#Ftn_58_1)AEIC of Mr Turvey dated 31.10.2016 at pp 63-64.

[\[note: 59\]](#Ftn_59_1)SOC at para 11.

[\[note: 60\]](#Ftn_60_1)SOC at para 10.

[\[note: 61\]](#Ftn_61_1)SOC at para 15.

[\[note: 62\]](#Ftn_62_1)SOC at para 19.

[\[note: 63\]](#Ftn_63_1)SOC at para 21.

[\[note: 64\]](#Ftn_64_1)SOC at paras 22-23.

[\[note: 65\]](#Ftn_65_1)SOC at para 24.

[\[note: 66\]](#Ftn_66_1)SOC at para 23.

[\[note: 67\]](#Ftn_67_1)SOC at para 25.

[\[note: 68\]](#Ftn_68_1)SOC at para 26.

[\[note: 69\]](#Ftn_69_1)SOC at para 28.

[\[note: 70\]](#Ftn_70_1)SOC at paras 27 and 29.

[\[note: 71\]](#Ftn_71_1)SOC at para 30.

[\[note: 72\]](#Ftn_72_1)Tr/16.08.2017/90/7-11.

[\[note: 73\]](#Ftn_73_1)Tr/16.08.2017/91/8-14.

[\[note: 74\]](#Ftn_74_1)Tr/16.08.2017/95/12-96/21.

[\[note: 75\]](#Ftn_75_1)Tr/16.08.2017/94/9-13, 95/4-7.

[\[note: 76\]](#Ftn_76_1)Tr/16.08.2017/91/4-5.

[\[note: 77\]](#Ftn_77_1)PCS at para 238.

[\[note: 78\]](#Ftn_78_1)SOC at para 31.

[\[note: 79\]](#Ftn_79_1)SOC at para 32.

[\[note: 80\]](#Ftn_80_1)PCS at para 523.

[\[note: 81\]](#Ftn_81_1)SOC at para 33.

[\[note: 82\]](#Ftn_82_1)D&CC at paras 6, 8 and 9.

[\[note: 83\]](#Ftn_83_1)D&CC at paras 15, 17–19 and 21.

[\[note: 84\]](#Ftn_84_1)F&BP dated 1.10.2015 at paras 3(c) and 4(a).

[\[note: 85\]](#Ftn_85_1)F&BP dated 1.10.2015 at paras 4(1)(c)(1) and 4(1)(c)(3).

[\[note: 86\]](#Ftn_86_1)F&BP dated 1.10.2015 at para 5(a)(1).

[\[note: 87\]](#Ftn_87_1)F&BP dated 1.10.2015 at para 5(b)(1).

[\[note: 88\]](#Ftn_88_1)F&BP dated 1.10.2015 at para 5(c)(1).

[\[note: 89\]](#Ftn_89_1)D&CC at paras 22–29.

[\[note: 90\]](#Ftn_90_1)D&CC at para 31.

[\[note: 91\]](#Ftn_91_1)F&BP dated 1.10.2015 at para 7(c)(1).

[\[note: 92\]](#Ftn_92_1)D&CC at para 31(c), F&BP dated 1.10.2015 at para 9(a).

[\[note: 93\]](#Ftn_93_1)F&BP dated 1.10.2015 at para 9(d)(2).

[\[note: 94\]](#Ftn_94_1)D&CC at para 31(d), F&BP dated 1.10.2015 at para 11(b).

[\[note: 95\]](#Ftn_95_1)D&CC at paras 32 and 33.

[\[note: 96\]](#Ftn_96_1)D&CC at para 33(b).

[\[note: 97\]](#Ftn_97_1)D&CC at para 36.

[\[note: 98\]](#Ftn_98_1)D&CC at para 38.

[\[note: 99\]](#Ftn_99_1)D&CC at para 41.

[\[note: 100\]](#Ftn_100_1)D&CC at para 42(a).

[\[note: 101\]](#Ftn_101_1)D&CC at paras 43–44.

[\[note: 102\]](#Ftn_102_1)D&CC at paras 48 and 50.

[\[note: 103\]](#Ftn_103_1)D&CC at para 50.

[\[note: 104\]](#Ftn_104_1)D&CC at para 53.

[\[note: 105\]](#Ftn_105_1)D&CC at para 57.

[\[note: 106\]](#Ftn_106_1)D&CC at paras 49, 51–52 and 54.

[\[note: 107\]](#Ftn_107_1)R&DCC at para 9.

[\[note: 108\]](#Ftn_108_1)R&DCC at para 17.

[\[note: 109\]](#Ftn_109_1)R&DCC at para 17(7).

[\[note: 110\]](#Ftn_110_1)R&DCC at para 21(2).

[\[note: 111\]](#Ftn_111_1)R&DCC at paras 24 and 26–27.

[\[note: 112\]](#Ftn_112_1)R&DCC at paras 27–28.

[\[note: 113\]](#Ftn_113_1)R&DCC at para 24(1).

[\[note: 114\]](#Ftn_114_1)R&DCC at para 24(2).

[\[note: 115\]](#Ftn_115_1)R&DCC at paras 36 and 39–40.

[\[note: 116\]](#Ftn_116_1)R&DCC at paras 26(9) and 27(2).

[\[note: 117\]](#Ftn_117_1)R&DCC at para 26(10).

[\[note: 118\]](#Ftn_118_1)R&DCC at para 24(1).

[\[note: 119\]](#Ftn_119_1)R&DCC at para 24(2).

[\[note: 120\]](#Ftn_120_1)R&DCC at paras 47 and 48.

[\[note: 121\]](#Ftn_121_1)R&DCC at para 48(8).

[\[note: 122\]](#Ftn_122_1)R&DCC at para 48(9).

[\[note: 123\]](#Ftn_123_1)AEIC of Mr Turvey dated 31.10.2016 at para 3; Tr/22.02.2017/47/17-23.

[\[note: 124\]](#Ftn_124_1)AEIC of Mr Guth dated 31.10.2016 at paras 1-2 and 9.

[\[note: 125\]](#Ftn_125_1)AEIC of Mr Paddy dated 1.11.2016 at para 5.

[\[note: 126\]](#Ftn_126_1)AEIC of Mr Paddy dated 1.11.2016 at para 6.

[\[note: 127\]](#Ftn_127_1)AEIC of Mr Hamer dated 28.10.2016 at paras 5 and 6.

[\[note: 128\]](#Ftn_128_1)AEIC of Mr Peck dated 20.12.2016 at pp 1 and 9.

[\[note: 129\]](#Ftn_129_1)AEIC of RLB dated 24.2.2017 at para 1 and p 18.

[\[note: 130\]](#Ftn_130_1)AEIC of RLB dated 24.2.2017 at para 2 and p 19.

[\[note: 131\]](#Ftn_131_1)Tr/14.08.2017/102.

[\[note: 132\]](#Ftn_132_1)Tr/14.08.2017/107-108.

[\[note: 133\]](#Ftn_133_1)Tr/14.08.2017/134.

[\[note: 134\]](#Ftn_134_1)Tr/15.08.2017/185.

[\[note: 135\]](#Ftn_135_1)Tr/14.08.2017/50-56.

[\[note: 136\]](#Ftn_136_1)Tr/14.08.2017/90-91.

[\[note: 137\]](#Ftn_137_1)Tr/14.08.2017/87-91.

[\[note: 138\]](#Ftn_138_1)Tr/14.08.2017/88.

[\[note: 139\]](#Ftn_139_1)Tr/14.08.2017/113-114.

[\[note: 140\]](#Ftn_140_1)Tr/22.08.2017/27-30.

[\[note: 141\]](#Ftn_141_1)Tr/22.08.2017/112-113.

[\[note: 142\]](#Ftn_142_1)Tr/22.08.2017/119-120.

[\[note: 143\]](#Ftn_143_1)Tr/22.08.2018/135-136.

[\[note: 144\]](#Ftn_144_1)DCS at paras 309-311.

[\[note: 145\]](#Ftn_145_1)19AB11598.

[\[note: 146\]](#Ftn_146_1)AEIC of Mr Adcock dated 28.10.2016 at para 20.

[\[note: 147\]](#Ftn_147_1)DCS at paras 305–307.

[\[note: 148\]](#Ftn_148_1)AEIC of Mr Adcock dated 28.10.2016 at pp 70, 91 and 97.

[\[note: 149\]](#Ftn_149_1)Tr/01.03.2017/32–33.

[\[note: 150\]](#Ftn_150_1)AEIC of Mr Adcock dated 28.10.2016 at para 16.

[\[note: 151\]](#Ftn_151_1)PRS at paras 382–383.

[\[note: 152\]](#Ftn_152_1)Tr/06.03.2017/10.18-25.

[\[note: 153\]](#Ftn_153_1)PCS at paras 65, 69 and 77.

[\[note: 154\]](#Ftn_154_1)D&CC at para 28.

[\[note: 155\]](#Ftn_155_1)DCS at paras 65–66.

[\[note: 156\]](#Ftn_156_1)PCS at para 77; SOC at paras 22–23.

[\[note: 157\]](#Ftn_157_1)SOC at paras 25, 26, 28, 30–32.

[\[note: 158\]](#Ftn_158_1)SOC at para 33.

[\[note: 159\]](#Ftn_159_1)SOC at para 24.

[\[note: 160\]](#Ftn_160_1)PCS at para 76; SOC at paras 24, 25, 28 and 31.

[\[note: 161\]](#Ftn_161_1)SOC at para 32.

[\[note: 162\]](#Ftn_162_1)D&CC at para 29; DCS at para 205.

[\[note: 163\]](#Ftn_163_1)AEIC of Mr Peck dated 20.12.2016 at p 28.

[\[note: 164\]](#Ftn_164_1)Tr/15.08.2017/158-160.

[\[note: 165\]](#Ftn_165_1)Tr/15.08.2017/158-160.

[\[note: 166\]](#Ftn_166_1)AEIC of Mr Peck dated 20.12.2016 at p 30.

[\[note: 167\]](#Ftn_167_1)1AB588-589.

[\[note: 168\]](#Ftn_168_1)Exhibit D13-1.

[\[note: 169\]](#Ftn_169_1)11AB6322.

[\[note: 170\]](#Ftn_170_1)PCS at para 265.

[\[note: 171\]](#Ftn_171_1)AEIC of Mr Turvey dated 31.10.2016 at para 91.

[\[note: 172\]](#Ftn_172_1)Tr/22.02.2017/51-52/25, 1-11.

[\[note: 173\]](#Ftn_173_1)1AB588.

[\[note: 174\]](#Ftn_174_1)D&CC at para 15.

[\[note: 175\]](#Ftn_175_1)D&CC at para 19.

[\[note: 176\]](#Ftn_176_1)PCS at paras 21–28.

[\[note: 177\]](#Ftn_177_1)SOC at para 10.

[\[note: 178\]](#Ftn_178_1)Tr/14.08.2017/46, 61/19-25, 15-25.

[\[note: 179\]](#Ftn_179_1)Tr/14.08.2017/63, 71/1-10, 1-14.

[\[note: 180\]](#Ftn_180_1)1AB487-488.

[\[note: 181\]](#Ftn_181_1)1AB487.

[\[note: 182\]](#Ftn_182_1)6AB3442.

[\[note: 183\]](#Ftn_183_1)15AB8960.

[\[note: 184\]](#Ftn_184_1)Tr/22.02.2017/68/13-17.

[\[note: 185\]](#Ftn_185_1)Tr/22.07.2017/69/6-9.

[\[note: 186\]](#Ftn_186_1)6AB3456.

[\[note: 187\]](#Ftn_187_1)PRS at para 26.

[\[note: 188\]](#Ftn_188_1)Tr/14.08.2017/45, 46/11-25, 1-3.

[\[note: 189\]](#Ftn_189_1)Tr/14.08.2017/84/8-15.

[\[note: 190\]](#Ftn_190_1)Tr/28.02.2017/46/1-21, Tr/02.03.2017/134/1-5.

[\[note: 191\]](#Ftn_191_1)Tr/28.02.2017/43/9.

[\[note: 192\]](#Ftn_192_1)Tr/22.2.2017/69/6-9.

[\[note: 193\]](#Ftn_193_1)SOC at paras 11(3) and 27.

[\[note: 194\]](#Ftn_194_1)AEIC of Mr Ma dated 28.10.2016 at para 6, AEIC of Mr Adcock dated 28.10.2016 at para 7.

[\[note: 195\]](#Ftn_195_1)1AB3.

[\[note: 196\]](#Ftn_196_1)1AB61-74.

[\[note: 197\]](#Ftn_197_1)1AB98.

[\[note: 198\]](#Ftn_198_1)1AB150-151.

[\[note: 199\]](#Ftn_199_1)1AB149.

[\[note: 200\]](#Ftn_200_1)AEIC of Mr Paddy dated 1.11.2016 at p 259.

[\[note: 201\]](#Ftn_201_1)AEIC of Mr Adcock dated 28.10.2016 at para 47.

[\[note: 202\]](#Ftn_202_1)1AB242-243.

[\[note: 203\]](#Ftn_203_1)1AB242.

[\[note: 204\]](#Ftn_204_1)1AB590.

[\[note: 205\]](#Ftn_205_1)Tr/06.03.2017/21/2-9, Tr/10.03.2017/163, 164/16-25, 1-11.

[\[note: 206\]](#Ftn_206_1)1AB482.

[\[note: 207\]](#Ftn_207_1)1AB 480; 1AB483.

[\[note: 208\]](#Ftn_208_1)1AB236-237.

[\[note: 209\]](#Ftn_209_1)Tr/01.03.2017/57-59.

[\[note: 210\]](#Ftn_210_1)1AB500-546.

[\[note: 211\]](#Ftn_211_1)1AB506.

[\[note: 212\]](#Ftn_212_1)1AB588.

[\[note: 213\]](#Ftn_213_1)1AB474.

[\[note: 214\]](#Ftn_214_1)PCS at paras 88-98.

[\[note: 215\]](#Ftn_215_1)1AB557, 572, 604, 607, 624.

[\[note: 216\]](#Ftn_216_1)Tr/1.03.2017/67.

[\[note: 217\]](#Ftn_217_1)2AB660.

[\[note: 218\]](#Ftn_218_1)AEIC of Mr Paddy dated 1.11.2016 at para 35; 2AB660-662.

[\[note: 219\]](#Ftn_219_1)2AB1069.

[\[note: 220\]](#Ftn_220_1)2AB702, 2AB695.

[\[note: 221\]](#Ftn_221_1)2AB908-971.

[\[note: 222\]](#Ftn_222_1)2AB814.

[\[note: 223\]](#Ftn_223_1)2AB1235.

[\[note: 224\]](#Ftn_224_1)1AB605, 620.

[\[note: 225\]](#Ftn_225_1)2AB695 and 696.

[\[note: 226\]](#Ftn_226_1)2AB704.

[\[note: 227\]](#Ftn_227_1)2AB695.

[\[note: 228\]](#Ftn_228_1)2AB908-971.

[\[note: 229\]](#Ftn_229_1)Tr/01.03.2017/5-6.

[\[note: 230\]](#Ftn_230_1)Tr/01.03.2017/5-8

[\[note: 231\]](#Ftn_231_1)AEIC of Mr Paddy dated 1.11.2016 at para 5.

[\[note: 232\]](#Ftn_232_1)AEIC of Mr Paddy dated 1.11.2016 at paras 5 and 6.

[\[note: 233\]](#Ftn_233_1)Tr/01.03.2017/59/4-23.

[\[note: 234\]](#Ftn_234_1)1AB245 and 1AB290.

[\[note: 235\]](#Ftn_235_1)2AB814-848.

[\[note: 236\]](#Ftn_236_1)2AB854.

[\[note: 237\]](#Ftn_237_1)2AB859.

[\[note: 238\]](#Ftn_238_1)Tr/01.03.2017/68-69.

[\[note: 239\]](#Ftn_239_1)2AB695.

[\[note: 240\]](#Ftn_240_1)Tr/01.03.2017/68-69.

[\[note: 241\]](#Ftn_241_1)Tr/01.03.2017/88-89/24-25, 1-10.

[\[note: 242\]](#Ftn_242_1)Tr/01.03.2017/77 and Tr/01.03.2017/92-93.

[\[note: 243\]](#Ftn_243_1)Tr/1.03.2017/78/6-9.

[\[note: 244\]](#Ftn_244_1)Tr/1.03.2017/104/7-13.

[\[note: 245\]](#Ftn_245_1)Tr/1.03.2017/67/24-72/25.

[\[note: 246\]](#Ftn_246_1)5AB2484.

[\[note: 247\]](#Ftn_247_1)5AB2508-2510.

[\[note: 248\]](#Ftn_248_1)5AB2508.

[\[note: 249\]](#Ftn_249_1)5AB2492.

[\[note: 250\]](#Ftn_250_1)5AB2510

[\[note: 251\]](#Ftn_251_1)5AB2507.

[\[note: 252\]](#Ftn_252_1)5AB2508.

[\[note: 253\]](#Ftn_253_1)5AB2511.

[\[note: 254\]](#Ftn_254_1)Tr/10.03.2017/32.

[\[note: 255\]](#Ftn_255_1)5AB2515.

[\[note: 256\]](#Ftn_256_1)Tr/1.03.2017/108/23-24.

[\[note: 257\]](#Ftn_257_1)Tr/1.03.2017/102-111.

[\[note: 258\]](#Ftn_258_1)5AB2519.

[\[note: 259\]](#Ftn_259_1)Tr/10.03.2017/37-41.

[\[note: 260\]](#Ftn_260_1)5AB2528.

[\[note: 261\]](#Ftn_261_1)5AB2537-2540.

[\[note: 262\]](#Ftn_262_1)5AB2541-2542.

[\[note: 263\]](#Ftn_263_1)Tr/18.08.2017/46-49.

[\[note: 264\]](#Ftn_264_1)Tr/18.08.2017/53-54.

[\[note: 265\]](#Ftn_265_1)Tr/18.08.2017/58-59.

[\[note: 266\]](#Ftn_266_1)Tr/10.03.2017/50/6-12.

[\[note: 267\]](#Ftn_267_1)AEIC of Mr Adcock dated 28.10.2016 at para 92.

[\[note: 268\]](#Ftn_268_1)Tr/10.03.2017/48-50.

[\[note: 269\]](#Ftn_269_1)Tr/10.03.2017/50/6-12.

[\[note: 270\]](#Ftn_270_1)Tr/10.03.2017/50/3-5.

[\[note: 271\]](#Ftn_271_1)5AB2593.

[\[note: 272\]](#Ftn_272_1)6AB3356.

[\[note: 273\]](#Ftn_273_1)6AB3400.

[\[note: 274\]](#Ftn_274_1)6AB3434.

[\[note: 275\]](#Ftn_275_1)1AB3.

[\[note: 276\]](#Ftn_276_1)6AB3457.

[\[note: 277\]](#Ftn_277_1)6AB3457.

[\[note: 278\]](#Ftn_278_1)6AB3456.

[\[note: 279\]](#Ftn_279_1)6AB3465-3466.

[\[note: 280\]](#Ftn_280_1)Tr/28.2.2017/167/12-19.

[\[note: 281\]](#Ftn_281_1)AEIC of Mr Paddy dated 1.11.2016 at para 65.

[\[note: 282\]](#Ftn_282_1)AEIC of Mr Guth dated 31.10.2016 at para 27.

[\[note: 283\]](#Ftn_283_1)8AB4431.

[\[note: 284\]](#Ftn_284_1)AEIC of Mr Paddy dated 1.11.2016 at pp 332-333.

[\[note: 285\]](#Ftn_285_1)AEIC of Mr Paddy dated 1.11.2016 at para 78; Tr/01.03.2017/123-128.

[\[note: 286\]](#Ftn_286_1)8AB4391.

[\[note: 287\]](#Ftn_287_1)8AB4427-4430.

[\[note: 288\]](#Ftn_288_1)8AB4428.

[\[note: 289\]](#Ftn_289_1)8AB4430.

[\[note: 290\]](#Ftn_290_1)Tr/28.02.2017/142-143/7-25, 1-25.

[\[note: 291\]](#Ftn_291_1)8AB4427.

[\[note: 292\]](#Ftn_292_1)7AB4174.

[\[note: 293\]](#Ftn_293_1)8AB4437.

[\[note: 294\]](#Ftn_294_1)8AB4662-4664.

[\[note: 295\]](#Ftn_295_1)AEIC of Mr Adcock dated 28.10.2016 at para 69.

[\[note: 296\]](#Ftn_296_1)8AB4665-4666.

[\[note: 297\]](#Ftn_297_1)AEIC of Mr Paddy dated 1.11.2016 at para 86.

[\[note: 298\]](#Ftn_298_1)Tr/01.03.2017/152/15-22.

[\[note: 299\]](#Ftn_299_1)Tr/01.03.2017/152, 153/23-25, 1-3.

[\[note: 300\]](#Ftn_300_1)Tr/01.03.2017/153/4-8.

[\[note: 301\]](#Ftn_301_1)Tr/01.03.2017/142/2-12.

[\[note: 302\]](#Ftn_302_1)Tr/01.03.2017/150/2-4.

[\[note: 303\]](#Ftn_303_1)Tr/01.03.2017/151/12-14.

[\[note: 304\]](#Ftn_304_1)Tr/01.03.2017/150/5-8.

[\[note: 305\]](#Ftn_305_1)Tr/01.03.2017/144 /12-18.

[\[note: 306\]](#Ftn_306_1)9AB5502.

[\[note: 307\]](#Ftn_307_1)Tr/01.03.2017/149, 150/12-14, 0-18; 9AB5503.

[\[note: 308\]](#Ftn_308_1)Tr/1.03.2017/146-147.

[\[note: 309\]](#Ftn_309_1)Tr/1.03.2017/147-152.

[\[note: 310\]](#Ftn_310_1)Tr/01.03.2017/149/7-10.

[\[note: 311\]](#Ftn_311_1)Tr/01.03.2017/149/5-6.

[\[note: 312\]](#Ftn_312_1)Tr/01.03.2017/153, 154, 155/9-12, 12-25, 1-3.

[\[note: 313\]](#Ftn_313_1)9AB5509.

[\[note: 314\]](#Ftn_314_1)Tr/10.03.2017/148.

[\[note: 315\]](#Ftn_315_1)9AB5505.

[\[note: 316\]](#Ftn_316_1)9AB5532-5533.

[\[note: 317\]](#Ftn_317_1)9AB5614, 5634.

[\[note: 318\]](#Ftn_318_1)9AB5614.

[\[note: 319\]](#Ftn_319_1)10AB5897.

[\[note: 320\]](#Ftn_320_1)10AB5906.

[\[note: 321\]](#Ftn_321_1)11AB6306; Tr/10.03.2017/168/5-11.

[\[note: 322\]](#Ftn_322_1)11AB6306.

[\[note: 323\]](#Ftn_323_1)AEIC of Mr Guth dated 31.10.2016 at paras 61–62.

[\[note: 324\]](#Ftn_324_1)PCS at para 101-102.

[\[note: 325\]](#Ftn_325_1)DCS at para 108.

[\[note: 326\]](#Ftn_326_1)AEIC of Mr Ansett dated 16.01.2017 at p 28.

[\[note: 327\]](#Ftn_327_1)AEIC of Mr Ansett dated 13.12.2016 at p 71.

[\[note: 328\]](#Ftn_328_1)PCS at paras 99-100; DCS at paras 107-109.

[\[note: 329\]](#Ftn_329_1)Tr/14.08.2017/169-170.

[\[note: 330\]](#Ftn_330_1)DCS at para 109a.

[\[note: 331\]](#Ftn_331_1)Tr/14.08.2017/139/1-4

[\[note: 332\]](#Ftn_332_1)Tr/14.08.2017/139 and Tr/14.08.2017/169-170.

[\[note: 333\]](#Ftn_333_1)Tr/14.08.2017/170.

[\[note: 334\]](#Ftn_334_1)AEIC of Mr Ansett dated 13.12.2016 at page 74; Tr/14.08.2017/149 and 156.

[\[note: 335\]](#Ftn_335_1)Tr/14.08.2017/167-168.

[\[note: 336\]](#Ftn_336_1)AEIC of Mr Turvey dated 31.10.2016 at para 71.

[\[note: 337\]](#Ftn_337_1)Tr/14.08.2017/169/2-22.

[\[note: 338\]](#Ftn_338_1)Exhibit D-15.

[\[note: 339\]](#Ftn_339_1)Exhibit D15.

[\[note: 340\]](#Ftn_340_1)Tr/14.08.2017/133/10-12.

[\[note: 341\]](#Ftn_341_1)PCS at para 105.

[\[note: 342\]](#Ftn_342_1)Exhibit D-15.

[\[note: 343\]](#Ftn_343_1)Tr/14.08.2017/149/1-3.

[\[note: 344\]](#Ftn_344_1)Tr/14.08.2017/148/14-22.

[\[note: 345\]](#Ftn_345_1)Tr/14.08.2017/148/14-22; Exhibit D-18.

[\[note: 346\]](#Ftn_346_1)Exhibit D-17.

[\[note: 347\]](#Ftn_347_1)DCS at para 109b.

[\[note: 348\]](#Ftn_348_1)AEIC of Mr Ansett dated 13.12.2016 at Appendix 2.

[\[note: 349\]](#Ftn_349_1)Tr/14.08.2017/136/23.

[\[note: 350\]](#Ftn_350_1)AEIC of Mr Ansett dated 13.12.2016 at Appendix 2.

[\[note: 351\]](#Ftn_351_1)AEIC of Mr Ansett dated 16.01.2017 at p 82.

[\[note: 352\]](#Ftn_352_1)Exhibit D-19.

[\[note: 353\]](#Ftn_353_1)PCS at paras 122 and 124(3).

[\[note: 354\]](#Ftn_354_1)AEIC of Mr Turvey dated 31.10.2016 at para 29.

[\[note: 355\]](#Ftn_355_1)14AB8413.

[\[note: 356\]](#Ftn_356_1)Tr/01.03.2017/p 152-157.

[\[note: 357\]](#Ftn_357_1)DCS at para 17(e).

[\[note: 358\]](#Ftn_358_1)Tr/28.02.2017/66-67.

[\[note: 359\]](#Ftn_359_1)2AB758.

[\[note: 360\]](#Ftn_360_1)AEIC of Mr Paddy dated 1.11.2016 at p 1429.

[\[note: 361\]](#Ftn_361_1)AEIC of Mr Guth dated 31.10.2016 at paras 47-48.

[\[note: 362\]](#Ftn_362_1)2AB752-759.

[\[note: 363\]](#Ftn_363_1)AEIC of Mr Guth dated 31.10.2016 at paras 47-48.

[\[note: 364\]](#Ftn_364_1)AEIC of Mr Paddy dated 1.11.2016 at paras 104-111.

[\[note: 365\]](#Ftn_365_1)11AB6309 at para 1.

[\[note: 366\]](#Ftn_366_1)6AB630911AB6309 at para 2.

[\[note: 367\]](#Ftn_367_1)11AB 6310, para 9.

[\[note: 368\]](#Ftn_368_1)11AB6310, para 11,

[\[note: 369\]](#Ftn_369_1)11AB6710-6711, AEIC of Mr Paddy dated 1.11.2016 at paras 118-120.

[\[note: 370\]](#Ftn_370_1)11AB6710 at para 1.

[\[note: 371\]](#Ftn_371_1)11AB6710 at para 2.

[\[note: 372\]](#Ftn_372_1)11AB6710 at para 2 and 11AB6711 at para 4.

[\[note: 373\]](#Ftn_373_1)11AB6711 para 4.

[\[note: 374\]](#Ftn_374_1)11AB6320-6337, 11AB6752.

[\[note: 375\]](#Ftn_375_1)11AB6322.

[\[note: 376\]](#Ftn_376_1)11AB6323.

[\[note: 377\]](#Ftn_377_1)AEIC of Mr Adcock dated 28.10.2016 at paras 118-122.

[\[note: 378\]](#Ftn_378_1)AEIC of Mr Adcock dated 28.10.2016 at Tabs 45 and 46, 11AB6710 and 11AB6791.

[\[note: 379\]](#Ftn_379_1)11AB6335.

[\[note: 380\]](#Ftn_380_1)11AB6752; Tr/21.02.2017/154–156.

[\[note: 381\]](#Ftn_381_1)11AB6768.

[\[note: 382\]](#Ftn_382_1)11AB6768.

[\[note: 383\]](#Ftn_383_1)11AB6768.

[\[note: 384\]](#Ftn_384_1)11AB6845-6846.

[\[note: 385\]](#Ftn_385_1)11AB6845.

[\[note: 386\]](#Ftn_386_1)Tr/28.02.2017/72/8-14.

[\[note: 387\]](#Ftn_387_1)Tr/02.03.2017/62/10; Tr/02.03.2017/67/9-16.

[\[note: 388\]](#Ftn_388_1)Tr/02.03.2017/66/1-21.

[\[note: 389\]](#Ftn_389_1)Tr/15.08.2017/158-161.

[\[note: 390\]](#Ftn_390_1)Tr/15.08.2017/159-166.

[\[note: 391\]](#Ftn_391_1)Tr/15.08.2017/166.

[\[note: 392\]](#Ftn_392_1)Tr/28.02.2017/71-72.

[\[note: 393\]](#Ftn_393_1)Tr/02.03.2017/26/9-14.

[\[note: 394\]](#Ftn_394_1)Tr/02.03.2017/26/15-19.

[\[note: 395\]](#Ftn_395_1)Tr/02.03.2017/27/1-5.

[\[note: 396\]](#Ftn_396_1)13AB7745.

[\[note: 397\]](#Ftn_397_1)AEIC of Mr Guth dated 31.10.2016 at paras 47-48, DCS para 28.

[\[note: 398\]](#Ftn_398_1)SOC at para 10.

[\[note: 399\]](#Ftn_399_1)R&DCC at paras 26(6) and (9).

[\[note: 400\]](#Ftn_400_1)PCS at paras 121–166.

[\[note: 401\]](#Ftn_401_1)SOC at para 33(2).

[\[note: 402\]](#Ftn_402_1)SOC at para 33(3).

[\[note: 403\]](#Ftn_403_1)Tr/14.08.2017/108/9-16.

[\[note: 404\]](#Ftn_404_1)PCS at para 207.

[\[note: 405\]](#Ftn_405_1)15AB9056-9058; 15AB9077-9079.

[\[note: 406\]](#Ftn_406_1)16AB9902-9918.

[\[note: 407\]](#Ftn_407_1)15AB9054-9055.

[\[note: 408\]](#Ftn_408_1)AEIC of Mr Peck dated 20.12.2016 at pp 118-120.

[\[note: 409\]](#Ftn_409_1)Tr/18.08.2017/8/1-4.

[\[note: 410\]](#Ftn_410_1)15AB9257-9258.

[\[note: 411\]](#Ftn_411_1)AEIC of Mr Peck dated 20.12.2016 at p 10; Tr/15.08.2017/195/6-11.

[\[note: 412\]](#Ftn_412_1)Joint Technical Expert Report p 49.

[\[note: 413\]](#Ftn_413_1)Tr/15.08.2017/195/6-10.

[\[note: 414\]](#Ftn_414_1)AEIC of Mr Martin dated 28.10.2016 at para 35; Tr/03.2017/18/15-19.

[\[note: 415\]](#Ftn_415_1)Tr/16.08.2017/7, 9/2-5, 13-22.

[\[note: 416\]](#Ftn_416_1)Tr/16.08.2017/9/13-22.

[\[note: 417\]](#Ftn_417_1)Tr/16.08.2017/27/9-15.

[\[note: 418\]](#Ftn_418_1)Tr/16.08.2017/24/24-25.

[\[note: 419\]](#Ftn_419_1)AEIC of Mr Martin dated 28.10.2016 at para 36; AEIC of Mr Peck dated 20.12.2016 at p 10; AEIC of Mr Ansett dated 13.12.2016 at p 87.

[\[note: 420\]](#Ftn_420_1)AEIC of Mr Peck dated 20.12.2016 at p 11.

[\[note: 421\]](#Ftn_421_1)AEIC of Mr Martin dated 28.10.2016 at paras 35-37; AEIC of Mr Ansett dated 13.12.2016 at p 87.

[\[note: 422\]](#Ftn_422_1)Exhibit P5.

[\[note: 423\]](#Ftn_423_1)Tr/15.08.2017/141/8-25.

[\[note: 424\]](#Ftn_424_1)AEIC of Mr Hamer dated 28.10.2016) at paras 9-10, 26-34.

[\[note: 425\]](#Ftn_425_1)AEIC of Mr Turvey dated 31.10.2016 at para 96; AEIC of Mr Hamer dated 28.10.2016 at paras 39 and 44-49.

[\[note: 426\]](#Ftn_426_1)AEIC of Mr Hamer dated 28.10.2016 at para 30.

[\[note: 427\]](#Ftn_427_1)AEIC of Mr Hamer dated 28.10.2016 at para 31.

[\[note: 428\]](#Ftn_428_1)Tr/16.08.2017/75/20-22.

[\[note: 429\]](#Ftn_429_1)1AB589.

[\[note: 430\]](#Ftn_430_1)1AB585.

[\[note: 431\]](#Ftn_431_1)PCS at para 45.

[\[note: 432\]](#Ftn_432_1)DCS at para 137.

[\[note: 433\]](#Ftn_433_1)SOC at para 19.

[\[note: 434\]](#Ftn_434_1)SOC at para 30.

[\[note: 435\]](#Ftn_435_1)PCS at paras 238-239.

[\[note: 436\]](#Ftn_436_1)PCS at para 242.

[\[note: 437\]](#Ftn_437_1)PCS at paras 243–244.

[\[note: 438\]](#Ftn_438_1)PCS at paras 247 and 259.

[\[note: 439\]](#Ftn_439_1)R&DCC at para 38.

[\[note: 440\]](#Ftn_440_1)DCRS at para 22(c).

[\[note: 441\]](#Ftn_441_1)DCS at paras 164, 168 and 204; F&BP at para 6(b).

[\[note: 442\]](#Ftn_442_1)DCS at para 107.

[\[note: 443\]](#Ftn_443_1)DCS paras 129, 135-136, 186.

[\[note: 444\]](#Ftn_444_1)F&BP at para 17(c).

[\[note: 445\]](#Ftn_445_1)AEIC of Mr Guth dated 31.10.2018 at para 75.

[\[note: 446\]](#Ftn_446_1)Tr/18.08.2017/23-24.

[\[note: 447\]](#Ftn_447_1)11AB6774, 6794, 6852, 6857, 6871.

[\[note: 448\]](#Ftn_448_1)AEIC of Mr Paddy dated 1.11.2016 at para 139.

[\[note: 449\]](#Ftn_449_1)AEIC of Mr Adcock dated 28.10.2016 at para 135.

[\[note: 450\]](#Ftn_450_1)AEIC of Mr Ansett at p 88 and AEIC of Mr Peck dated 20.12.2016 at p 50, lines 1286-1287.

[\[note: 451\]](#Ftn_451_1)Defendant’s bundle for cross-examination at p 560.

[\[note: 452\]](#Ftn_452_1)PCS at para 516.

[\[note: 453\]](#Ftn_453_1)SOC at para 30.

[\[note: 454\]](#Ftn_454_1)R&DCC at para 21.

[\[note: 455\]](#Ftn_455_1)Opening Statement at paras 75-78.

[\[note: 456\]](#Ftn_456_1)Tr/14.03.2017/50-52.

[\[note: 457\]](#Ftn_457_1)Tr 14.03.2017/52/3-7.

[\[note: 458\]](#Ftn_458_1)Tr 14.03.2017/55/3-10.

[\[note: 459\]](#Ftn_459_1)Tr 14.03.2017/58/1-5.

[\[note: 460\]](#Ftn_460_1)1AB103, 8SAB4948-4962.

[\[note: 461\]](#Ftn_461_1)Tr 14.03.2017/58/15-19.

[\[note: 462\]](#Ftn_462_1)Tr/16.08.2017/84, 91-93; Tr/15.08.2017/191/18-21.

[\[note: 463\]](#Ftn_463_1)DCS at para 130; PCS at para 240.

[\[note: 464\]](#Ftn_464_1)Tr/16.08.2017/165/11-25.

[\[note: 465\]](#Ftn_465_1)Tr/16.08.2017/152/17-25.

[\[note: 466\]](#Ftn_466_1)Tr/15.08.2017/191/18-21.

[\[note: 467\]](#Ftn_467_1)Tr/16.08.2017/75-78.

[\[note: 468\]](#Ftn_468_1)12AB7242-7243; AEIC of Mr Paddy dated 1.11.2016 at para 147; AEIC of Mr Guth dated 31.10.2018 at para 78.

[\[note: 469\]](#Ftn_469_1)AEIC of Mr Ansett dated 13.12.2016 at p 142.

[\[note: 470\]](#Ftn_470_1)DCS at para 178-180.

[\[note: 471\]](#Ftn_471_1)12AB7221.

[\[note: 472\]](#Ftn_472_1)12AB7221, 12AB7226, 13AB7899.

[\[note: 473\]](#Ftn_473_1)12AB7184.

[\[note: 474\]](#Ftn_474_1)Tr/16.08.2017/170/17-25.

[\[note: 475\]](#Ftn_475_1)PCS at para 243(3), DCS at para 186, 12AB7244, 13AB7897.

[\[note: 476\]](#Ftn_476_1)13AB7706.

[\[note: 477\]](#Ftn_477_1)12AB7179.

[\[note: 478\]](#Ftn_478_1)12AB7328.

[\[note: 479\]](#Ftn_479_1)12AB7244.

[\[note: 480\]](#Ftn_480_1)Tr/16.08.2017/168-172.

[\[note: 481\]](#Ftn_481_1)Tr/16.08.2017/171/1-14.

[\[note: 482\]](#Ftn_482_1)12AB7406.

[\[note: 483\]](#Ftn_483_1)Tr/16.08.2017/171.

[\[note: 484\]](#Ftn_484_1)Tr/16.08.2017/169/9-13.

[\[note: 485\]](#Ftn_485_1)12AB7405.

[\[note: 486\]](#Ftn_486_1)12AB7439-7441.

[\[note: 487\]](#Ftn_487_1)2SAB1158-1159.

[\[note: 488\]](#Ftn_488_1)2SAB1158.

[\[note: 489\]](#Ftn_489_1)2SAB1158.

[\[note: 490\]](#Ftn_490_1)2SAB1752SAB1175.

[\[note: 491\]](#Ftn_491_1)Tr/15.08.2017/149, 150/6-25, 1-4.

[\[note: 492\]](#Ftn_492_1)DCS at para 133.

[\[note: 493\]](#Ftn_493_1)12AB742512AB7412.

[\[note: 494\]](#Ftn_494_1)12AB7420.

[\[note: 495\]](#Ftn_495_1)12AB7420.

[\[note: 496\]](#Ftn_496_1)12AB7419.

[\[note: 497\]](#Ftn_497_1)2SAB1176.

[\[note: 498\]](#Ftn_498_1)2SAB1175.

[\[note: 499\]](#Ftn_499_1)2SAB1174.

[\[note: 500\]](#Ftn_500_1)2SAB1173.

[\[note: 501\]](#Ftn_501_1)Tr/28.02.2017/137-138.

[\[note: 502\]](#Ftn_502_1)SOC at para 26(2).

[\[note: 503\]](#Ftn_503_1)SOC at para 26(2).

[\[note: 504\]](#Ftn_504_1)SOC at para 26(5).

[\[note: 505\]](#Ftn_505_1)R&DCC at para 32.

[\[note: 506\]](#Ftn_506_1)F&BP at para 17(a).

[\[note: 507\]](#Ftn_507_1)R&DCC at para 33.

[\[note: 508\]](#Ftn_508_1)R&DCC ara para 17(c).

[\[note: 509\]](#Ftn_509_1)R&DCC at para 32.

[\[note: 510\]](#Ftn_510_1)PCS at para 259.

[\[note: 511\]](#Ftn_511_1)Tr/16.08.2017/60/1-5, 20-25.

[\[note: 512\]](#Ftn_512_1)Tr/15.08.2017/195/6-11.

[\[note: 513\]](#Ftn_513_1)AEIC of Mr Peck dated 26.12.2016 at p 10.

[\[note: 514\]](#Ftn_514_1)AEIC of Mr Ansett dated 13.12.2016 at p 89.

[\[note: 515\]](#Ftn_515_1)Tr/14.03.2017/46/18-23.

[\[note: 516\]](#Ftn_516_1)11AB6732.

[\[note: 517\]](#Ftn_517_1)12AB7194-7195.

[\[note: 518\]](#Ftn_518_1)12AB7194.

[\[note: 519\]](#Ftn_519_1)12AB7196.

[\[note: 520\]](#Ftn_520_1)Tr/14.03.2017/49.

[\[note: 521\]](#Ftn_521_1)Defendant’s Opening Statement at para 72; PCS at para 229.

[\[note: 522\]](#Ftn_522_1)PCS at paras 231-234; Defendant’s Opening Statement at para 95.

[\[note: 523\]](#Ftn_523_1)AEIC of Mr Peck dated 20.12.2016 at p 117, lines 2946-2950.

[\[note: 524\]](#Ftn_524_1)Tr/17.08.2017/47-48.

[\[note: 525\]](#Ftn_525_1)Tr/17.08.2017/48/3-11.

[\[note: 526\]](#Ftn_526_1)Tr/16.08.2017/63/20-25.

[\[note: 527\]](#Ftn_527_1)Tr/17.08.2017/45, 46/21-25, 1-4.

[\[note: 528\]](#Ftn_528_1)Tr/17.08.2017/47/13-17.

[\[note: 529\]](#Ftn_529_1)Tr/16.08.2017/64/8-10.

[\[note: 530\]](#Ftn_530_1)F&BP at para 17(c).

[\[note: 531\]](#Ftn_531_1)F&BP at para 17(m).

[\[note: 532\]](#Ftn_532_1)1AB97.

[\[note: 533\]](#Ftn_533_1)Joint Technical Experts’ Report at pp 49 and 51.

[\[note: 534\]](#Ftn_534_1)SOC at para 26(2); PCS at para 226.

[\[note: 535\]](#Ftn_535_1)PCS at paras 247-259.

[\[note: 536\]](#Ftn_536_1)DRS at Annex F p 33 para 19.

[\[note: 537\]](#Ftn_537_1)Joint Expert Report at pp 52–53.

[\[note: 538\]](#Ftn_538_1)2nd AEIC of Mr Ansett dated 16.01.2017 at p 37.

[\[note: 539\]](#Ftn_539_1)PCS at para 256.

[\[note: 540\]](#Ftn_540_1)PCS at para 253.

[\[note: 541\]](#Ftn_541_1)SOC at paras 26(4) and 33(4).

[\[note: 542\]](#Ftn_542_1)PCS at paras 248-249.

[\[note: 543\]](#Ftn_543_1)Tr/16.08.2017/24, 25/1-12, 10-25.

[\[note: 544\]](#Ftn_544_1)Tr/15.08.2017/147, 190/6-7.

[\[note: 545\]](#Ftn_545_1)Tr/16.08.2017/153-154/21-25, 1-6; Tr/16.08.2017/161/1-5.

[\[note: 546\]](#Ftn_546_1)Tr/16.08.2017/161/1-5.

[\[note: 547\]](#Ftn_547_1)Tr/16.08.2017/154, 156/9-10, 1-3.

[\[note: 548\]](#Ftn_548_1)Tr/16.08.2017/161/7-14.

[\[note: 549\]](#Ftn_549_1)Tr/16.08.2017/68/15-23.

[\[note: 550\]](#Ftn_550_1)Tr/16.08.2017/57/15-25.

[\[note: 551\]](#Ftn_551_1)Tr/16.08.2017/110/11-16.

[\[note: 552\]](#Ftn_552_1)Tr/16.08.2017/110.

[\[note: 553\]](#Ftn_553_1)Tr/16.08.2017/39, 44/18-45; Tr/16.08.2017/125/21-23.

[\[note: 554\]](#Ftn_554_1)Tr/16.08.2017/125/19-25.

[\[note: 555\]](#Ftn_555_1)Tr/16.08.2017/125, 39/19-25, 14-20.

[\[note: 556\]](#Ftn_556_1)Tr/16.08.2017/39, 44/18-45; Tr/16.08.2017/125/21-23.

[\[note: 557\]](#Ftn_557_1)Tr/16.08.2017/35-37.

[\[note: 558\]](#Ftn_558_1)Tr/16.08.2017/37, 38/19-25, 1-9.

[\[note: 559\]](#Ftn_559_1)Tr/15/08/2017/190/12-25.

[\[note: 560\]](#Ftn_560_1)Tr/15.08.2017/98.

[\[note: 561\]](#Ftn_561_1)Tr/16.08.2017/39/9-24.

[\[note: 562\]](#Ftn_562_1)Tr/16.08.2017/124-125/21-25, 1.

[\[note: 563\]](#Ftn_563_1)AEIC of Mr Ansett dated 16.01.2017 at p 32, Tr/15.08.2017/176-180.

[\[note: 564\]](#Ftn_564_1)Tr/15.08.2017/180/2-6.

[\[note: 565\]](#Ftn_565_1)Tr/15.08.2017/183/8-20.

[\[note: 566\]](#Ftn_566_1)Tr/15.08.2017/181.

[\[note: 567\]](#Ftn_567_1)Tr/15.08.2017/182, 183/21-25, 1-7.

[\[note: 568\]](#Ftn_568_1)Tr/15.08.2017/183/15-16.

[\[note: 569\]](#Ftn_569_1)Tr/15.08.2017/183/22-25.

[\[note: 570\]](#Ftn_570_1)Tr/15.08.2017/185/9-25.

[\[note: 571\]](#Ftn_571_1)AEIC of Mr Peck dated 20.12.2016 at pp 93-9394, AEIC of Mr Ansett dated 13.12.2016, Exhibit EA-1 at p 25.

[\[note: 572\]](#Ftn_572_1)PCS at paras 419-429.

[\[note: 573\]](#Ftn_573_1)SOC at para 28(1).

[\[note: 574\]](#Ftn_574_1)PCS at paras 416–417.

[\[note: 575\]](#Ftn_575_1)DCS at paras 139-143.

[\[note: 576\]](#Ftn_576_1)D&CC at paras 22-23.

[\[note: 577\]](#Ftn_577_1)1AB597-598.

[\[note: 578\]](#Ftn_578_1)DSBOD at pp 506-511; Tr/15.08.2017/31, 32, 50, 52, 56 /13-25, 1-5, 1-12, 6-12, 15-23.

[\[note: 579\]](#Ftn_579_1)DSBOD at p 511.

[\[note: 580\]](#Ftn_580_1)DSBOD at p 511.

[\[note: 581\]](#Ftn_581_1)PCS at para 417, DCS at para 143.

[\[note: 582\]](#Ftn_582_1)Tr/15.08.2017/60/1-7.

[\[note: 583\]](#Ftn_583_1)Tr/15.08.2017/50/1-12.

[\[note: 584\]](#Ftn_584_1)PRCS at para 138(2); DCS at para 139.

[\[note: 585\]](#Ftn_585_1)PCS at paras 419-420.

[\[note: 586\]](#Ftn_586_1)DRS at para 22a.

[\[note: 587\]](#Ftn_587_1)SOC at para 29.

[\[note: 588\]](#Ftn_588_1)AEIC of Mr Ansett dated 13.12.2016, Exhibit EA-1 at p 59.

[\[note: 589\]](#Ftn_589_1)Tr/15.08.2017/67/8-14.

[\[note: 590\]](#Ftn_590_1)D&CC at paras 26-27.

[\[note: 591\]](#Ftn_591_1)DCS at paras 150-161.

[\[note: 592\]](#Ftn_592_1)1AB588-589.

[\[note: 593\]](#Ftn_593_1)AEIC of Mr Ma dated 28.10.2016 at paras 9-10.

[\[note: 594\]](#Ftn_594_1)2AB736-751.

[\[note: 595\]](#Ftn_595_1)2AB747.

[\[note: 596\]](#Ftn_596_1)Tr/15.032017/29/1-13.

[\[note: 597\]](#Ftn_597_1)PCS at para 439, DCS at para 151.

[\[note: 598\]](#Ftn_598_1)Tr/15.08.2017/131/10-12; Exhibit D-20.

[\[note: 599\]](#Ftn_599_1)Tr/15.08.2017/131/21-25.

[\[note: 600\]](#Ftn_600_1)Tr/15.08.2017/133, 136/6-25, 4-14.

[\[note: 601\]](#Ftn_601_1)Tr/15.08.2017/133/24-25.

[\[note: 602\]](#Ftn_602_1)Tr/15.08.2017/10, 131/14-22, 21-25; Tr 17.08.2017/139/2-6.

[\[note: 603\]](#Ftn_603_1)Tr/17.08.2017/140, 141/11-25, 1-2.

[\[note: 604\]](#Ftn_604_1)Tr/1517.08.2017/139/16-24.

[\[note: 605\]](#Ftn_605_1)Tr/1517.08.2017/144.

[\[note: 606\]](#Ftn_606_1)Tr/15.08.2017/75/8-18.

[\[note: 607\]](#Ftn_607_1)Tr/15.08.2017/136/15-18.

[\[note: 608\]](#Ftn_608_1)Tr/15.08.2017/7, 9/17-25, 10-17; AEIC of Mr Peck dated 20.12.2016 at p 78, lines 2025-2031.

[\[note: 609\]](#Ftn_609_1)Tr/17.08.2017/162/2-12.

[\[note: 610\]](#Ftn_610_1)Tr/17.08.2017/141-143.

[\[note: 611\]](#Ftn_611_1)Tr/17.08.2017/147/4-17.

[\[note: 612\]](#Ftn_612_1)Tr/17.08.2017/143, 150, 151/17-24, 18-25, 1-2.

[\[note: 613\]](#Ftn_613_1)Tr/17.08.2017/150,151/18-25, 1-2.

[\[note: 614\]](#Ftn_614_1)Tr/17.08.2017/156/10-18.

[\[note: 615\]](#Ftn_615_1)Tr/15.08.2017/77/10-16.

[\[note: 616\]](#Ftn_616_1)SOC at para 33(6).

[\[note: 617\]](#Ftn_617_1)PCS at paras 506-511.

[\[note: 618\]](#Ftn_618_1)Tr/14.08.2017/25-26.

[\[note: 619\]](#Ftn_619_1)Tr/14.08.2017/27-28.

[\[note: 620\]](#Ftn_620_1)Tr/22.08.2017/99.

[\[note: 621\]](#Ftn_621_1)AEIC of Mr Turvey dated 31.10.2016 at paras 115-116; PT-64.

[\[note: 622\]](#Ftn_622_1)Tr/17.08.2017/134-135.

[\[note: 623\]](#Ftn_623_1)AEIC of Mr Hamer dated 28.10.2016 at paras 81-83.

[\[note: 624\]](#Ftn_624_1)AEIC of Mr Hamer dated 28.10.2016 at para 89.

[\[note: 625\]](#Ftn_625_1)Tr/17.08.2017/110, 112, 113/14, 21-25, 1-2.

[\[note: 626\]](#Ftn_626_1)SOC at para 32(4); PCS at para 523.

[\[note: 627\]](#Ftn_627_1)AEIC of Mr Hamer dated 28.10.2016, Exhibit “SJH-28” at p 500; TR/2.3.17/115-116.

[\[note: 628\]](#Ftn_628_1)AEIC of Mr Turvey dated 31.10.2016 at para 113.

[\[note: 629\]](#Ftn_629_1)AEIC of Mr Turvey dated 31.10.2016 at p 48.

[\[note: 630\]](#Ftn_630_1)Tr/22.08.2017/105/1-15.

[\[note: 631\]](#Ftn_631_1)PCS at paras 524 to 529.

[\[note: 632\]](#Ftn_632_1)SOC at para 32(1).

[\[note: 633\]](#Ftn_633_1)DCS at paras 248 to 253.

[\[note: 634\]](#Ftn_634_1)AEIC of Mr Hamer dated 28.10.2016 at paras 85-88.

[\[note: 635\]](#Ftn_635_1)Tr/02.03.2017/179-180.

[\[note: 636\]](#Ftn_636_1)14AB8341.

[\[note: 637\]](#Ftn_637_1)Tr/17.08.2017/102/11-21.

[\[note: 638\]](#Ftn_638_1)AEIC of Mr Ansett dated 16.01.2017 at p 38.

[\[note: 639\]](#Ftn_639_1)Tr/17.08.2017/100/9-17.

[\[note: 640\]](#Ftn_640_1)Tr/17.08.2017/104/17-20.

[\[note: 641\]](#Ftn_641_1)Tr/17.08.2017/98, 106/10-21, 8-11.

[\[note: 642\]](#Ftn_642_1)Tr/17.08.2017/65.

[\[note: 643\]](#Ftn_643_1)SOC at para 33(3).

[\[note: 644\]](#Ftn_644_1)Plaintiff’s Opening Statement dated 15.02.2017 at para 105.

[\[note: 645\]](#Ftn_645_1)PCS at paras 341-348.

[\[note: 646\]](#Ftn_646_1)Tr/27.02.2017/61/1-7.

[\[note: 647\]](#Ftn_647_1)PCS at para 359.

[\[note: 648\]](#Ftn_648_1)DCS at para 498.

[\[note: 649\]](#Ftn_649_1)SOC at para 33(3)(a)–(b).

[\[note: 650\]](#Ftn_650_1)DCS at para 498.

[\[note: 651\]](#Ftn_651_1)13AB8124-8126.

[\[note: 652\]](#Ftn_652_1)14AB8175-8176; 13AB8125-8126.

[\[note: 653\]](#Ftn_653_1)Tr/22.02.2017/199.

[\[note: 654\]](#Ftn_654_1)14AB812313AB8123.

[\[note: 655\]](#Ftn_655_1)14AB8121-8122.

[\[note: 656\]](#Ftn_656_1)Tr/22.02.2017/202, 203/23-25, 1-11.

[\[note: 657\]](#Ftn_657_1)Tr/22.02.2017/222-223.

[\[note: 658\]](#Ftn_658_1)Tr/22.02.2017/215/1-14.

[\[note: 659\]](#Ftn_659_1)Tr/22.02.2017/222/10-16.

[\[note: 660\]](#Ftn_660_1)14AB8175-8176.

[\[note: 661\]](#Ftn_661_1)Tr/27.02.2017/8-9.

[\[note: 662\]](#Ftn_662_1)14AB8175-8176.

[\[note: 663\]](#Ftn_663_1)Tr/27.02.2017/27/6-10.

[\[note: 664\]](#Ftn_664_1)14AB8216-8217.

[\[note: 665\]](#Ftn_665_1)14AB8216-8217.

[\[note: 666\]](#Ftn_666_1)Tr/27.02.2017/28-29.

[\[note: 667\]](#Ftn_667_1)Tr/27.02.2017/30/18-23.

[\[note: 668\]](#Ftn_668_1)14AB8201-8202.

[\[note: 669\]](#Ftn_669_1)14AB8206-8207.

[\[note: 670\]](#Ftn_670_1)14AB8206.

[\[note: 671\]](#Ftn_671_1)14AB8213-8214.

[\[note: 672\]](#Ftn_672_1)14AB8215; Tr/27.02.2017/43/23-24.

[\[note: 673\]](#Ftn_673_1)PCS at para 364.

[\[note: 674\]](#Ftn_674_1)PCS at paras 351-374.

[\[note: 675\]](#Ftn_675_1)DCS at paras 542-570.

[\[note: 676\]](#Ftn_676_1)14AB8206.

[\[note: 677\]](#Ftn_677_1)Tr/27.02.2017/45, 52 /2-14, 12-18.

[\[note: 678\]](#Ftn_678_1)DCS at paras 569.

[\[note: 679\]](#Ftn_679_1)14AB8204-8205; Tr/27.02.2017/27, 44 /6-10, 4-17.

[\[note: 680\]](#Ftn_680_1)Tr/27.02.2017/30.

[\[note: 681\]](#Ftn_681_1)Tr/27.02.2017/51 /11-17.

[\[note: 682\]](#Ftn_682_1)14AB8383.

[\[note: 683\]](#Ftn_683_1)14AB8383; Tr/27.02.2017/62/1-6.

[\[note: 684\]](#Ftn_684_1)Tr/27.02.2017/71/7-18.

[\[note: 685\]](#Ftn_685_1)Tr/27.02.2017/84/7-14.

[\[note: 686\]](#Ftn_686_1)14AB8450-8451.

[\[note: 687\]](#Ftn_687_1)14AB8457-8458.

[\[note: 688\]](#Ftn_688_1)14AB8457.

[\[note: 689\]](#Ftn_689_1)14AB8506-8507.

[\[note: 690\]](#Ftn_690_1)14AB8705.

[\[note: 691\]](#Ftn_691_1)15AB8840.

[\[note: 692\]](#Ftn_692_1)15AB8847.

[\[note: 693\]](#Ftn_693_1)Tr/27.02.2017/114/1-9.

[\[note: 694\]](#Ftn_694_1)15AB8804-8805.

[\[note: 695\]](#Ftn_695_1)15AB8804-8805.

[\[note: 696\]](#Ftn_696_1)15AB8804.

[\[note: 697\]](#Ftn_697_1)15AB8799-88008801.

[\[note: 698\]](#Ftn_698_1)15AB8794.

[\[note: 699\]](#Ftn_699_1)15AB8845.

[\[note: 700\]](#Ftn_700_1)15AB8847.

[\[note: 701\]](#Ftn_701_1)PCS at para 384, PRS at para 329.

[\[note: 702\]](#Ftn_702_1)PCS at para 390.

[\[note: 703\]](#Ftn_703_1)14AB8653-8654.

[\[note: 704\]](#Ftn_704_1)Tr/27.02.2017/64-67.

[\[note: 705\]](#Ftn_705_1)14AB8654.

[\[note: 706\]](#Ftn_706_1)14AB8653.

[\[note: 707\]](#Ftn_707_1)Tr/27.02.2017/94.

[\[note: 708\]](#Ftn_708_1)Tr/27.02.2017/82/1-7.

[\[note: 709\]](#Ftn_709_1)PCS at para 378.

[\[note: 710\]](#Ftn_710_1)Tr/27.02.2017/121/4-12.

[\[note: 711\]](#Ftn_711_1)SOC at para 33(3).

[\[note: 712\]](#Ftn_712_1)PCS at paras 517-518.

[\[note: 713\]](#Ftn_713_1)18AB11110.

[\[note: 714\]](#Ftn_714_1)13AB7692-7709.

[\[note: 715\]](#Ftn_715_1)DCS at paras 333-339.

[\[note: 716\]](#Ftn_716_1)PCS at paras 614-618.

[\[note: 717\]](#Ftn_717_1)Tr/28.02.2017/91/1-6

[\[note: 718\]](#Ftn_718_1)13AB7728-7747.

[\[note: 719\]](#Ftn_719_1)DCS at paras 340-345.

[\[note: 720\]](#Ftn_720_1)PCS at paras 614-618.

[\[note: 721\]](#Ftn_721_1)13AB7769.

[\[note: 722\]](#Ftn_722_1)DCS at paras 346-350.

[\[note: 723\]](#Ftn_723_1)PCS at paras 604-606.

[\[note: 724\]](#Ftn_724_1)Tr/14.03.2017/109/1-6.

[\[note: 725\]](#Ftn_725_1)Tr/14.03.2017/106-109.

[\[note: 726\]](#Ftn_726_1)13AB7795.

[\[note: 727\]](#Ftn_727_1)DCS at paras 351-353.

[\[note: 728\]](#Ftn_728_1)PCS at para 607.

[\[note: 729\]](#Ftn_729_1)13AB7796.

[\[note: 730\]](#Ftn_730_1)Tr/28.02.2017/106-107.

[\[note: 731\]](#Ftn_731_1)13AB7852.

[\[note: 732\]](#Ftn_732_1)DCS at paras 354-355.

[\[note: 733\]](#Ftn_733_1)Tr/28.02.2017/110-111.

[\[note: 734\]](#Ftn_734_1)13AB7895-7904.

[\[note: 735\]](#Ftn_735_1)DCS at paras 357-360.

[\[note: 736\]](#Ftn_736_1)PCS at para 608.

[\[note: 737\]](#Ftn_737_1)Tr/14.03.2017/115, 116 /22-25, 1-3.

[\[note: 738\]](#Ftn_738_1)13AB7915-7930.

[\[note: 739\]](#Ftn_739_1)DCS at paras 361-365.

[\[note: 740\]](#Ftn_740_1)Tr/14.03.2017/118-119.

[\[note: 741\]](#Ftn_741_1)Tr/14.03.2017/118, 121/12-21, 10-22.

[\[note: 742\]](#Ftn_742_1)PCS at para 624.


Source: [link](https://www.lawnet.sg:443/lawnet/web/lawnet/free-resources?p_p_id=freeresources_WAR_lawnet3baseportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_freeresources_WAR_lawnet3baseportlet_action=openContentPage&_freeresources_WAR_lawnet3baseportlet_docId=%2FJudgment%2F23143-SSP.xml)