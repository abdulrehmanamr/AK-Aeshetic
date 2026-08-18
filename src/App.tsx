import React, { Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StickyBottomBar from './components/StickyBottomBar';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import CategoryTreatmentPage from './pages/CategoryTreatmentPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import ResultsPage from './pages/ResultsPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import PriceGuidePage from './pages/PriceGuidePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LabTestPage from './pages/LabTestPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { AlertCircle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { TREATMENT_CATEGORIES, TREATMENTS } from './data/treatments';

// Error Boundary
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F7F3ED] text-[#171614] flex items-center justify-center p-6">
          <div className="max-w-lg w-full frosted-card p-8 rounded-3xl space-y-6 shadow-2xl border border-red-500/20 text-center">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#9A8D80] font-bold">
                Application Recovery
              </span>
              <h1 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#171614]">
                Something went wrong
              </h1>
              <p className="text-sm text-[#171614]/80 leading-relaxed font-light">
                An unexpected interface state occurred. You can reload the page or return to the clinic homepage safely.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-[#171614]/5 text-left p-4 rounded-2xl text-xs font-mono text-[#171614]/70 overflow-x-auto max-h-36">
                <p className="font-bold text-red-700 mb-1">{this.state.error.toString()}</p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="text-[10px] text-gray-500 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-5 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-5 bg-white/70 hover:bg-white text-[#171614] text-xs font-bold uppercase tracking-wider rounded-full transition-all border border-[#171614]/15 shadow-xs"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Smart Router for /treatments/:slug
function TreatmentOrCategoryDispatcher() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const param = pathParts[1] || '';

  const isCategory = TREATMENT_CATEGORIES.some((c) => c.id === param);
  if (isCategory) {
    return <CategoryTreatmentPage />;
  }

  const isTreatment = TREATMENTS.some((t) => t.slug === param);
  if (isTreatment) {
    return <TreatmentDetailPage />;
  }

  // Fallback to Category page which will show Category Not Found or TreatmentDetailPage
  return <TreatmentDetailPage />;
}

// 404 Page Component
function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-[#F7F3ED] text-[#171614]">
      <div className="max-w-md w-full text-center space-y-6 frosted-card p-8 rounded-3xl shadow-sm">
        <span className="font-mono text-4xl font-bold text-[#9A8D80] block">404</span>
        <div className="space-y-2">
          <h1 className="font-serif-editorial text-3xl font-bold text-[#171614]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#171614]/80 leading-relaxed font-light">
            The page or clinical section you are looking for has been relocated or does not exist.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 py-3 px-6 bg-[#171614] hover:bg-black text-[#F7F3ED] text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/treatments"
            className="inline-flex items-center justify-center py-3 px-6 bg-white/70 hover:bg-white text-[#171614] text-xs font-bold uppercase tracking-wider rounded-full transition-all border border-[#171614]/15 shadow-xs"
          >
            View Treatments
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#F7F3ED] text-[#171614] antialiased selection:bg-[#171614] selection:text-[#F7F3ED]">
          <ScrollToTop />
          <Header />

          <main className="flex-1">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Treatments */}
              <Route path="/treatments" element={<TreatmentsPage />} />
              <Route path="/treatments/category/:categoryId" element={<CategoryTreatmentPage />} />
              <Route path="/treatments/:slug" element={<TreatmentOrCategoryDispatcher />} />

              {/* Results & Doctors */}
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/before-after" element={<ResultsPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/doctors/:slug" element={<DoctorDetailPage />} />

              {/* Price Guide */}
              <Route path="/price-guide" element={<PriceGuidePage />} />
              <Route path="/pricing" element={<PriceGuidePage />} />

              {/* MK Academy */}
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:slug" element={<CourseDetailPage />} />
              <Route path="/academy" element={<CoursesPage />} />
              <Route path="/academy/:slug" element={<CourseDetailPage />} />

              {/* Diagnostic Lab Tests */}
              <Route path="/lab-test" element={<LabTestPage />} />
              <Route path="/lab-tests" element={<LabTestPage />} />

              {/* Clinical Insights / Journal */}
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightDetailPage />} />
              <Route path="/blog" element={<InsightsPage />} />
              <Route path="/blog/:slug" element={<InsightDetailPage />} />

              {/* Contact, Booking & FAQs */}
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book-consultation" element={<BookConsultationPage />} />
              <Route path="/book" element={<BookConsultationPage />} />

              {/* Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<PrivacyPolicyPage />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          <StickyBottomBar />
          <WhatsAppFloatingButton />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
