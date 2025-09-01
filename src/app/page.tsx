"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, Trophy, Users, Code, Zap, Target, Award } from "lucide-react"

export default function CodeQuestPage() {
  const [isVisible, setIsVisible] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const prizesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("timeline-section")) {
              const timelineItems = entry.target.querySelectorAll(".timeline-item")
              timelineItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("animate")
                }, index * 200)
              })
            }
            if (entry.target.classList.contains("prizes-section")) {
              const prizeCards = entry.target.querySelectorAll(".prize-card")
              prizeCards.forEach((card) => {
                card.classList.add("animate")
              })
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    const timelineSection = timelineRef.current
    const prizesSection = prizesRef.current

    if (timelineSection) observer.observe(timelineSection)
    if (prizesSection) observer.observe(prizesSection)

    return () => {
      if (timelineSection) observer.unobserve(timelineSection)
      if (prizesSection) observer.unobserve(prizesSection)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold metallic-text">CodeQuest</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
              Timeline
            </a>
            <a href="#prizes" className="text-muted-foreground hover:text-primary transition-colors">
              Prizes
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button className="animate-pulse-glow">Register Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('/abstract-tech-circuit.png')] opacity-5 dark:opacity-10"></div>
        <div className={`container mx-auto px-4 text-center z-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold metallic-text mb-6 text-balance">
              Code<span className="text-primary">Quest</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Join the ultimate coding competition where innovation meets excellence. Compete, collaborate, and create the
            future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow">
              <Users className="mr-2 h-5 w-5" />
              Join the Quest
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              <Calendar className="mr-2 h-5 w-5" />
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction/About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold metallic-text mb-6">About CodeQuest</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              CodeQuest is more than just a hackathon—it&apos;s a journey of discovery, innovation, and collaboration
              that brings together the brightest minds in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Push the boundaries of what&apos;s possible with cutting-edge technologies and creative
                  problem-solving.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work with talented developers, designers, and innovators from universities across the region.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Compete</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Challenge yourself against the best and showcase your skills in a competitive yet supportive
                  environment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 timeline-section" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold metallic-text mb-6">Event Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A carefully crafted schedule designed to maximize your coding experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  time: "9:00 AM",
                  title: "Registration & Welcome",
                  description: "Check-in, breakfast, and opening ceremony",
                },
                { time: "10:00 AM", title: "Hackathon Begins", description: "Team formation and project kickoff" },
                { time: "12:00 PM", title: "Lunch Break", description: "Networking lunch with sponsors and mentors" },
                {
                  time: "2:00 PM",
                  title: "Workshop Sessions",
                  description: "Technical workshops and skill-building sessions",
                },
                { time: "6:00 PM", title: "Dinner & Networking", description: "Dinner break and mentor consultations" },
                { time: "10:00 PM", title: "Midnight Fuel", description: "Late-night snacks and energy boost" },
                { time: "8:00 AM", title: "Final Sprint", description: "Last-minute improvements and testing" },
                {
                  time: "12:00 PM",
                  title: "Project Submissions",
                  description: "Submit your projects and prepare presentations",
                },
                { time: "2:00 PM", title: "Presentations", description: "Showcase your innovations to judges" },
                { time: "4:00 PM", title: "Awards Ceremony", description: "Recognition and prize distribution" },
              ].map((event, index) => (
                <div key={index} className="flex items-start space-x-4 group timeline-item">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform animate-shimmer">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="animate-pulse-glow">
                        {event.time}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-muted/30 prizes-section" ref={prizesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold metallic-text mb-6">Prizes & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compete for amazing prizes and recognition from industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 prize-card">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 animate-shimmer"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Trophy className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-2xl metallic-text">1st Place</CardTitle>
                <div className="text-3xl font-bold text-primary animate-pulse-glow">$5,000</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-muted-foreground">
                  <li>Cash prize</li>
                  <li>Internship opportunities</li>
                  <li>Mentorship program</li>
                  <li>Tech gadgets</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 prize-card">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 to-gray-600 animate-shimmer"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Award className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
                <CardTitle className="text-2xl metallic-text">2nd Place</CardTitle>
                <div className="text-3xl font-bold text-primary animate-pulse-glow">$3,000</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-muted-foreground">
                  <li>Cash prize</li>
                  <li>Workshop access</li>
                  <li>Networking events</li>
                  <li>Swag package</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 prize-card">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600 animate-shimmer"></div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Award className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-2xl metallic-text">3rd Place</CardTitle>
                <div className="text-3xl font-bold text-primary animate-pulse-glow">$1,500</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-muted-foreground">
                  <li>Cash prize</li>
                  <li>Online courses</li>
                  <li>Community access</li>
                  <li>Certificate</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">Plus special category awards for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Best UI/UX Design
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Most Innovative Solution
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Best Use of AI
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                People&apos;s Choice
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold metallic-text mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers to help you prepare for CodeQuest.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">Who can participate in CodeQuest?</AccordionTrigger>
                <AccordionContent>
                  CodeQuest is open to all university students, regardless of their major or programming experience.
                  Whether you&apos;re a computer science student or studying another field, if you&apos;re passionate
                  about technology and innovation, you&apos;re welcome to join!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">Do I need a team to participate?</AccordionTrigger>
                <AccordionContent>
                  You can participate either as an individual or as part of a team (up to 4 members). If you don&apos;t
                  have a team, don&apos;t worry! We&apos;ll have team formation sessions at the beginning of the event
                  to help you find like-minded collaborators.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">What should I bring to the event?</AccordionTrigger>
                <AccordionContent>
                  Bring your laptop, chargers, and any development tools you prefer. We&apos;ll provide WiFi, power
                  outlets, meals, and snacks throughout the event. Don&apos;t forget to bring your student ID for
                  registration and a positive attitude for collaboration!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">Are there any restrictions on project themes?</AccordionTrigger>
                <AccordionContent>
                  While we encourage creativity and innovation, all projects should be appropriate and align with our
                  code of conduct. We welcome projects in any domain - web development, mobile apps, AI/ML, IoT, games,
                  and more. The key is to create something meaningful and demonstrate your technical skills.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">How will projects be judged?</AccordionTrigger>
                <AccordionContent>
                  Projects will be evaluated based on innovation, technical implementation, design/user experience, and
                  presentation quality. Our panel of industry experts and academic professionals will assess each
                  project fairly, considering both the technical complexity and the practical impact of your solution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Start Your Quest?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
            Join hundreds of talented developers in the ultimate coding challenge. Register now and be part of something
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 animate-pulse-glow">
              <Users className="mr-2 h-5 w-5" />
              Register for CodeQuest
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Add to Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold metallic-text">CodeQuest</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering the next generation of innovators through competitive programming and collaboration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold metallic-text mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#prizes" className="text-muted-foreground hover:text-primary transition-colors">
                    Prizes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold metallic-text mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@codequest.edu</li>
                <li>+1 (555) 123-4567</li>
                <li>University Campus</li>
                <li>Tech Building, Room 101</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold metallic-text mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.072 4.072 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 CodeQuest. All rights reserved. Built with passion for innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}