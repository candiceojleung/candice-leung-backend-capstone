export async function seed(knex) {
  await knex("articles").del();

  const articles = [
    {
      title: "Cycle syncing: Choosing food and diet for hormonal balance",
      content:
        "Learn how to choose food and diet to balance hormones during your menstrual cycle.",
      category: "Menstrual Health",
      link: "https://www.bswhealth.com/blog/cycle-syncing-choosing-food-and-diet-for-hormonal-balance",
    },
    {
      title: "Nutrition and Exercise Throughout Your Menstrual Cycle",
      content:
        "Learn about how nutrition and exercise can be tailored to different phases of your menstrual cycle.",
      category: "Menstrual Health",
      link: "https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle",
    },
    {
      title:
        "The Imperative for Transgender and Gender Nonbinary Inclusion in Reproductive Health",
      content:
        "Read about ways to create inclusive, accurate, and respectful care environments, to ensure higher quality health care for people of all genders.",
      category: "Inclusive Health Care",
      link: "https://journals.lww.com/greenjournal/fulltext/2020/05000/the_imperative_for_transgender_and_gender.10.aspx",
    },
    {
      title: "Why Do I Have Cramps but No Period?",
      content:
        "Explore the reasons behind cramps without a period and when to seek medical advice.",
      category: "Menstrual Health",
      link: "https://www.webmd.com/women/cramps-but-no-period",
    },
    {
      title: "Trans-Inclusive Reproductive Health Care",
      content:
        "Learn about challenges faced by trans individuals in accessing reproductive health care and highlights efforts to create gender-affirming, inclusive practices.",
      category: "Inclusive Health Care",
      link: "https://www.med.ubc.ca/news/trans-inclusive-reproductive-health-care/",
    },
    {
      title: "Fertility Awareness-Based Methods of Family Planning",
      content:
        "An overview of fertility awareness-based methods for natural family planning.",
      category: "Fertility & Family Planning",
      link: "https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning",
    },
    {
      title: "Fertility Awareness Method",
      content:
        "Learn about the fertility awareness method and how it can help with family planning.",
      category: "Fertility & Family Planning",
      link: "https://www.plannedparenthood.org/learn/birth-control/fertility-awareness",
    },
    {
      title: "Postnatal rituals from around the world",
      content:
        "Discover traditional postpartum practices from around the world.",
      category: "Pregnancy & Postpartum",
      link: "https://www.themindfulbirthgroup.com/parents/blog/postnatal-rituals-from-around-the-world/",
    },
    {
      title: "Consequences of maternal postpartum depression",
      content:
        "Understand the impact of postpartum depression on mothers and their families.",
      category: "Pregnancy & Postpartum",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6492376/",
    },
    {
      title:
        "Overview of ectopic pregnancy diagnosis, management, and innovation",
      content:
        "A detailed look at ectopic pregnancy, its diagnosis, management options, and recent innovations.",
      category: "Pregnancy & Postpartum",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10071153/",
    },
    {
      title: "Essential Vitamins for Women",
      content:
        "A guide to the essential vitamins women need at different stages of life to maintain optimal health.",
      category: "Nutrition & Wellness",
      link: "https://www.webmd.com/women/essential-vitamins-for-women-at-every-age",
    },
    {
      title:
        "Association of eating behavior with symptoms of pelvic floor disorders",
      content:
        "Explore the connection between eating behaviors and pelvic floor disorders.",
      category: "Nutrition & Wellness",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11632885/",
    },
    {
      title: "Estrogen and Emotions",
      content:
        "Understand the relationship between estrogen levels and emotional well-being.",
      category: "Mental Health & Stress",
      link: "https://www.webmd.com/women/guide/estrogen-and-womens-emotions",
    },
    {
      title: "Tips to Reduce Stress in Women Over 50",
      content:
        "Practical advice for managing stress for women in their 50s and beyond.",
      category: "Mental Health & Stress",
      link: "https://www.webmd.com/women/women-over-50-tips-to-reduce-stress",
    },
    {
      title: "How to Beat Insomnia",
      content:
        "Strategies for improving sleep quality and overcoming insomnia.",
      category: "Mental Health & Stress",
      link: "https://www.mayoclinic.org/diseases-conditions/insomnia/diagnosis-treatment/drc-20355173",
    },
    {
      title: "Keeping Fit After 50",
      content:
        "Tips and exercises for maintaining fitness and health after age 50.",
      category: "Nutrition & Wellness",
      link: "https://www.webmd.com/healthy-aging/ss/slideshow-live-well-over-50",
    },
    {
      title:
        "Intersectional Examination of Gender-Inclusive Care in Reproductive Health",
      content:
        "Explore the importance of gender-inclusive care in reproductive health settings.",
      category: "Inclusive Health Care",
      link: "https://www.frontiersin.org/journals/reproductive-health/articles/10.3389/frph.2021.670919/full",
    },
    {
      title: "Testosterone and Estrogen Levels in Women",
      content:
        "Understanding the role of testosterone and estrogen in women's health.",
      category: "Hormones & Endocrine Health",
      link: "https://www.webmd.com/women/guide/normal-testosterone-and-estrogen-levels-in-women",
    },
    {
      title: "Estrogen Test",
      content:
        "Learn about estrogen tests, when they're needed, and how to interpret results.",
      category: "Hormones & Endocrine Health",
      link: "https://www.webmd.com/women/estrogen-test",
    },
    {
      title: "Progesterone Test",
      content:
        "Information on progesterone tests and their importance in women's health.",
      category: "Hormones & Endocrine Health",
      link: "https://www.webmd.com/women/progesterone-test",
    },
    {
      title: "Rheumatoid Arthritis: A Female Challenge",
      content:
        "Explore how rheumatoid arthritis affects women differently than men.",
      category: "Chronic Health Conditions",
      link: "https://www.researchgate.net/publication/23653427_Rheumatoid_Arthritis_A_Female_Challenge",
    },
    {
      title: "Missing and dismissing the impact of periods",
      content:
        "Understanding the societal and personal impacts of menstruation.",
      category: "Menstrual Health",
      link: "https://www.researchgate.net/publication/386871855_Missing_and_dismissing_the_impact_of_periods_Outcomes_of_focus_groups_of_teens_with_period_concerns",
    },
    {
      title: "Centering disability visibility in reproductive health care",
      content:
        "Addressing the importance of inclusive reproductive health care for individuals with disabilities.",
      category: "Inclusive Health Care",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10486212/",
    },
    {
      title: "Health Checklist for Women Over 40",
      content:
        "Essential health checks and screenings for women aged 40 and above.",
      category: "Health Checklists & Advice",
      link: "https://www.webmd.com/women/health-checklist-for-women-over-40",
    },
    {
      title: "Why Am I So Tired?",
      content:
        "Exploring common causes of fatigue in women and when to seek medical advice.",
      category: "Health Checklists & Advice",
      link: "https://www.webmd.com/women/guide/why-so-tired-10-causes-fatigue",
    },
    {
      title:
        "Identifying key barriers to cervical cancer screening in young women",
      content:
        "Understanding and addressing obstacles to cervical cancer screening among younger women.",
      category: "Social & Cultural Aspects",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11907612/",
    },
    {
      title:
        "Understanding Polycystic Ovary Syndrome (PCOS): Symptoms, Diagnosis, and Treatment Options",
      content:
        "Learn about PCOS, symptoms, diagnosis, and treatment options available for managing PCOS.",
      category: "Menstrual Health",
      link: "https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439",
    },
    {
      title: "Prediabetes and Women's Health: Understanding the Risks",
      content:
        "Explore how prediabetes affects women differently, including increased risks during pregnancy and menopause.",
      category: "Chronic Health Conditions",
      link: "https://www.mayoclinic.org/diseases-conditions/prediabetes/symptoms-causes/syc-20355278",
    },
    {
      title: "Sleep Apnea in Women: Unique Symptoms and Health Impacts",
      content:
        "Discover how sleep apnea presents differently in women, often with subtler symptoms that can lead to underdiagnosis. ",
      category: "Chronic Health Conditions",
      link: "https://www.resmed.com/en-us/sleep-apnea/sleep-blog/sleep-apnea-symptoms-in-women-are-they-different",
    },
    {
      title: "Thyroid Disorders in Women: Symptoms, Causes, and Treatment",
      content:
        " Learn about the prevalence of thyroid disorders in women, how they can affect fertility and pregnancy",
      category: "Hormones & Endocrine Health",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/thyroid-disorders-in-women"
    },
  ];

  return knex("articles").insert(articles);
}
