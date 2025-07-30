"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my development career.
          </p>
        </motion.div>

        {/* Current Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-dashed border-primary/50 bg-primary/5">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Looking for My First Opportunity</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I&apos;m a passionate developer ready to bring fresh perspectives and dedication to a dynamic team. Currently
                seeking my first professional role where I can contribute to meaningful projects and grow my skills.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary">Full-Stack Development</Badge>
                <Badge variant="secondary">React & Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Database Design</Badge>
              </div>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Let&apos;s Connect
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* What I Bring Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modern web development with React, Next.js, and TypeScript</li>
                  <li>• Backend development with Node.js and database management</li>
                  <li>• Responsive design and user experience optimization</li>
                  <li>• Version control with Git and collaborative development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personal Qualities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Strong problem-solving and analytical thinking</li>
                  <li>• Excellent communication and teamwork skills</li>
                  <li>• Continuous learning mindset and adaptability</li>
                  <li>• Attention to detail and commitment to quality</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Future Experience Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="border-dashed border-muted-foreground/30">
            <CardHeader>
              <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Future Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-dashed border-muted-foreground/30 pl-4">
                  <h3 className="font-semibold text-muted-foreground">Your Company Here</h3>
                  <p className="text-primary font-medium">Software Developer</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Starting Soon
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Remote / On-site
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ready to contribute to innovative projects and grow with a forward-thinking team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
