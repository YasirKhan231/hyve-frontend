"use client";

import { useState, useEffect, useCallback } from "react";
import { X, AlertCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TeamMember {
  name: string;
  role: string;
  email: string;
}

interface TeamSize {
  value: string;
  label: string;
  min: number;
  max: number;
}

const TEAM_SIZES: TeamSize[] = [
  { value: "small", label: "1-4 members", min: 1, max: 4 },
  { value: "medium", label: "4-8 members", min: 4, max: 8 },
  { value: "large", label: "10-15 members", min: 10, max: 15 },
];

interface TeamRegistrationDialogProps {
  iisOpen: boolean;
  onClose: () => void;
}

export default function TeamRegistrationDialog({
  iisOpen,
  onClose,
}: TeamRegistrationDialogProps) {
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [expertise, setExpertise] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [showMemberInputs, setShowMemberInputs] = useState(false);
  const [maxTeamSize, setMaxTeamSize] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMember>({
    name: "",
    role: "",
    email: "",
  });
  const [error, setError] = useState("");

  // Get the selected team size limits
  const getSelectedTeamSize = useCallback(() => {
    return TEAM_SIZES.find((size) => size.value === teamSize);
  }, [teamSize]);

  // Check if can add more members
  const canAddMoreMembers = () => {
    const selectedSize = getSelectedTeamSize();
    if (!selectedSize) return false;
    return teamMembers.length < selectedSize.max;
  };

  // Check if minimum members requirement is met
  const hasMinimumMembers = () => {
    const selectedSize = getSelectedTeamSize();
    if (!selectedSize) return false;
    return teamMembers.length >= selectedSize.min;
  };

  const handleAddMember = () => {
    if (!currentMember.name || !currentMember.role || !currentMember.email) {
      setError("Please fill in name, role, and email for the team member");
      return;
    }

    if (!canAddMoreMembers()) {
      setError(`You can't add more than ${getSelectedTeamSize()?.max} members`);
      return;
    }

    setTeamMembers([...teamMembers, currentMember]);
    setCurrentMember({ name: "", role: "", email: "" });
    setError("");

    // Hide member inputs if we've reached the maximum
    if (teamMembers.length + 1 >= (getSelectedTeamSize()?.max || 0)) {
      setShowMemberInputs(false);
    }
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
    setError("");
  };

  const handleRegister = async () => {
    if (!teamName || !teamSize || !expertise || teamMembers.length === 0) {
      setError(
        "Please fill in all required fields and add at least one team member"
      );
      return;
    }

    if (!hasMinimumMembers()) {
      setError(`You need at least ${getSelectedTeamSize()?.min} team members`);
      return;
    }

    setIsSubmitting(true); // Start submission

    try {
      const response = await fetch("/api/teamregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName,
          maxTeamSize,
          expertise,
          teamMembers,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit team registration");
      }

      alert("Team registration submitted successfully");
      setTeamName("");
      setTeamSize("");
      setExpertise("");
      setTeamMembers([]);
      setShowMemberInputs(false);
      setCurrentMember({ name: "", role: "", email: "" });
      setError("");
      onClose();
    } catch (error) {
      alert("Failed to submit team registration. Please try again.");
      console.error("Error submitting team registration:", error);
    } finally {
      setIsSubmitting(false); // End submission
    }
  };

  // Reset member inputs when team size changes
  useEffect(() => {
    setTeamMembers([]);
    setShowMemberInputs(false);
    setCurrentMember({ name: "", role: "", email: "" });
    setError("");
    const selectedSize = getSelectedTeamSize();
    if (selectedSize) {
      setMaxTeamSize(selectedSize.max);
    } else {
      setMaxTeamSize(null);
    }
  }, [teamSize, getSelectedTeamSize]); // Added getSelectedTeamSize to dependencies

  return (
    <Dialog open={iisOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-200">
        <DialogHeader>
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="text-3xl font-bold text-gray-800">
              Team Registration
            </DialogTitle>
            <Users className="h-8 w-8 text-yellow-500" />
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Team Name
            </label>
            <Input
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Team Size
            </label>
            <Select value={teamSize} onValueChange={setTeamSize}>
              <SelectTrigger className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500">
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-md text-gray-900">
                {TEAM_SIZES.map((size) => (
                  <SelectItem
                    key={size.value}
                    value={size.value}
                    className="hover:bg-gray-100"
                  >
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Primary Expertise
            </label>
            <Select value={expertise} onValueChange={setExpertise}>
              <SelectTrigger className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500">
                <SelectValue placeholder="Select expertise" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-md">
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {teamSize && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Team Members ({teamMembers.length}/
                  {getSelectedTeamSize()?.max})
                </label>
                {canAddMoreMembers() && !showMemberInputs && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMemberInputs(true)}
                    className="bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200"
                  >
                    Add Team Member
                  </Button>
                )}
              </div>

              {showMemberInputs && (
                <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Member Name
                    </label>
                    <Input
                      placeholder="Enter member name"
                      value={currentMember.name}
                      onChange={(e) =>
                        setCurrentMember({
                          ...currentMember,
                          name: e.target.value,
                        })
                      }
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Member Role
                    </label>
                    <Input
                      placeholder="Enter member role"
                      value={currentMember.role}
                      onChange={(e) =>
                        setCurrentMember({
                          ...currentMember,
                          role: e.target.value,
                        })
                      }
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Member Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter member email"
                      value={currentMember.email}
                      onChange={(e) =>
                        setCurrentMember({
                          ...currentMember,
                          email: e.target.value,
                        })
                      }
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-yellow-400 text-yellow-800 border-yellow-500 hover:bg-yellow-500"
                    onClick={handleAddMember}
                  >
                    Add Member
                  </Button>
                </div>
              )}

              {teamMembers.length > 0 && (
                <div className="space-y-2">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div>
                        <span className="font-medium text-gray-800">
                          {member.name}
                        </span>
                        <span className="text-gray-600 ml-2">
                          ({member.role})
                        </span>
                        <span className="text-gray-500 ml-2 text-sm">
                          {member.email}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50"
                        onClick={() => handleRemoveMember(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {error && (
            <Alert
              variant="destructive"
              className="bg-red-50 border-red-200 text-red-800"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        <Button
          className={`w-full font-semibold text-lg py-6 ${
            isSubmitting
              ? "bg-yellow-500 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
          onClick={handleRegister}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register Team"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
