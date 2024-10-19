'use client'

import { useState } from 'react'
import { ChevronRight, Briefcase, Layout, PlusCircle, Lightbulb, Code, Shield, Zap, Send, MessageCircle, X, ArrowRight, Home, Cpu, Globe, Database, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const menuData = {
  name: 'TechInnovate Solutions',
  icon: Layout,
  description: 'TechInnovate Solutions is a cutting-edge technology company specializing in AI-driven software solutions, cloud infrastructure, and data analytics. We empower businesses to leverage the latest technological advancements for sustainable growth and innovation.',
  aiFeedback: 'TechInnovate Solutions has a well-structured project portfolio. The company\'s focus on **AI-Powered Analytics Platform**, **Cloud Migration Suite**, and **Cybersecurity Shield** demonstrates a strategic approach to addressing key market needs. Each project shows promise, with features that align well with current industry trends. The AI-Powered Analytics Platform, in particular, stands out with its **Natural Language Query Engine**, which could be a significant differentiator. The Cloud Migration Suite\'s **Multi-Cloud Orchestrator** addresses the growing demand for flexible cloud solutions. The Cybersecurity Shield\'s **Real-time Threat Detection** feature is crucial in today\'s security landscape. Overall, the project structure indicates a forward-thinking approach, though there may be opportunities to further integrate AI across all projects.',
  improvementSuggestions: ['Consider cross-project integration opportunities', 'Explore AI implementation in Cloud Migration and Cybersecurity projects', 'Develop a unified dashboard for all projects'],
  aiAnalysis: {
    rice: {
      feedback: 'The projects show a good balance of reach, impact, confidence, and effort.',
      suggestions: ['Prioritize features with highest RICE scores', 'Consider increasing resources for high-impact, low-effort features', 'Regularly reassess RICE scores as market conditions change'],
      values: {
        reach: 8,
        impact: 9,
        confidence: 8,
        effort: 7
      }
    },
    moscow: {
      feedback: 'The current project structure covers essential functionalities while also including innovative features.',
      suggestions: ['Ensure all "Must Have" features are prioritized', 'Regularly review "Could Have" features for potential upgrades', 'Consider market trends when evaluating "Won\'t Have" features'],
      categorization: {
        must: ['Core functionalities for each project'],
        should: ['Advanced features like NLP and multi-cloud support'],
        could: ['AI integration in Cloud Migration and Cybersecurity'],
        wont: ['Virtual Reality interfaces', 'Blockchain integration (for now)']
      }
    }
  },
  children: [
    {
      name: 'AI-Powered Analytics Platform',
      icon: Cpu,
      description: 'Our flagship AI-driven analytics platform that transforms raw data into actionable insights, enabling businesses to make data-driven decisions with unprecedented accuracy and speed.',
      aiFeedback: 'The **AI-Powered Analytics Platform** project shows great potential. The **Natural Language Query Engine** is particularly innovative and could be a major selling point. The **Predictive Analytics Module** aligns well with current market demands for forward-looking insights. The **Interactive Visualization Dashboard** is crucial for making complex data accessible. Consider exploring ways to further differentiate from competitors, perhaps by incorporating more advanced AI techniques or expanding the range of data sources it can handle.',
      improvementSuggestions: ['Expand data source integrations', 'Implement more advanced machine learning models', 'Develop industry-specific analytics templates'],
      aiAnalysis: {
        rice: {
          feedback: 'This project has high potential impact and reach, with reasonable confidence and effort requirements.',
          suggestions: ['Prioritize the Natural Language Query Engine for its uniqueness', 'Allocate more resources to the Predictive Analytics Module', 'Consider simplifying the Interactive Visualization Dashboard for quicker implementation'],
          values: {
            reach: 9,
            impact: 10,
            confidence: 8,
            effort: 8
          }
        },
        moscow: {
          feedback: 'The features are well-balanced across the MoSCoW categories.',
          suggestions: ['Ensure the Predictive Analytics Module is robust and accurate', 'Consider adding more "Could Have" features for future expansion', 'Regularly reassess the "Won\'t Have" features based on user feedback'],
          categorization: {
            must: ['Data ingestion and processing', 'Basic analytics capabilities'],
            should: ['Natural Language Query Engine', 'Predictive Analytics Module'],
            could: ['AI-driven anomaly detection', 'Integration with external BI tools'],
            wont: ['Real-time streaming analytics (for now)', 'Quantum computing integration']
          }
        }
      },
      children: [
        { 
          name: 'Natural Language Query Engine',
          icon: MessageCircle,
          description: 'An advanced NLP-powered query engine that allows users to interact with data using natural language, making data exploration accessible to non-technical users.',
          aiFeedback: 'The **Natural Language Query Engine** is a standout feature. It addresses the critical need for making data analytics accessible to a broader range of users. The implementation of NLP technology here is innovative and could significantly enhance user engagement with the platform. Consider expanding language support and continuously improving the accuracy of query interpretation.',
          improvementSuggestions: ['Expand language support', 'Implement context-aware query understanding', 'Develop a feedback loop for query accuracy improvement'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high potential impact and reach, with good confidence levels.',
              suggestions: ['Prioritize accuracy improvements', 'Expand the range of supported query types', 'Develop user onboarding materials to maximize adoption'],
              values: {
                reach: 9,
                impact: 10,
                confidence: 8,
                effort: 7
              }
            },
            moscow: {
              feedback: 'The Natural Language Query Engine is a key differentiator for the platform.',
              suggestions: ['Ensure robust basic query functionality', 'Prioritize context-awareness in query interpretation', 'Consider adding voice input as a future enhancement'],
              categorization: {
                must: ['Basic natural language query processing', 'Integration with data sources'],
                should: ['Context-aware query interpretation', 'Query suggestion feature'],
                could: ['Multi-language support', 'Voice input for queries'],
                wont: ['Automatic report generation from queries (for now)']
              }
            }
          },
          children: []
        },
        { 
          name: 'Predictive Analytics Module',
          icon: Zap,
          description: 'A powerful predictive analytics tool that leverages machine learning algorithms to forecast trends, identify potential issues, and suggest optimizations based on historical data.',
          aiFeedback: 'The **Predictive Analytics Module** is a crucial component of the platform, aligning well with the increasing demand for forward-looking insights in business intelligence. The use of machine learning algorithms for forecasting and optimization is on-point. Consider expanding the range of predictive models available and implementing automated model selection for different types of data and prediction tasks.',
          improvementSuggestions: ['Implement automated model selection', 'Expand the range of available predictive models', 'Develop explainable AI features for predictions'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high impact and reach, with good confidence levels, but may require significant effort.',
              suggestions: ['Focus on accuracy and reliability of predictions', 'Develop industry-specific prediction models', 'Implement clear visualizations of prediction confidence levels'],
              values: {
                reach: 8,
                impact: 9,
                confidence: 7,
                effort: 8
              }
            },
            moscow: {
              feedback: 'The Predictive Analytics Module is essential for the platform\'s value proposition.',
              suggestions: ['Ensure a core set of reliable prediction models', 'Prioritize model interpretability features', 'Consider adding advanced features like anomaly detection in future iterations'],
              categorization: {
                must: ['Basic trend forecasting', 'Integration with data preprocessing'],
                should: ['Multiple machine learning model options', 'Model performance metrics'],
                could: ['Automated model selection', 'Anomaly detection in predictions'],
                wont: ['Real-time predictive streaming (for initial release)']
              }
            }
          },
          children: []
        },
        { 
          name: 'Interactive Visualization Dashboard',
          icon: Layout,
          description: 'A highly customizable and interactive dashboard that transforms complex data into visually appealing and easily understandable charts, graphs, and other visualizations.',
          aiFeedback: 'The **Interactive Visualization Dashboard** is a critical feature for making complex data accessible and actionable. The focus on customization and interactivity is excellent, as it caters to diverse user needs. Consider implementing AI-driven suggestions for visualization types based on the data being analyzed, and explore options for collaborative features allowing multiple users to interact with the same dashboard simultaneously.',
          improvementSuggestions: ['Implement AI-driven visualization suggestions', 'Add collaborative features for team analysis', 'Develop more advanced, interactive chart types'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high reach and impact, with good confidence and reasonable effort requirements.',
              suggestions: ['Prioritize user experience and intuitive design', 'Implement a wide range of visualization options', 'Develop easy-to-use customization tools'],
              values: {
                reach: 10,
                impact: 8,
                confidence: 9,
                effort: 7
              }
            },
            moscow: {
              feedback: 'The Interactive Visualization Dashboard is a core component of the platform\'s usability.',
              suggestions: ['Ensure a robust set of basic chart types', 'Prioritize customization and interactivity features', 'Consider adding advanced features like predictive visualizations in future iterations'],
              categorization: {
                must: ['Basic chart types (bar, line, pie, etc.)', 'Data filtering and sorting'],
                should: ['Custom color schemes and branding', 'Interactive data exploration'],
                could: ['AI-suggested visualizations', 'Collaborative viewing and editing'],
                wont: ['3D or VR visualizations (for initial release)']
              }
            }
          },
          children: []
        },
      ],
    },
    {
      name: 'Cloud Migration Suite',
      icon: Globe,
      description: 'A comprehensive suite of tools designed to facilitate seamless migration of on-premises infrastructure and applications to cloud environments, ensuring minimal downtime and maximum efficiency.',
      aiFeedback: 'The **Cloud Migration Suite** addresses a critical need in the market as more businesses move towards cloud-based solutions. The **Multi-Cloud Orchestrator** is particularly noteworthy, offering flexibility that many competitors lack. The **Automated Dependency Mapping** tool could significantly reduce migration complexity and errors. The **Performance Optimization Engine** is crucial for ensuring post-migration efficiency. Consider incorporating more AI-driven features, such as predictive migration planning or automated cloud cost optimization.',
      improvementSuggestions: ['Implement AI-driven migration planning', 'Develop automated cloud cost optimization features', 'Create a post-migration health monitoring system'],
      aiAnalysis: {
        rice: {
          feedback: 'This project has high impact and reach, with good confidence levels and moderate effort requirements.',
          suggestions: ['Prioritize the Multi-Cloud Orchestrator for its market differentiation', 'Focus on enhancing the Automated Dependency Mapping for its complexity-reducing potential', 'Consider simplifying the Performance Optimization Engine for quicker time-to-market'],
          values: {
            reach: 8,
            impact: 9,
            confidence: 8,
            effort: 7
          }
        },
        moscow: {
          feedback: 'The features are well-distributed across MoSCoW categories, with a good balance of essential and innovative elements.',
          suggestions: ['Ensure robust core migration functionality', 'Prioritize multi-cloud support and dependency mapping', 'Consider adding AI-driven features in future iterations'],
          categorization: {
            must: ['Basic cloud migration tools', 'Data integrity checks'],
            should: ['Multi-Cloud Orchestrator', 'Automated Dependency Mapping'],
            could: ['AI-driven migration planning', 'Automated cloud cost optimization'],
            wont: ['On-premises to edge computing migration (for now)']
          }
        }
      },
      children: [
        { 
          name: 'Multi-Cloud Orchestrator',
          icon: Globe,
          description: 'A powerful tool that enables seamless management and migration across multiple cloud providers, offering flexibility and avoiding vendor lock-in.',
          aiFeedback: 'The **Multi-Cloud Orchestrator** is a standout feature of the Cloud Migration Suite. It addresses the growing trend of businesses adopting multi-cloud strategies. The ability to manage and migrate across different cloud providers is a significant advantage. Consider enhancing this feature with AI-driven recommendations for optimal resource allocation across clouds based on cost, performance, and compliance requirements.',
          improvementSuggestions: ['Implement AI-driven cloud resource optimization', 'Expand the range of supported cloud providers', 'Develop a unified dashboard for multi-cloud management'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high impact and reach, with good confidence levels and moderate effort requirements.',
              suggestions: ['Prioritize support for major cloud providers', 'Develop robust API integrations', 'Focus on creating an intuitive user interface for multi-cloud management'],
              values: {
                reach: 9,
                impact: 10,
                confidence: 8,
                effort: 8
              }
            },
            moscow: {
              feedback: 'The Multi-Cloud Orchestrator is a key differentiator for the Cloud Migration Suite.',
              suggestions: ['Ensure seamless migration between major cloud providers', 'Prioritize features for cost comparison and optimization across clouds', 'Consider adding advanced features like AI-driven cloud selection in future iterations'],
              categorization: {
                must: ['Support for major cloud providers (AWS, Azure, GCP)', 'Basic migration tools'],
                should: ['Cost comparison features', 'Performance monitoring across clouds'],
                could: ['AI-driven cloud selection and optimization', 'Support for niche cloud providers'],
                wont: ['Automatic contract negotiation with cloud providers (for now)']
              }
            }
          },
          children: []
        },
        { 
          name: 'Automated Dependency Mapping',
          icon: Code,
          description: 'An intelligent system that automatically discovers and maps dependencies between applications, services, and infrastructure components, streamlining the migration planning process.',
          aiFeedback: 'The **Automated Dependency Mapping** tool is crucial for reducing the complexity and potential errors in the migration process. Its ability  to automatically discover and map dependencies is a significant time-saver and risk-reducer. Consider enhancing this feature with machine learning capabilities to predict potential issues or conflicts based on the discovered dependencies.',
          improvementSuggestions: ['Implement machine learning for predictive issue detection', 'Develop visual dependency mapping tools', 'Create automated migration plan generation based on discovered dependencies'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high impact and confidence levels, with moderate reach and effort requirements.',
              suggestions: ['Focus on accuracy and comprehensiveness of dependency discovery', 'Develop clear visualizations of discovered dependencies', 'Implement features to handle complex, multi-tier application architectures'],
              values: {
                reach: 7,
                impact: 9,
                confidence: 9,
                effort: 7
              }
            },
            moscow: {
              feedback: 'The Automated Dependency Mapping is essential for efficient and error-free migrations.',
              suggestions: ['Ensure comprehensive discovery of application and infrastructure dependencies', 'Prioritize features for handling complex, distributed systems', 'Consider adding AI-driven dependency analysis and recommendations in future iterations'],
              categorization: {
                must: ['Automatic discovery of application dependencies', 'Basic dependency visualization'],
                should: ['Handling of complex, multi-tier architectures', 'Integration with migration planning tools'],
                could: ['AI-driven dependency analysis and recommendations', 'Automatic generation of migration sequence'],
                wont: ['Automatic code refactoring for discovered dependencies (for initial release)']
              }
            }
          },
          children: []
        },
        { 
          name: 'Performance Optimization Engine',
          icon: Zap,
          description: 'A sophisticated tool that continuously monitors and optimizes the performance of migrated applications and infrastructure in the cloud environment.',
          aiFeedback: 'The **Performance Optimization Engine** is a valuable addition to the Cloud Migration Suite, addressing the critical need for maintaining and improving performance post-migration. Its continuous monitoring and optimization capabilities can significantly enhance the value proposition of the migration service. Consider incorporating machine learning algorithms to predict performance issues before they occur and to provide more nuanced, context-aware optimization recommendations.',
          improvementSuggestions: ['Implement predictive performance analytics', 'Develop automated scaling and resource allocation features', 'Create customizable performance dashboards for different user roles'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high impact and moderate reach, with good confidence levels and significant effort requirements.',
              suggestions: ['Focus on developing accurate performance metrics and benchmarks', 'Implement automated optimization recommendations', 'Develop features for easy comparison of pre and post-migration performance'],
              values: {
                reach: 7,
                impact: 9,
                confidence: 8,
                effort: 8
              }
            },
            moscow: {
              feedback: 'The Performance Optimization Engine is crucial for ensuring the long-term success of cloud migrations.',
              suggestions: ['Ensure robust performance monitoring and basic optimization features', 'Prioritize automated scaling and resource allocation capabilities', 'Consider adding AI-driven predictive performance analytics in future iterations'],
              categorization: {
                must: ['Real-time performance monitoring', 'Basic performance optimization recommendations'],
                should: ['Automated scaling and resource allocation', 'Comparative pre and post-migration performance analytics'],
                could: ['AI-driven predictive performance analytics', 'Customizable performance dashboards for different user roles'],
                wont: ['Automatic code optimization for performance (for initial release)']
              }
            }
          },
          children: []
        },
      ],
    },
    {
      name: 'Cybersecurity Shield',
      icon: Shield,
      description: 'A comprehensive cybersecurity solution that leverages AI and machine learning to provide real-time threat detection, automated incident response, and proactive vulnerability management.',
      aiFeedback: 'The **Cybersecurity Shield** project demonstrates a strong focus on critical security needs. The **Real-time Threat Detection** feature, powered by AI, is particularly relevant in today\'s rapidly evolving threat landscape. The **Automated Incident Response** system can significantly reduce response times and minimize damage from attacks. The **Proactive Vulnerability Scanner** is crucial for maintaining a strong security posture. Consider enhancing the AI capabilities to include predictive threat modeling and expanding the scope of automated responses.',
      improvementSuggestions: ['Implement predictive threat modeling', 'Expand automated response capabilities', 'Develop a threat intelligence sharing network'],
      aiAnalysis: {
        rice: {
          feedback: 'This project has very high impact and reach, with good confidence levels, but may require significant effort.',
          suggestions: ['Prioritize the Real-time Threat Detection for its critical nature', 'Focus on enhancing the accuracy and speed of the Automated Incident Response', 'Consider phased implementation of the Proactive Vulnerability Scanner to manage effort'],
          values: {
            reach: 9,
            impact: 10,
            confidence: 8,
            effort: 9
          }
        },
        moscow: {
          feedback: 'The features are well-balanced, covering essential security needs while also including advanced capabilities.',
          suggestions: ['Ensure robust core security functionalities', 'Prioritize AI-driven threat detection and automated responses', 'Consider adding advanced features like predictive threat modeling in future iterations'],
          categorization: {
            must: ['Real-time threat detection', 'Basic incident response'],
            should: ['Automated incident response', 'Proactive vulnerability scanning'],
            could: ['Predictive threat modeling', 'Threat intelligence sharing network'],
            wont: ['Quantum-resistant encryption (for now)']
          }
        }
      },
      children: [
        { 
          name: 'Real-time Threat Detection',
          icon: Shield,
          description: 'An AI-powered system that continuously monitors network traffic and system behaviors to identify and alert on potential security threats in real-time.',
          aiFeedback: 'The **Real-time Threat Detection** feature is a cornerstone of the Cybersecurity Shield. Its use of AI for continuous monitoring and threat identification is crucial in today\'s fast-paced threat landscape. The real-time nature of the system is a significant advantage. Consider enhancing the AI models to reduce false positives and implement more advanced anomaly detection techniques. Also, explore the possibility of incorporating external threat intelligence feeds to improve detection capabilities.',
          improvementSuggestions: ['Enhance AI models to reduce false positives', 'Implement advanced anomaly detection techniques', 'Integrate external threat intelligence feeds'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has very high impact and reach, with good confidence levels and significant effort requirements.',
              suggestions: ['Prioritize accuracy and speed of threat detection', 'Focus on minimizing false positives', 'Develop comprehensive alert management system'],
              values: {
                reach: 10,
                impact: 10,
                confidence: 8,
                effort: 9
              }
            },
            moscow: {
              feedback: 'Real-time Threat Detection is absolutely critical for the Cybersecurity Shield.',
              suggestions: ['Ensure comprehensive coverage of common threat vectors', 'Prioritize real-time alerting and reporting features', 'Consider adding predictive threat detection capabilities in future iterations'],
              categorization: {
                must: ['Real-time network traffic monitoring', 'AI-powered threat identification'],
                should: ['Customizable alert thresholds', 'Integration with incident response systems'],
                could: ['Predictive threat modeling', 'User behavior analytics'],
                wont: ['Autonomous threat neutralization (for initial release due to potential risks)']
              }
            }
          },
          children: []
        },
        { 
          name: 'Automated Incident Response',
          icon: Zap,
          description: 'An intelligent system that automatically initiates and manages response protocols when security incidents are detected, minimizing response time and potential damage.',
          aiFeedback: 'The **Automated Incident Response** system is a crucial component for rapid threat mitigation. Its ability to automatically initiate response protocols can significantly reduce the impact of security incidents. The focus on minimizing response time is excellent. Consider implementing machine learning algorithms to continuously improve response strategies based on the outcomes of previous incidents. Also, explore the development of customizable response workflows to cater to different types of organizations and security policies.',
          improvementSuggestions: ['Implement machine learning for response strategy optimization', 'Develop customizable response workflows', 'Create a simulation mode for testing and training'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high impact and reach, with good confidence levels and moderate effort requirements.',
              suggestions: ['Focus on developing a comprehensive library of response protocols', 'Implement robust logging and auditing of automated responses', 'Develop intuitive interfaces for manual intervention when necessary'],
              values: {
                reach: 9,
                impact: 10,
                confidence: 8,
                effort: 8
              }
            },
            moscow: {
              feedback: 'Automated Incident Response is a key differentiator for the Cybersecurity Shield.',
              suggestions: ['Ensure a core set of automated responses for common threats', 'Prioritize integration with threat detection systems', 'Consider adding AI-driven response optimization in future iterations'],
              categorization: {
                must: ['Automatic triggering of response protocols', 'Integration with threat detection'],
                should: ['Customizable response workflows', 'Detailed logging and auditing'],
                could: ['AI-driven response optimization', 'Simulation mode for testing'],
                wont: ['Fully autonomous decision-making without human oversight (for initial release)']
              }
            }
          },
          children: []
        },
        { 
          name: 'Proactive Vulnerability Scanner',
          icon: Search,
          description: 'An advanced tool that continuously scans systems and applications for potential vulnerabilities, providing actionable insights and remediation recommendations before they can be exploited.',
          aiFeedback: 'The **Proactive Vulnerability Scanner** is a vital tool for maintaining a strong security posture. Its continuous scanning capability and focus on actionable insights are significant strengths. The provision of remediation recommendations adds considerable value. Consider implementing machine learning algorithms to predict potential future vulnerabilities based on system changes and emerging threat patterns. Also, explore the possibility of integrating with popular development tools to catch vulnerabilities earlier in the software development lifecycle.',
          improvementSuggestions: ['Implement predictive vulnerability analysis', 'Integrate with popular development and DevOps tools', 'Develop a risk scoring system for prioritizing vulnerabilities'],
          aiAnalysis: {
            rice: {
              feedback: 'This feature has high impact and reach, with very good confidence levels and moderate effort requirements.',
              suggestions: ['Focus on comprehensive coverage of known vulnerability types', 'Develop clear, actionable remediation instructions', 'Implement features for tracking vulnerability remediation progress'],
              values: {
                reach: 9,
                impact: 9,
                confidence: 9,
                effort: 7
              }
            },
            moscow: {
              feedback: 'The Proactive Vulnerability Scanner is essential for proactive cybersecurity measures.',
              suggestions: ['Ensure robust scanning capabilities for common vulnerabilities', 'Prioritize actionable remediation recommendations', 'Consider adding AI-driven predictive vulnerability analysis in future iterations'],
              categorization: {
                must: ['Continuous vulnerability scanning', 'Basic remediation recommendations'],
                should: ['Customizable scanning policies', 'Integration with patch management systems'],
                could: ['AI-driven predictive vulnerability analysis', 'Integration with CI/CD pipelines'],
                wont: ['Automatic vulnerability patching (for initial release due to potential risks)']
              }
            }
          },
          children: []
        },
      ],
    },
  ]
}

