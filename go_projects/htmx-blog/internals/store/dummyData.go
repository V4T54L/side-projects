package store

import (
	"encoding/json"
	"time"
)

func getDummyBlogs() []Blog {
	b := getBlog()
	blogs := make([]Blog, 10)
	for i := range blogs {
		blogs[i] = *b
	}
	return blogs
}

func getBlog() *Blog {
	b := Blog{}
	b.PublishedDate = time.Now()
	_ = json.Unmarshal([]byte(blog_json), &b)
	return &b
}

var blog_json = `{
  "user":"GeePiTee",
  "title": "The Future of AI: Transforming Our World",
  "short_description": "Artificial Intelligence (AI) is no longer a futuristic concept; it is....",
  "description": "Artificial Intelligence (AI) is no longer a futuristic concept; it is the present shaping our reality and our everyday lives. As we look ahead, the future of AI promises remarkable advancements that will fundamentally change various sectors. This blog post delves into the various dimensions of AI, exploring its potential impact on society, the workforce, healthcare, education, and even creativity.\n\nThe foundations of AI are built on sophisticated algorithms and immense data analysis capabilities. In the years to come, we should expect AI to become increasingly integrated into our daily activities and industries, automating tasks and enhancing decision-making processes. The evolution of machine learning and deep learning will enable AI systems to learn more efficiently, drawing insights from complex datasets that were previously considered too vast for human cognition.\n\nIn the realm of healthcare, AI's impact is already noticeable and will only escalate. Predictive analytics powered by AI can assist physicians in diagnosing diseases more accurately, predicting patient outcomes and personalizing treatment strategies. Moreover, AI-driven robotic systems are set to transform surgery, minimizing the risk of human error and improving recovery times.\n\nEducation, too, stands to benefit immensely from advancements in AI. Tailored learning experiences delivered by intelligent tutoring systems will cater to individual student needs, bridging learning gaps and facilitating mastery of subjects. As AI systems become more adept in understanding human emotions and motivations, they can provide the necessary support to foster not just academic success, but emotional and social well-being as well.\n\nThe workforce is likely to undergo dramatic changes due to AI automation. Although fears of job displacement exist, the future could instead usher in new job categories that will require a different set of skills. Humans and AI working together can lead to enhanced productivity and innovation, pushing industries to higher levels of efficiency. It is crucial for educational institutions and training programs to equip individuals with skills that are complementary to AI technology.\n\nAI's creative potential is another interesting aspect worth discussing. We've already seen AI-generated art, music, and writing, raising essential questions about originality, authorship, and the definition of creativity itself. As we move forward, AI could become a co-creator in artistic endeavors, leading to a new genre of collaborative works between humans and machines.\n\nNevertheless, with these possibilities come significant challenges. Ethical considerations surrounding bias in AI algorithms, privacy concerns, and the potential for increased unemployment must be addressed promptly. Policymakers, ethicists, and technologists need to collaborate to create a framework that ensures AI serves as a force for good and benefits all of humanity.\n\nIn conclusion, the future of AI holds immense promise but is layered with complexities that will require thoughtful navigations. Open discussions must continue as we adapt to this evolution, preparing society to embrace AI technology responsibly and inclusively. The journey toward an AI-driven future is just beginning, and it encourages us all to imagine the possibilities.",
  "seen": "2432",
  "likes": "334",
  "reacts": "174",
  "shares": "112",
  "bookmark": "567",
  "img_url":"/static/logo.png",
  "comments": [
    {
      "user": "TechEnthusiast90",
      "comment": "This post brilliantly captures the potential of AI. I'm particularly excited about its applications in healthcare!"
    },
    {
      "user": "FutureReady",
      "comment": "The ethical implications of AI are crucial. We need to prioritize regulations to prevent abuses."
    },
    {
      "user": "EduRevolution",
      "comment": "I'm looking forward to personalized education systems using AI. It could greatly enhance learning outcomes for many students."
    },
    {
      "user": "ArtLover87",
      "comment": "AI in the arts is fascinating! I'm curious to see how it will change our perception of creativity."
    },
    {
      "user": "SkepticalReader",
      "comment": "While AI has great potential, I worry about job displacement. What are our governments doing about this?"
    }
  ]
}`