type MenuItem = {
  name: string
  icon: any
  description: string
  aiFeedback: string
  improvementSuggestions: string[]
  aiAnalysis: {
    rice: {
      feedback: string
      suggestions: string[]
      values: {
        reach: number
        impact: number
        confidence: number
        effort: number
      }
    }
    moscow: {
      feedback: string
      suggestions: string[]
      categorization: {
        must: string[]
        should: string[]
        could: string[]
        wont: string[]
      }
    }
  }
  children?: MenuItem[]
}

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export default function Component() {
  const [currentPath, setCurrentPath] = useState<MenuItem[]>([menuData])
  const [selectedItem, setSelectedItem] = useState<MenuItem>(menuData)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello! How can I assist you with TechInnovate Solutions\' project management today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isFeatureSuggestionOpen, setIsFeatureSuggestionOpen] = useState(false)
  const [newItemType, setNewItemType] = useState<string | null>(null)

  const handleSelect = (item: MenuItem) => {
    setSelectedItem(item)
    setCurrentPath(prev => [...prev, item])
  }

  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1)
    setCurrentPath(newPath)
    setSelectedItem(newPath[newPath.length - 1])
  }

  const calculateRiceScore = (values: { reach: number; impact: number; confidence: number; effort: number }) => {
    return ((values.reach * values.impact * values.confidence) / values.effort).toFixed(2)
  }

  const getItemsForRiceTable = (item: MenuItem): MenuItem[] => {
    if (item.children && item.children.length > 0) {
      return item.children
    }
    return [item]
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }])
      if (newItemType) {
        // Here you would typically call an API to create the new item
        console.log(`Creating new ${newItemType} with description: ${inputMessage}`)
        setNewItemType(null)
        setChatMessages(prev => [...prev, { role: 'assistant', content: `Great! I've created a new ${newItemType} with the description you provided. Is there anything else you'd like to do?` }])
      } else {
        // Existing logic for general chat
        setTimeout(() => {
          setChatMessages(prev => [...prev, { role: 'assistant', content: `I understand you're asking about "${inputMessage}". How can I help you with that?` }])
        }, 1000)
      }
      setInputMessage('')
    }
  }

  const openChatWithContext = (context: string) => {
    setIsChatOpen(true)
    setChatMessages(prev => [
      ...prev,
      { role: 'assistant', content: `Let's discuss the improvement suggestion: "${context}". What specific aspects would you like to explore or implement?` }
    ])
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-6 max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink 
                        href="#" 
                        onClick={() => {
                          setCurrentPath([menuData])
                          setSelectedItem(menuData)
                        }}
                      >
                        <Home className="h-4 w-4 inline-block mr-2" />
                        {menuData.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {currentPath.slice(1).map((item, index) => (
                      <BreadcrumbItem key={index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbLink href="#" onClick={() => handleBreadcrumbClick(index + 1)}>
                          <item.icon className="h-4 w-4 inline-block mr-2" />
                          {item.name}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
                <Popover open={isChatOpen}  onOpenChange={setIsChatOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-0" align="end">
                    <div className="flex flex-col h-[400px]">
                      <div className="p-4 border-b">
                        <h2 className="text-lg font-semibold">Project Assistant</h2>
                      </div>
                      <ScrollArea className="flex-1 p-4">
                        {chatMessages.map((message, index) => (
                          <div key={index} className={`mb-4 ${message.role === 'assistant' ? 'text-blue-600' : 'text-gray-800'}`}>
                            <p className="font-semibold">{message.role === 'assistant' ? 'Assistant' : 'You'}:</p>
                            <p>{message.content}</p>
                          </div>
                        ))}
                      </ScrollArea>
                      <div className="p-4 border-t">
                        <div className="flex space-x-2">
                          <Input
                            type="text"
                            placeholder="Type a message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          />
                          <Button onClick={handleSendMessage} size="icon">
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => {
                setNewItemType(selectedItem.children ? 'feature' : 'project')
                setIsChatOpen(true)
                setChatMessages(prev => [
                  ...prev, 
                  { 
                    role: 'assistant', 
                    content: `Would you like to create a new ${selectedItem.children ? 'feature' : 'project'}? Please provide a description.`
                  }
                ])
              }}
            >
              <PlusCircle className="h-5 w-5" />
              <span className="sr-only">Add item</span>
            </Button>
          </div>
          <p className="text-gray-700">{selectedItem.description}</p>
          
          <Card>
            <CardContent className="space-y-4 pt-6">
              {selectedItem.children ? (
                selectedItem.children.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleSelect(item)}>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">This item has no sub-features or children.</p>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <Card>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">AI Feedback</h4>
                    <p>{selectedItem.aiFeedback}</p>
                  </div>
                  <Card className="bg-yellow-50 border-yellow-100">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Improvement Suggestions</h4>
                      <div className="flex flex-wrap gap-2">
                                                {selectedItem.improvementSuggestions.map((suggestion, index) => (
                          <Button 
                            key={index} 
                            variant="outline" 
                            className="bg-yellow-100 hover:bg-yellow-200 border-yellow-200" 
                            size="sm"
                            onClick={() => openChatWithContext(suggestion)}
                          >
                            <Lightbulb className="mr-2 h-4 w-4" />
                            {suggestion}
                          </Button>
                        ))}
                        <Button 
                          variant="outline" 
                          className="bg-yellow-100 hover:bg-yellow-200 border-yellow-200" 
                          size="sm" 
                          onClick={() => {
                            setIsChatOpen(true)
                            setChatMessages(prev => [
                              ...prev,
                              { role: 'assistant', content: "I can suggest some AI-generated features for your project. What specific area or functionality would you like to focus on?" }
                            ])
                          }}
                        >
                          <Lightbulb className="mr-2 h-4 w-4" />
                          AI Feature Suggestion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced">
              <Card>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="rice">
                      <AccordionTrigger>RICE Analysis</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p className="text-sm text-gray-600">{selectedItem.aiAnalysis.rice.feedback}</p>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Reach</TableHead>
                                <TableHead>Impact</TableHead>
                                <TableHead>Confidence</TableHead>
                                <TableHead>Effort</TableHead>
                                <TableHead>Score</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {getItemsForRiceTable(selectedItem).map((item, index) => (
                                <TableRow key={index}>
                                  <TableCell>{item.name}</TableCell>
                                  <TableCell>{item.aiAnalysis.rice.values.reach}</TableCell>
                                  <TableCell>{item.aiAnalysis.rice.values.impact}</TableCell>
                                  <TableCell>{item.aiAnalysis.rice.values.confidence}</TableCell>
                                  <TableCell>{item.aiAnalysis.rice.values.effort}</TableCell>
                                  <TableCell>{calculateRiceScore(item.aiAnalysis.rice.values)}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                          <Card className="bg-yellow-50 border-yellow-100">
                            <CardContent className="pt-6">
                              <h5 className="font-medium mb-2">Improvement Suggestions:</h5>
                              <div className="flex flex-wrap gap-2">
                                {selectedItem.aiAnalysis.rice.suggestions.map((suggestion, index) => (
                                  <Button 
                                    key={index} 
                                    variant="outline" 
                                    className="bg-yellow-100 hover:bg-yellow-200 border-yellow-200" 
                                    size="sm"
                                    onClick={() => openChatWithContext(suggestion)}
                                  >
                                    <Lightbulb className="mr-2 h-4 w-4" />
                                    {suggestion}
                                  </Button>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="moscow">
                      <AccordionTrigger>MoSCoW Analysis</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p className="text-sm text-gray-600">{selectedItem.aiAnalysis.moscow.feedback}</p>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Must Have</TableHead>
                                <TableHead>Should Have</TableHead>
                                <TableHead>Could Have</TableHead>
                                <TableHead>Won't Have</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>
                                  <ul className="list-disc pl-4">
                                    {selectedItem.aiAnalysis.moscow.categorization.must.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                                </TableCell>
                                <TableCell>
                                  <ul className="list-disc pl-4">
                                    {selectedItem.aiAnalysis.moscow.categorization.should.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                                </TableCell>
                                <TableCell>
                                  <ul className="list-disc pl-4">
                                    {selectedItem.aiAnalysis.moscow.categorization.could.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                                </TableCell>
                                <TableCell>
                                  <ul className="list-disc pl-4">
                                    {selectedItem.aiAnalysis.moscow.categorization.wont.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <Card className="bg-yellow-50 border-yellow-100">
                            <CardContent className="pt-6">
                              <h5 className="font-medium mb-2">Improvement Suggestions:</h5>
                              <div className="flex flex-wrap gap-2">
                                {selectedItem.aiAnalysis.moscow.suggestions.map((suggestion, index) => (
                                  <Button 
                                    key={index} 
                                    variant="outline" 
                                    className="bg-yellow-100 hover:bg-yellow-200 border-yellow-200" 
                                    size="sm"
                                    onClick={() => openChatWithContext(suggestion)}
                                  >
                                    <Lightbulb className="mr-2 h-4 w-4" />
                                    {suggestion}
                                  </Button>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}